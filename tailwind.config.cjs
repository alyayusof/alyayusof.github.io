/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: {
        darkest: "#180D0D",
        darker: '#603333',
        dark: '#A85A5A',
        DEFAULT: '#F08080',
        light: '#F39999',
        lighter: '#F9CCCC',
        lightest: '#FEF2F2',
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "h1": "3.75rem",
      "h2": "2rem",
      "h3": "1.75rem",
    },
    extend: {},
  },
  plugins: [],
}
