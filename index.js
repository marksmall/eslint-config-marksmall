module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React
      // to use
      version: 'detect',
    },
    jest: {
      version: 26,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    'jest/globals': true, // https://www.npmjs.com/package/eslint-plugin-jest#usage
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
  },
  rules: {},
};
