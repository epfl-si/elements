const path                      = require('path')
const BrowserSyncPlugin         = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin         = require('html-webpack-plugin')
const CopyPlugin                = require('copy-webpack-plugin')
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally')

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
      elements: "./assets/components/base.js"
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
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            },
          },
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/icons/[name][ext][query]'
          }
        }
      ]
    },
    resolve: { extensions: ['.js', '.jsx'] },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'reader/index.html',
        inject: false   // We'll handle the <script>s and <link>s ourselves.
      }),
      CopyServableAssets(  // Below
        ["**/*.twig", "**/*.yml", "**/*.js"],
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
      })
    ]
  }

  return webpackConfig
}

function CopyServableAssets (matchers, target) {

  function copiedAssetPath ({ context, absoluteFilename }) {
    const relative = path.relative(context, absoluteFilename),
      relativeToAssets = relative.replace(/^assets\//, "")
    return path.resolve(target, relativeToAssets)
  }

  const patterns = matchers.map((pattern) => ({
    from: `assets/${pattern}`, to: copiedAssetPath
  }))
  return new CopyPlugin({ patterns })
}
