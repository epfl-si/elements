const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function override(config, env) {
  // Consolidate chunk files instead
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false,
    },
  };
  // Move runtime into bundle instead of separate file
  config.optimization.runtimeChunk = false;

  // JS
  config.output.filename = 'static/js/[name].js';

  config.plugins = config.plugins.map(plugin => {
    if (plugin.constructor.name === 'MiniCssExtractPlugin') {
      return new MiniCssExtractPlugin({
        filename: 'static/css/[name].css',
        chunkFilename: 'static/css/[name].chunk.css',
      });
    }
    return plugin;
  })

  return config;
};
