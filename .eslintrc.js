module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@web-bee-ru/base', // js/ts only
    'plugin:@web-bee-ru/react', // react
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
  },
};
