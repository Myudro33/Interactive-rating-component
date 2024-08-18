/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "white": "hsl(0, 0%, 100%)",
      "light-gray":"hsl(217, 12%, 63%)",
      "dark-blue":" hsl(213, 19%, 18%)",
      "very-dark-blue":"hsl(216, 12%, 8%)"
    }
  },
  plugins: [],
}