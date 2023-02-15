module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: [
    'stylelint-declaration-strict-value',
    'stylelint-high-performance-animation',
    'stylelint-no-unsupported-browser-features',
    'stylelint-use-nesting',
  ],
  rules: {
    'rule-empty-line-before': null,
    'value-keyword-case': null,
    'font-family-name-quotes': null,
    'import-notation': null,
    'color-function-notation': null,
    'alpha-value-notation': null,
    'selector-class-pattern': null,
    'function-url-quotes': null,
    'declaration-empty-line-before': null,
    'value-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'custom-property-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'comment-empty-line-before': null,
    'block-no-empty': true,
    'color-hex-length': 'long',
    'color-no-invalid-hex': true,
    'csstools/use-nesting': true,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        browsers: require('../package.json').browserslist,
        ignorePartialSupport: true,
        ignore: [
          'pointer',
          'user-select-none',
          'css-touch-action',
          'word-break',
        ],
      },
    ],
    'plugin/no-low-performance-animation-properties': [
      true,
      {
        ignoreProperties: ['visibility'],
      },
    ],
    'scale-unlimited/declaration-strict-value': [
      ['/color/', 'font-size'],
      {
        ignoreValues: ['inherit', 'transparent', 'currentColor'],
        disableFix: true,
      },
    ],
    'selector-disallowed-list': [
      /(?::?:after|:?:before|:?:first-letter|:?:first-line)[^,]+/,
      // /::slotted\(.+\) .*/,
      // /::slotted\(.+\):(?!:?after|:?before|:?first-letter|:?first-line)/,
      // /::slotted\(.*(?::?:after|:?:before|:?:first-letter|:?:first-line|::slotted|:host).*\)/,
      // /::slotted\([^,]+ [^,]+\)/,
      // /::slotted\([^,]*[>+~][^,]+\)/,
      // /:host\([^,]+ [^,]+\)/,
      // /:host\([^,]*[>+~][^,]+\)/,
      /([^, \n][ \n]*):host/,
    ],
    'selector-no-qualifying-type': null,
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['/^ld-/', '/^docs-/'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['/^define-mixin/', '/^mixin/'],
      },
    ],
  },
  ignoreFiles: ['**/*.md', '**/*.tsx'],
}
