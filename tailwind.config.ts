/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      transparent: 'transparent',
      'grey-33': '#333947',
      'grey-21': '#212529',
      'grey-2a': '#2a2f38'
    },
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        montserrat: ['var(--font-montserrat)']
      },
      backgroundImage: {
        background_booking: "url('/assets/image/background_booking.png')"
      },
      dropShadow: {
        character: '5px 10px 10px rgba(0,0,0,.2)'
      }
    }
  },
  plugins: []
};
