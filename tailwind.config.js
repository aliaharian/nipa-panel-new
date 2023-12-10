/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
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
        250: "#e3ebf7",
        300: "#92abd3",
        400: "#395A8D",
        500: "#263C5E",
        600: "#eef3fa",
        nav: "rgba(47, 98, 176, 0.1)",
        o50: "rgba(47, 98, 176, 0.4)",
        dark:"#234a84"
      },
      secondary: {
        main: "#F9BE57",
        100: "#FEEFD5",
        200: "#FBD696",
        300: "#F39E09",
        400: "#7A4F04",
        500: "#fcbb48",
      },
      black: {
        10: "rgba(0,0,0,0.1)",
        20: "rgba(0,0,0,0.2)",
        30: "rgba(0,0,0,0.3)",
        40: "rgba(0,0,0,0.4)",
        50: "rgba(0,0,0,0.5)",
        60: "rgba(0,0,0,0.6)",
        70: "rgba(0,0,0,0.7)",
        80: "rgba(0,0,0,0.8)",
        90: "rgba(0,0,0,0.9)",
        100: "rgba(0,0,0)",
      },
      text: {
        100: "#FFFFFF",
        200: "#F9F9F9",
        250: "#f7f7f7",
        300: "#EDEDED",
        400: "#CBCBCB",
        450: "#888888",
        500: "#757575",
        600: "#4D4D4D",
        700: "#303030",
        800: "#070707",
        900:"#1f1f1f",
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
        secondary: "rgba(254, 239, 213, 0.50)",
        border:"#FBD696",
        text:"#B57E0E"
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
