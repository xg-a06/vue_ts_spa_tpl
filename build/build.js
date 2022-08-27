const Webpack = require('webpack');
const chalk = require('chalk');
const webpackConfig = require('./prod');

Webpack(webpackConfig, (err, stats) => {
  if (err) throw err;
  if (!stats) throw new Error('no stats');
  process.stdout.write(
    `${stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    })}\n\n`
  );

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'));
    process.exit(1);
  }
});
