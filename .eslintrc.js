module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "prettier/prettier": [
      "warn",
      {
        "singleQuote": true,
        "tabWidth": 4,
        "semi": true,
        "tabSize": 4,
        "indent": ["error", 4],
        "trailingComma": "none"
      }
    ]
  }
}
