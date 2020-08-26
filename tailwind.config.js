module.exports = {
  // purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  purge: [],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: ['tailwindcss', 'postcss-preset-env'],
  future: {
    removeDeprecatedGapUtilities: true
  }
}
