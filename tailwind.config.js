/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "outline-primary": "0 0 6px 0 rgba(7, 7, 7, 0.12)",
      },
    },
    colors: {
      white: "#FFFFFF",
      transparent: "transparent",
      primary: {
        main: "#5079b8",
        100: "#f7fafd",
        200: "#D3DEED",
        300: "#92abd3",
        400: "#395A8D",
        500: "#263C5E",
        nav: "rgba(47, 98, 176, 0.1)",
      },
      secondary: {
        main: "#F9BE57",
        100: "#FEEFD5",
        200: "#FBD696",
        300: "#F39E09",
        400: "#7A4F04",
      },
      text: {
        100: "#FFFFFF",
        200: "#F9F9F9",
        300: "#EDEDED",
        400: "#CBCBCB",
        500: "#757575",
        600: "#4D4D4D",
        700: "#303030",
        800: "#070707",
        error: "#dc3545",
      },
      success: {
        primary: "#3ab35a",
        secondary: "#c5e5ce",
      },
      error: {
        primary: "#dc3545",
        secondary: "#f1cdc4",
      },
      warning: {
        primary: "#ee9500",
        secondary: "#ead7b8",
      },
      info: {
        primary: "#0269de",
        secondary: "#bdd5f2",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("svg", "& svg");
    },
  ],
};
