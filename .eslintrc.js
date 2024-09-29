module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['simple-import-sort', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'sort-imports': 'off', // Disables the built-in ESLint import sorting rule
    'tailwindcss/no-custom-classname': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // Remove or comment out simple-import-sort rule if you don't want ESLint to control import sorting
    // 'simple-import-sort/imports': [
    //   2,
    //   {
    //     groups: [
    //       ['^.+\\.s?css$'],
    //       [
    //         `^(${require('module').builtinModules.join('|')})(/|$)`,
    //         '^react',
    //         '^@?\\w',
    //       ],
    //       ['^components(/.*|$)'],
    //       ['^lib(/.*|$)', '^hooks(/.*|$)'],
    //       ['^\\.'],
    //     ],
    //   },
    // ],
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.js',
    },
  },
};
