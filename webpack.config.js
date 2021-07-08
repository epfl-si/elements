const path                      = require('path')
const BrowserSyncPlugin         = require('browser-sync-webpack-plugin')
const NodePolyfillPlugin        = require("node-polyfill-webpack-plugin")
const HtmlWebpackPlugin         = require('html-webpack-plugin')
const CopyPlugin                = require('copy-webpack-plugin')
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally')
const MiniCssExtractPlugin      = require('mini-css-extract-plugin')
const SVGSpritemapPlugin        = require('svg-spritemap-webpack-plugin')

const vendors = {
  css: [
    "node_modules/pickadate/lib/themes/classic.date.css",
    "node_modules/flickity/dist/flickity.css",
    "node_modules/flickity-fullscreen/fullscreen.css",
    "node_modules/intro.js/introjs.css",
    "node_modules/tablesaw/dist/tablesaw.css",
    "node_modules/cookieconsent/build/cookieconsent.min.css"
  ],
  js: [
    "node_modules/bootstrap/dist/js/bootstrap.bundle.js",
    "node_modules/pickadate/lib/picker.js",
    "node_modules/pickadate/lib/picker.date.js",
    "node_modules/tablesaw/dist/tablesaw.jquery.js",
    "node_modules/tablesaw/dist/tablesaw-init.js",
    "node_modules/clipboard/dist/clipboard.js",
    "node_modules/multiple-select/dist/multiple-select.js",
    "node_modules/selectize.js/dist/js/standalone/selectize.js",
    "node_modules/intro.js/intro.js",
    "node_modules/jquery-mousewheel/jquery.mousewheel.js",
    "node_modules/cookieconsent/build/cookieconsent.min.js"
  ]
}

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'
  const buildDir = path.resolve(__dirname, isProd ? 'dist' : 'build')

  const webpackConfig = {
    entry: {
      // All the JS that is part of elements itself, e.g. to make
      // carousels clicky etc.
      elements: ["./assets/components/base.js", "./assets/components/base.scss"],
      // The React app that lets you browse the style guide:
      reader: ["./reader/index.js", "./reader/reader.scss"]
    },
    output: {
      path: buildDir,
      publicPath: '',
      filename: 'js/[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          type: 'json',  // Meaning that the loader returns a data structure
          use: 'yaml-loader'
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: withOptions('babel-loader', {
            presets: [
              '@babel/preset-env',
              '@babel/react'
            ]
          })
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/icons/[name][ext][query]'
          }
        },
        {
          test: /\.scss$/,
          use: [
            withOptions(MiniCssExtractPlugin.loader, { publicPath: "../" }),
            withOptions('css-loader', { importLoaders: 2 }),
            withOptions('postcss-loader', postcssOptionsPresetEnv()),
            'sass-loader'
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: { extensions: ['.js', '.jsx'] },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'reader/index.html',
        inject: false   // We'll handle the <script>s and <link>s ourselves.
      }),
      Copy(  // Below
        ["twig", "yml", "js", "png", "gif", "svg", "jpg", "webmanifest"].map(
          (ext) => `assets/**/*.${ext}`
        ),
        buildDir,
        { munch: "assets/" }
      ),
      Copy(
        ["docs/**/*"],
        buildDir
      ),
      new MergeIntoSingleFilePlugin({
        files: {
          "js/vendors.min.js": vendors.js,
          "css/vendors.min.css": vendors.css,
        }
      }),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: buildDir }
      }),
      new NodePolyfillPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
      new SVGSpritemapPlugin("assets/icons/*.svg",
        {
          output: { filename: "icons/icons.svg" },
          sprite: { prefix: "icon-" }
        }),
      new SVGSpritemapPlugin("node_modules/feather-icons/dist/icons/*.svg",
        {
          output: { filename: "icons/feather-sprite.svg" },
          sprite: { prefix: false }  // "" doesn't work (yet), see
          // https://github.com/cascornelissen/svg-spritemap-webpack-plugin/issues/168
        })
    ]
  }

  if (!isProd) {
    webpackConfig.devtool = 'source-map'
    webpackConfig.plugins.push(Copy(
      "node_modules/bootstrap/dist/js/bootstrap.bundle.js.map",
      path.join(buildDir, "js")
    ))
  }

  return webpackConfig
}

function Copy (matchers, target, opts) {
  const { munch } = opts || {}
  function rewritePath (p) {
    return munch ? p.replace(new RegExp(`^${munch}`), "") : p
  }

  function copiedAssetPath ({ context, absoluteFilename }) {
    const relative = path.relative(context, absoluteFilename),
      munched = rewritePath(relative)
    return path.resolve(target, munched)
  }

  const matchersList = (matchers instanceof Array ? matchers : [matchers]),
    patterns = matchersList.map((pattern) => ({
      from: pattern, to: copiedAssetPath
    }))
  return new CopyPlugin({ patterns })
}

function withOptions(loader, options) {
  return { loader, options }
}

function postcssOptionsPresetEnv () {
  return {
    postcssOptions: {
      plugins: ["postcss-preset-env"]
    }
  }
}
