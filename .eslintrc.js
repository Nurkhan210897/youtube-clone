module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
      "plugin:vue/vue3-recommended",
      "prettier",
      "plugin:vue/base"
  ],
  "parser": 'vue-eslint-parser',
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "rules": {
    "@typescript-eslint/no-inferrable-types": "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/camelcase": "off",
    "max-len": "off",
    "quotes": [
      "warn",
      "double"
    ],
    "vuejs-accessibility/anchor-has-content": "off",
    "vuejs-accessibility/alt-text": "off",
    "vuejs-accessibility/form-control-has-label": "off",
    "comma-dangle": "off",
    "semi": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "Unnecessary semicolon": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "eol-last": "off",
    "linebreak-style": "off",
    "arrow-body-style": "off",
    "vuejs-accessibility/label-has-for": "off",
    "import/order": "off",
    "vue/attribute-hyphenation": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "vue/attributes-order": "off",
    "vue/no-template-shadow": "off",
    "vue/return-in-computed-property": "off",
    "vue/no-dupe-keys": "off",
  }
}