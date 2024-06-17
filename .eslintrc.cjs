/* eslint-env node */
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'quotes': ['error', 'single'],
    'class-methods-use-this': 'error',
    'curly': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-useless-return': 'error',
    'semi': 'error',
    'vue/prop-name-casing': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
  }
};