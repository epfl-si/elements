/**
 * Model and Webpack plugin for component assets.
 *
 * This file wields Webpack magic so that all the information
 * contained within the .yml and .twig files under
 * ../assets/components/** is available to browser code. (Due to
 * Webpack limitations, which in turn stem from hard limits on what
 * can be achieved without dataflow analysis, that path cannot be
 * changed.)
 *
 * Importing one of the Element or Variant classes from within the
 * React reader app causes Webpack to bundle not only this file as
 * usual, but also all the YAML and Twig files mentioned above. The
 * data thereof is available through an OO API that hides the magic
 * from consumer code.
 *
 * The AssetsPlugin constructor is not meant for the browser (in fact,
 * it will be eliminated during an optimizing Webpack build). Instead,
 * it should be invoked from webpack.config.js to put the magic into
 * motion.
 */

// Behind the scenes, the implementation relies on two advanced
// features of Webpack (search for “eslint-disable-next-line” to find
// them): require with expression
// (https://webpack.js.org/guides/dependency-management/#require-with-expression)
// and a compile-time defined variable
// (https://webpack.js.org/plugins/define-plugin/). The latter holds
// the manifest i.e. enough information for Element.all() to work;
// while the former ensures that all .twig's and .yml's get parsed,
// evaluated (.twig only) and bundled at compile time. For Webpack to
// pull off that feat, it needs to know which files to load and which
// loaders to apply to them; which it figures out from parsing the
// prefix resp. suffix of the require() expression, only if both are
// literal strings. This is the reason why the source path
// (../assets/components) cannot be made flexible.

class Variant {
  static all (element) {
    return element.variants.map((v) => new Variant(element, v))
  }

  constructor (element, variant) {
    this.element = element
    Object.assign(this, variant)
  }

  html () {
    // Fragile Webpack sorcery below; do not break in refactoring
    // eslint-disable-next-line import/no-dynamic-require
    return require(`../assets/components/${this.element.uri()}/${this.element.component}-${this.name}.twig`)
  }

  uri () {
    return `${this.element.type}/${this.element.component}/${this.name}`
  }
}

class Element {
  static all () {
    const all = []
    // eslint-disable-next-line no-undef
    const manifest = _WEBPACK_COMPONENT_ASSET_MANIFEST_

    for (const { type, components } of manifest) {
      let id = 0
      for (const component of components) {
        const element = new Element(type, component)
        element.id = id
        id += 1
        all.push(element)
      }
    }

    return all
  }

  static byTypeAndName(type, component) {
    for (const that of Element.all()) {
      if (that.type === type && that.component === component) return that
    }
    return undefined
  }

  constructor (type, componentName) {
    this.type = type
    this.component = componentName

    // Fragile Webpack sorcery below; do not break in refactoring
    // eslint-disable-next-line import/no-dynamic-require
    const data = require(`../assets/components/${this.uri()}/${this.component}.yml`)

    Object.assign(this, data)
    this.variants = (this.variants || []).map((v) => new Variant(this, v))
  }

  html () {
    // Fragile Webpack sorcery below; do not break in refactoring
    // eslint-disable-next-line import/no-dynamic-require
    return require(`../assets/components/${this.uri()}/${this.component}.twig`)
  }

  uri () {
    return `${this.type}/${this.component}`
  }

  variant (name) {
    return this.variants.find((v) => v.name === name)
  }
}

/**
 * @constructor
 */
function AssetComponentsPlugin (order) {
  const { DefinePlugin } = serverSideRequire('webpack')
  const walkSync = serverSideRequire('walk-sync')

  const basePath = `${__dirname}/../assets/components`
  const filesAndDirs = walkSync(basePath)

  const assets = findAssetsOnFilesystem(filesAndDirs)
  const dirs = filesAndDirs
    .filter((d) => d.endsWith("/"))
    .map((d) => `${basePath}/${d}`)

  return new DefinePlugin({
    _WEBPACK_COMPONENT_ASSET_MANIFEST_: DefinePlugin.runtimeValue(
      () => JSON.stringify(assets),
      { econtextDependencies: dirs }
    )
  })

  // Note: keep all compile-time support code within function AssetPlugin(),
  // so that it gets eliminated in a production build.

  function findAssetsOnFilesystem (files) {
    const parseYamlPath = new RegExp('^([^/]+)/([^/]+)/([^/]+)[.]yml$')

    const manifest = []

    for (const type of order) {
      const components = []

      for (const file of files) {
        // For historical reasons, YAML files explicitly enumerate
        // variants. We could just as easily figure that out
        // implicitly from the list of .twig files on the file
        // system instead.
        const matched = file.match(parseYamlPath)
        if (!matched) continue
        const [_unused, type_, component, componentAgain] = matched
        if (type !== type_) continue
        if (component !== componentAgain) continue

        components.push(component)
      }

      manifest.push({ type, components })
    }

    return manifest
  }

  /**
   * We do *not* want Webpack messing with these.
   */
  function serverSideRequire (module) {
    // eslint-disable-next-line import/no-dynamic-require, no-eval
    return eval('require')(module)
  }
}

module.exports = { Element, Variant, AssetComponentsPlugin }
