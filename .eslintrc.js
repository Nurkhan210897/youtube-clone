module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "@vue/airbnb",
    "@vue/typescript/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2020
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
    "linebreak-style": "warn",
    "arrow-body-style": "off",
    "vuejs-accessibility/label-has-for": "off",
    "import/order": "off"
  }
}
