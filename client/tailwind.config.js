/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c3bcae",
        secondary: "#5a2c21",
      },
      backgroundImage: {
        "profile-pattern": "url('/src/assets/cartoonreader.jpg')",
        "hero-pattern": "url('/src/assets/henry-be-TCsCykbwSJw-unsplash.jpg')",
      }
    },
  },
  plugins: [],
}