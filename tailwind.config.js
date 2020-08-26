module.exports = {
  // purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  purge: [],
  theme: {
    screens: {
      sm: '600px',
      // => @media (min-width: 640px) { ... }

      md: '960px',
      // => @media (min-width: 768px) { ... }

      lg: '1280px'
      // => @media (min-width: 1024px) { ... }
    },
    extend: {}
  },
  variants: {},
  plugins: ['tailwindcss', 'postcss-preset-env'],
  future: {
    removeDeprecatedGapUtilities: true
  }
}
