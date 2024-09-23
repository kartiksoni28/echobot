const { default: plugin } = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#20AB6E",
        lime: "#D7FFD4",
        pink: "#F655FF",
        brown: "#29271D",
        sky: "#E5EDFF",
        teal: "#0E4D45",
        yellow: "#FCBB80",
        orange: "#EF580B",
        blue: "#0000FA",
        green: "#172E15",
        light: "#FFFCFF",
        grey: "#242026",
        lightGrey: "#B8B3BA",
        input: "#EEE9F0",
        selected: "#F7F2F9",
        dark: "#2F2D32",
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
