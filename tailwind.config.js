// https://coolors.co/22223b-4a4e69-9a8c98-c9ada7-f2e9e4
const colors = require("tailwindcss/colors");
const customColors = require("./styles/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: customColors.primary.default,
      },
      secondary: {
        DEFAULT: customColors.secondary.default,
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
      colors: {
        background: {
          DEFAULT: customColors.background.default,
        },
        accent: {
          DEFAULT: customColors.accent.default,
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
