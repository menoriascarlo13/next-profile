module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  arrowParens: 'always',
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.html'],
      options: {
        singleQuote: false
      }
    },
    {
      files: ['**/*.css', '**/*.scss'],
      options: {
        printWidth: 120
      }
    }
  ]
};
