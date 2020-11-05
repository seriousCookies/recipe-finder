module.exports = {
  extends: 'eslint-config-airbnb/base',
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
