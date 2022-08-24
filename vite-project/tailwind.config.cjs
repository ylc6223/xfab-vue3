/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-gray": "#fbfbfb"
      },
      boxShadow: {
        "bottom": "0 0 18px rgba(0,0,0,0.2)"
      },
      height: {
        "120": "30rem"
      }
    }
  },
  plugins: []
};
