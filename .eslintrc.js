module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["airbnb-typescript"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "indent": ["error", 2],
    "key-spacing": "off",
    "jsx-quotes": ["error", "prefer-single"],
    "max-len": ["error", 140, 2, { "ignoreTrailingComments": true, "ignoreUrls": true }],
    "object-curly-spacing": ["error", "always"],
    "semi": ["error", "always"],
    "semi-spacing": ["error", {"before": false, "after": true}],
    "no-extra-semi": "error",
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    "no-unexpected-multiline": "error",
    "no-empty": "error",
    "react/prop-types": "off",
    "jsx-a11y/label-has-for": false,
    "react/destructuring-assignment": [2, "always", { "ignoreClassFields": true }]
  },
  "parser": "@typescript-eslint/parser"
};
