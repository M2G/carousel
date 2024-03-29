const path = require('path');

module.exports = {
  "root": true,
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "./node_modules/eslint-config-airbnb-base/rules/best-practices.js",
    "./node_modules/eslint-config-airbnb-base/rules/errors.js",
    "./node_modules/eslint-config-airbnb-base/rules/node.js",
    "./node_modules/eslint-config-airbnb-base/rules/style.js",
    "./node_modules/eslint-config-airbnb-base/rules/variables.js",
    "./node_modules/eslint-config-airbnb-base/rules/es6.js",
    "prettier",
    "eslint:all",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/all",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'plugin:perfectionist/recommended-natural'
  ],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.scss'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "prettier", "import", "unused-imports"],
  rules: {
    "no-return-assign": 0,
    "no-restricted-syntax": 0,
    "no-cond-assign": 0,
    "no-unused-expressions": 0,
    "no-magic-numbers": 0,
    "no-invalid-this": 0,
    "no-ternary": 0,
    "no-console": 1,
    "no-undefined": 0,
    "id-length": 0,
    "max-params": 0,
    "multiline-ternary": 0,
    "init-declarations": 0,
    "func-style": 0,
    "camelcase": 1,
    "max-statements": 0,
    "max-lines": 0,
    "max-lines-per-function": 0,
    "sort-imports": 0,
    "implicit-arrow-linebreak": 0,
    "import/no-cycle": 1,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "lines-between-class-members": 0,
    "multiline-comment-style": 0,
    "@typescript-eslint/ban-types": 1,
    "@typescript-eslint/object-curly-spacing": 0,
    "@typescript-eslint/no-unsafe-return": 1,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/no-for-in-array": 1,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/strict-boolean-expressions": 0,
    "@typescript-eslint/no-magic-numbers": 0,
    "@typescript-eslint/no-unnecessary-condition": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/quotes": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/unbound-method": 1,
    "@typescript-eslint/no-unsafe-assignment": 1,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-unsafe-member-access": 1,
    "@typescript-eslint/no-unsafe-call": 1
  },
  settings: {
    "html/html-extensions": [".html"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"]
    },
    'import/resolver': {
      node: {
        paths: ["src"],
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  env: {
    browser: true,
    jest: true,
    jasmine: true,
    node: true
  }
};
