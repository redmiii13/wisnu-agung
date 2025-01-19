/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Ubuntu Mono", "monospace"],
    },
    extend: {
      colors: {
        primary: "#04fd9d",
        secondary: "#14b8a6",
        third: "#FEF6C7",
        fourth: "#011eff",
      },
    },
  },
  plugins: [],
};
