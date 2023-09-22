module.exports = {
	extends: [
	  // add more generic rulesets here, such as:
	  // 'eslint:recommended',
	  'plugin:vue/vue3-recommended',
	  // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/multi-word-component-names': 'off',
		'prettier/prettier': 0,
	  },
  }