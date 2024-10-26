module.exports = {
    parser: '@typescript-eslint/parser', 
    parserOptions: {
        ecmaVersion: 2020, 
        sourceType: 'module', 
    },
    extends: [
        'eslint:recommended', 
        'plugin:@typescript-eslint/recommended', 
    ],
    rules: {
        semi: 'warn',
        'prefer-const': 'error',
        'no-console': 'warn',
    },
};
