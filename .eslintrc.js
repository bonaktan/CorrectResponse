module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'google',
        'plugin:react/recommended',
    ],
    'overrides': [
        {
            'env': {
                'node': true,
            },
            'files': [
                '.eslintrc.{js,cjs}',
            ],
            'parserOptions': {
                'sourceType': 'script',
            },
        },
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        '@kalimahapps/eslint-plugin-tailwind',
    ],
    'rules': {
        '@kalimahapps/tailwind/sort': 'warn',
        '@kalimahapps/tailwind/multiline': 'warn',
        'indent': ['error', 4],
    },
};
