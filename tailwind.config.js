const { light } = require('@mui/material/styles/createPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: '#b82370',
        light_primaryRed: '#fc9dce',
        dark :  '#131318'
      }
    },
  },
  plugins: [],
}
