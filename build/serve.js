const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./dev');

const compiler = Webpack(webpackConfig);
const { devServer: devServerOptions } = webpackConfig;
const server = new WebpackDevServer(devServerOptions, compiler);
server.start();
