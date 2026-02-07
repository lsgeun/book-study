// .prettierrc.cjs
module.exports = {
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'all',
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  vueIndentScriptAndStyle: true,
  endOfLine: 'lf',
  singleAttributePerLine: false,

  overrides: [
    {
      files: '*.json',
      options: {
        trailingComma: 'none', // JSON만 trailing comma 제외
      },
    },
    {
      files: '*.html',
      options: {
        singleQuote: false,
      },
    },
  ],
};
