/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'starrynight':'url(./images/starbackground.png)'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

