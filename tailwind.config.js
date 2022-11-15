/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    // screens: {
    //   'ml' : 
    // },
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
  daisyui: {
    styled: true,
    themes: false,
  }
}