const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/essential', '@vue/typescript/recommended', 'eslint:recommended', '@vue/prettier', '@vue/eslint-config-typescript/recommended', 'plugin:prettier/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'lastest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      alias: {
        map: [['@', path.resolve('./src')]],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json'],
      },
    },
  },
  globals: {
    window: 'readonly',
  },
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        vue: 'always',
      },
    ],
    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': 0,
  },
};
