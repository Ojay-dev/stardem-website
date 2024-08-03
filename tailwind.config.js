/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
    colors: {
      "transparent": "transparent",
      "current": "currentColor",
      "white": "#ffffff",
      "black": "#000000",
      "primary-black": "#0B2253",
      "red": "#C43926",
      "yellow": "#F3BD09",
      "light-gray": "#535B6E",
      "dark-fill": "#161E31",
      "background": "#01050F",
    },
  },
  plugins: [],
};
