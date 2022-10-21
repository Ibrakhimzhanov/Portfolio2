/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "#08182E",
          primary: "#53D3B9",
          secondary: "#C0E9FF",
        },
      },
      fontFamily: {
        drimmer: ["Drimmer-Bold", "sans-serif"],
        drimmerE: ["Drimmer-ExtraBold", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-100%, 0)" },
        },
      },
      animation: {
        scroll: "scroll 5s infinite linear",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
