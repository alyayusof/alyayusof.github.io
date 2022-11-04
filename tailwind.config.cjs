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
        darkest: "#100D16",
        darker: '#413457',
        dark: '#725C98',
        DEFAULT: '#A383D9',
        light: '#BFA8E4',
        lighter: '#DACDF0',
        lightest: '#F6F3FB',
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
