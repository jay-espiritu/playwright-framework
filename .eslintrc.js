module.exports = {
	parserOptions: {
		ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module' // Allows for the use of imports
	},
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:playwright/playwright-test']
};
