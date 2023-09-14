/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E5D1B0",
        secondary: "#4A2F00",
      }
    },
  },
  plugins: [],
}