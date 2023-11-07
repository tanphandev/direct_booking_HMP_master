/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      grey: '#333947',
      'grey-2a': '#2a2f38',
      white: '#ffffff',
      transparent: 'transparent'
    },
    extend: {
      backgroundImage: {
        background_booking: "url('/assets/image/background_booking.png')"
      }
    }
  },
  plugins: []
};
