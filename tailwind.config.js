/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('https://i.ibb.co/m6xNVJQ/background.png')",
      },
    },
  },
  plugins: [],
}