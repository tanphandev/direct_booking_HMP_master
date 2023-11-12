/** @type {import('tailwindcss').Config} */
const colors = require('./src/themes/color.ts');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
    },
    fontFamily: {
      roboto: ['var(--font-roboto)'],
      montserrat: ['var(--font-montserrat)'],
    },
    extend: {
      backgroundImage: {
        background_booking: "url('/assets/image/background_booking.png')",
      },
      dropShadow: {
        character: '5px 10px 10px rgba(0,0,0,.2)',
      },
      boxShadow: {
        custom_1: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};
