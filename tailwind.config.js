const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray
      }
    },
    fontFamily: {
      'sans': ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
    }
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [],
}
