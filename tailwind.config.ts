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
        custom_2: '0 0 16px rgba(0,0,0,.08)',
        custom_3: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
        custom_4:
          '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)',
      },
      animation: {
        fadeIn: 'fadeIn 0.15s ease-in-out',
        slipLeftToRight: 'slipLeftToRight 0.5s ease-in-out',
        slipRightToLeft: 'slipRightToLeft 0.5s ease-in-out',
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slipLeftToRight: {
          '0%': {
            transform: 'translateX(-120%)',
          },
          '100%': { transform: 'translateX(0)' },
        },
        slipRightToLeft: {
          '0%': {
            transform: 'translateX(120%)',
          },
          '100%': { transform: 'translateX(0)' },
        },
      }),
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};
