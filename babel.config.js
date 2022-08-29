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
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
    '@babel/plugin-proposal-class-static-block', // 必须在plugin-proposal-class-properties之前
    ['@babel/plugin-proposal-decorators', { legacy: true }], // 必须在plugin-proposal-class-properties之前
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-logical-assignment-operators',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-partial-application',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    '@babel/plugin-proposal-throw-expressions',
  ],
};
if (process.env.LANG === 'ts') {
  babelConfig.presets.push([
    '@babel/preset-typescript',
    {
      allExtensions: true, // 支持所有文件扩展名，否则在vue文件中使用ts会报错
    },
  ]);
}

module.exports = babelConfig;
