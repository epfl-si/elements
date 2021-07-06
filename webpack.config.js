const webpack           = require('webpack')
const path              = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

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
      filename: isProd ? 'js/[name].bundle.js' :
        // TODO: remove this toolbox-era bogon
        '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            },
          },
        }
      ]
    },
    resolve: { extensions: ['.js', '.jsx'] },
    plugins: [
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: buildDir }
      })
    ]
  }

  return webpackConfig
}
