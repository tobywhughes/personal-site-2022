// https://coolors.co/22223b-4a4e69-9a8c98-c9ada7-f2e9e4
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: "#22223B",
      },
      secondary: {
        DEFAULT: "#4A4E69",
      },
      background: {
        DEFAULT: "#F2E9E4",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {
      accent: {
        DEFAULT: "#9A8C98",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
