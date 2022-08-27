const os = require('os');
const { resolve, join } = require('path');
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const threads = os.cpus().length / 2;

const baseConfig = {
  target: 'web',
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'inline-source-map',
  entry: {
    app: resolve(__dirname, '../src/index.js'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: [resolve(__dirname, '../src')],
        use: [
          {
            loader: require.resolve('thread-loader'), // 开启多进程
            options: {
              workers: threads, // 数量
            },
          },
          'vue-loader',
        ],
      },
      {
        test: /\.[t|j]s[x]?$/,
        include: [resolve(__dirname, '../src')],
        use: [
          {
            loader: require.resolve('thread-loader'), // 开启多进程
            options: {
              workers: threads, // 数量
            },
          },
          {
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true, // 开启babel编译缓存
              cacheCompression: false, // 缓存文件不要压缩
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        include: [resolve(__dirname, '../src')],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: `static/images/[hash:8][ext][query]`,
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        include: [resolve(__dirname, '../src')],
        type: 'asset/resource',
        generator: {
          filename: `static/media/[hash:8][ext][query]`,
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        include: [resolve('../src')],
        type: 'asset/resource',
        generator: {
          filename: `static/fonts/[hash:8][ext][query]`,
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../index.html'),
      filename: 'index.html',
      minify: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, '../public'),
          to: resolve(__dirname, '../dist/static'),
        },
      ],
    }),
    new DefinePlugin({
      'process.env': {
        API_PATH: JSON.stringify('/api'),
      },
    }),
  ],
};

module.exports = baseConfig;
