module.exports = {
    root: true,
    extends: ['next/core-web-vitals', 'prettier'],
    rules: {
        'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
    overrides: [
        {
            files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx'],
            env: {
                jest: true,
            },
        },
    ],
};
