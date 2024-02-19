module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.js'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return types on functions for better inference
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
    },
};
