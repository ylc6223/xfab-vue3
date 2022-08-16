/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tabbar-color': '#fbfbfb',
      },
      boxShadow: {
        'bottom': '0 0 18px rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [],
}
