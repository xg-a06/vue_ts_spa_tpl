const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getCssLoaders = (isProd) => {
  let sourceMap = !isProd;
  let lastLoader = isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader';
  const loaders = [
    {
      test: /\.css$/,
      use: [
        { loader: lastLoader },
        {
          loader: 'css-loader',
          options: { sourceMap: sourceMap },
        },
      ],
      include: [
        resolve(__dirname, '../src'),
        resolve(__dirname, '../node_modules'),
      ],
    },
    {
      test: /\.less$/,
      use: [
        { loader: lastLoader },
        {
          loader: 'css-loader',
          options: { sourceMap: sourceMap, importLoaders: 2 },
        },
        { loader: 'postcss-loader', options: { sourceMap: sourceMap } },
        { loader: 'less-loader', options: { sourceMap: sourceMap } },
      ],
      include: resolve(__dirname, '../src'),
    },
  ];
  return loaders;
};

exports.getCssLoaders = getCssLoaders;
