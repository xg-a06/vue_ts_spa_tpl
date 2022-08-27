const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const baseConfig = require('./base');
const { getCssLoaders } = require('./css');

const devConfig = merge(baseConfig, {
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    publicPath: '/',
  },
  cache: {
    type: 'filesystem',
  },
  experiments: {
    lazyCompilation: true,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: {
      disableDotRule: true,
    },
    port: 2344,
  },
  module: {
    rules: getCssLoaders(process.env.NODE_ENV === 'production'),
  },
  plugins: [],
});

module.exports = devConfig;
