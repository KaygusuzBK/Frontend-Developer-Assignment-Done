/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        randomBackground: {
          100: "#f7f7f7",
          200: "#eaeaea",
          300: "#dcdcdc",
          400: "#cfcfcf",
          500: "#c2c2c2",
          600: "#b4b4b4",
          700: "#a7a7a7",
          800: "#9a9a9a",
          900: "#8c8c8c",
        },
      },
    },
  },
  plugins: [],
};
