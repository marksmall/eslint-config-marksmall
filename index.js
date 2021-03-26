module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    // 'react-app',
    // 'plugin:cypress/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    // '../index',
  ],
  plugins: ['react-hooks', 'cypress', 'import', 'prettier'],
  rules: {},
};
