/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#0B0D17",
      grayBlue: "#D0D6F9",
      white: "#ffffff",
    },
    fontSize: {
      xs: ["14px", { lineHeight: "17px", letterSpacing: "0.148em" }],
      sm: ["16px", { lineHeight: "19px", letterSpacing: "0.169em" }],
      lg: ["18px", { lineHeight: "32px" }],
      xl: ["28px", { lineHeight: "32px" }],
      hXl: ["28px", { lineHeight: "34px", letterSpacing: "0.172em" }],
      "2xl": ["32px", { lineHeight: "37px" }],
      "3xl": ["56px", { lineHeight: "64px" }],
      "4xl": ["100px", { lineHeight: "115px" }],
      "5xl": ["150px", { lineHeight: "172px" }],
    },
    fontFamily: {
      barlow: ["Barlow, sans-serif"],
      barlowCon: ["Barlow Condensed, sans-serif"],
      bellefair: ["Bellefair, serif"],
    },
    extend: {
      screens: {
        "3xl": "1900px",
      },
    },
  },
  plugins: [],
};
