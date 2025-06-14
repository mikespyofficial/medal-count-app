import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        rules: {
            semi: 'error',
            quotes: ['error', 'single'],
            'comma-dangle': ['error', {
                'arrays': 'never',
                'objects': 'always',
                'imports': 'never',
                'exports': 'never',
                'functions': 'never',
            }],
        },
    }
];

export default eslintConfig;
