import os from 'os';
import { resolve, join } from 'path';
import { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const isProd = process.env.NODE_ENV === 'production';
const threads = os.cpus().length / 2;

const baseConfig = {
  target: 'web',
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'inline-source-map',
  entry: {
    app: './src/index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
    alias: {
      '@': resolve('../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.[t|j]s[x]?$/,
        include: [resolve('../src')],
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
        include: [resolve(join(workspace, rootDir), configDir)],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: `${subDir('images', assetPath)}/[hash:8][ext][query]`,
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        include: [resolve(join(workspace, rootDir), configDir)],
        type: 'asset/resource',
        generator: {
          filename: `${subDir('media', assetPath)}/[hash:8][ext][query]`,
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        include: [resolve(join(workspace, rootDir), configDir)],
        type: 'asset/resource',
        generator: {
          filename: `${subDir('fonts', assetPath)}/[hash:8][ext][query]`,
        },
      },
    ],
  },
  plugins: [
    ...htmls,
    new DefinePlugin({
      'process.env': {
        ...defines,
      },
    }),
  ],
};

export default baseConfig;
