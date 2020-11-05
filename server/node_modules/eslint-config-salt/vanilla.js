module.exports = {
  extends: ['./index.js'].map(require.resolve),
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'prefer-numeric-literals': 'off',
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }],
    'no-var': 'off',
    'prefer-rest-params': 'off',
    strict: ['error', 'safe'],
  },
};
