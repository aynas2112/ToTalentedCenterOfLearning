/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2F89D0",
        secondary: "#2ECC71",
        // tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#F4F4F4",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      borderWidth: {
        'gradient': '2px',
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};