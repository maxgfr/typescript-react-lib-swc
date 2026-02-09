const eslint = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const storybook = require('eslint-plugin-storybook');
const jest = require('eslint-plugin-jest');
const prettier = require('eslint-config-prettier');

module.exports = [
  // Base JavaScript rules
  eslint.configs.recommended,

  // TypeScript configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...jest.environments.globals.globals,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      jest,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...jest.configs.recommended.rules,
      // React 19+ doesn't need React in scope
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Storybook configuration
  {
    files: ['**/*.stories.@(js|jsx|ts|tsx|mdx)', '.storybook/**/*'],
    plugins: {
      storybook,
    },
    rules: {
      ...storybook.configs.recommended.rules,
      ...storybook.configs.recommended.overrides[0].rules,
    },
  },

  // Prettier (must be last)
  prettier,

  // Ignore patterns
  {
    ignores: [
      '**/node_modules/**',
      '**/build/**',
      '**/dist/**',
      '**/.storybook-static/**',
      '**/coverage/**',
    ],
  },
];
