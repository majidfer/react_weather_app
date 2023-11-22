/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "420px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      // Add more breakpoints or modify these
    },
    extend: {},
  },
  plugins: [],
};
