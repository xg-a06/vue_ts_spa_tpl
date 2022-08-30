const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/essential', '@vue/typescript/recommended', 'eslint:recommended', '@vue/prettier', '@vue/eslint-config-typescript/recommended'],
  // extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'lastest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
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
    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': 0,
  },
};
