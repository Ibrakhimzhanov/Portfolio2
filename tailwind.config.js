/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        10: "20px",
      },
    },
  },
  plugins: [],
};
