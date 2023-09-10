/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      "cards-light": "#ffffff",
      "light-header": "#302d2d",
      "light-body": "#F5F4F0",
      "light-footer": "#2b2b43",
      "light-text": "#1d1e38",
      "hover-light": "#990062",
      "border-light": "#c2c1c5",
      "dark-body": "#040404",
      "dark-header": "#f5f4f0",
      "hover-dark": "#0227c3",
      "border-dark": "#f5f4f0",
      "dark-footer": "#2b2b43",
      "dark-text": "#ffffff",
    },
    fontFamily: {
      sans: ["Inconsolata", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
