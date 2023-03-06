/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 2,
        },
        multiline: {
          max: 10,
        },
      },
    ],
    "vue/no-unused-vars": [
      "error",
      {
        ignorePattern: "^_",
      },
    ],
  },
};
