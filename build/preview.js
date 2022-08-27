const { resolve, dirname } = require('path');
const fs = require('fs');
const { promisify } = require('util');
const Koa = require('koa');
const serve = require('koa-static');
const { createProxyMiddleware } = require('koa-http-proxy-server');
const open = require('open');
const chalk = require('chalk');

const readFile = promisify(fs.readFile);

const createProxies = (app, proxy) => {
  if (typeof proxy !== 'object') {
    return;
  }
  Object.entries(proxy).forEach(([k, v]) => {
    app.use(createProxyMiddleware(k, v));
  });
};

const startServer = (options = {}) => {
  const randomPort = Math.round(Math.random() * 10000 + 10000);
  const {
    configDir,
    devServer: { proxy = {} } = {},
    preview: { port = randomPort } = {},
    path: { distPath = '../dist' } = {},
  } = options;

  const app = new Koa();

  createProxies(app, proxy);

  app.use(serve(resolve(__dirname, distPath)));

  app.use(async (ctx) => {
    const indexHtml = await readFile(
      `${resolve(__dirname, distPath)}/index.html`
    );
    ctx.set('Content-Type', 'text/html; charset=utf-8');
    ctx.body = indexHtml.toString();
  });

  app.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(chalk.green(`preview server started on ${url}`));
    open(url);
  });
};

startServer();
