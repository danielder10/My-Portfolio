/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradientLeft: "#755c48",
        gradientRight: "#AF906E",
        coffee: "#dbc1ac",
      },
    },
  },
  plugins: [],
};