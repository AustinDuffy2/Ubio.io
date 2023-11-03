module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        blue_gray: { 400: "#8a8a8a", "400_01": "#8d8d8d" },
        gray: { 100: "#f4f4f4", 200: "#eaeaea", 800: "#4f4f4f" },
        blue: { 400: "#4599e7" },
        light_blue: { 400: "#1abcfe", "400_26": "#1abcfe26" },
        white: { A700: "#ffffff", A700_9e: "#ffffff9e" },
        teal: { A400: "#1fd790" },
      },
      fontFamily: { roboto: "Roboto", adamina: "Adamina" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
