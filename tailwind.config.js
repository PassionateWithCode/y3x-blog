const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{vue,ts}'],
  },
  // theme: {
  //   extend: {
  //     // here's how to extend fonts if needed
  //     fontFamily: {
  //       sans: [...defaultTheme.fontFamily.sans],
  //     },
  //   },
  // },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
        })
      })
    }),
  ],
}
