module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'no-var': 'error',
    'no-console': 'warn',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'no-unused-vars': 'error',
    'max-len': ['error', { code: 180 }],
    'default-case': 'error',
    'no-param-reassign': 'error',
    'no-use-before-define': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-uses-react': 'off',
    'react-hooks/exhaustive-deps': [1],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
  },
};
