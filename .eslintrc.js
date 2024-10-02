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
    // Disable all the rules by setting them to 'off'
    'prettier/prettier': 'off',
    'sort-imports': 'off',
    'tailwindcss/no-custom-classname': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',

    // Disable the no-unused-vars rule
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',

    // 'simple-import-sort/imports': 'off', // Just to ensure no sorting rule is applied
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.js',
    },
  },
};
