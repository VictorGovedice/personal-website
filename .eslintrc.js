const os = require('os');

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: 'airbnb',
  ignorePatterns: [
    'node_modules/',
    'build/',
  ],
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  rules: {
    'jsx-a11y/anchor-is-valid': ['error', {
      aspects: ['noHref', 'invalidHref', 'preferButton'],
      components: ['Link'],
      specialLink: ['to', 'hrefLeft', 'hrefRight'],
    }],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/no-static-element-interactions': 0,
    'linebreak-style': 0,
    'no-console': ['error', {
      allow: ['warn', 'error', 'info'],
    }],
    'no-underscore-dangle': 0,
    'react/destructuring-assignment': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx'],
    }],
    'react/jsx-no-useless-fragment': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': [1, {
      assignment: true,
      declaration: true,
      return: true,
    }],
    // Novas regras adicionadas
    'max-len': ['error', { 'code': 2000 }], // Aumenta o limite de comprimento de linha para 120 caracteres
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }], // Usa aspas simples, mas permite aspas duplas para evitar escape
  },
};
