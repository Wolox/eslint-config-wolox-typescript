"use strict";

module.exports = {
  extends: ['plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }],
    'spaced-comment': ['error', 'always', { 'markers': ['/'] }],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'function',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error'
  },
};
