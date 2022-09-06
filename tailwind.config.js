/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/components/**/*.{js,jsx,ts,tsx}', './src/pages/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
    },
      backgroundColor: {
        brown: '#A14807'
      }
    },
  },
  plugins: [],
}
