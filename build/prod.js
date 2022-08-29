const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const { resolve, join } = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const chalk = require('chalk');
const baseConfig = require('./base');
const { getCssLoaders } = require('./css');

const devConfig = merge(baseConfig, {
  output: {
    clean: true,
    path: resolve(__dirname, '../dist'),
    filename: join('static', 'js/[name].[contenthash:8].js'),
    chunkFilename: join('static', 'js/[name].[contenthash:8].js'),
    publicPath: '/',
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'async',
          test: /[\\/]src[\\/]/,
          minChunks: 2,
          minSize: 30000,
          priority: -10,
          reuseExistingChunk: true,
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10,
        },
        // ui: {
        //   name: 'ui',
        //   test: /[\\/]node_modules[\\/](antd|@ant-design|rc-.*|tinycolor2|async-validator)/,
        //   chunks: 'all',
        //   priority: 20,
        //   reuseExistingChunk: true,
        // },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
    minimizer: [
      // new HardSourceWebpackPlugin(),
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 5,
          },
          compress: {
            ecma: 5,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: getCssLoaders(process.env.NODE_ENV === 'production'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: join('static', 'css/[name].[contenthash:8].css'),
      chunkFilename: join('static', 'css/[name].[contenthash:8].css'),
    }),
    new ProgressBarPlugin({
      total: 100,
      format: `${chalk.blue.bold('build ') + chalk.green.bold(':percent')} (:elapsed秒)`,
    }),
  ],
});

module.exports = devConfig;
