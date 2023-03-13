/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'MyVeryDarkGray' : "hsl(0, 0%, 17%)",
        'MyDarkGray' : "hsl(0, 0%, 59%)"
      }
    },
  },
  plugins: [],
}
