module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: ['tailwindcss', 'postcss-preset-env'],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
