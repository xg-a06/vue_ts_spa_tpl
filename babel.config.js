const babelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'chrome>=49',
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
          proposals: true, // 使用尚在“提议”阶段特性的 polyfill
        },
      },
    ],
    [
      '@babel/preset-typescript',
      {
        allExtensions: true, // 支持所有文件扩展名，否则在vue文件中使用ts会报错
      },
    ],
    'babel-preset-typescript-vue3',
  ],
  plugins: [
    ['@babel/plugin-transform-runtime'],
    ['@babel/plugin-proposal-decorators', { legacy: true }], // 必须在plugin-proposal-class-properties之前
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-partial-application',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    '@babel/plugin-proposal-throw-expressions',
  ],
};

module.exports = babelConfig;
