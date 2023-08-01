module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'other-configuration-that-enables-formatting-rules',
      'prettier',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        "@typescript-eslint/ban-types": "warn",
        'semi': ['error', 'always'],
    },
    root: true
  };