/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Baloo Da', 'cursive'], 
      },
      colors: {
        "bg-dark": "#10141A",
        "saga": "#327794",
        "dark-yellow": "#D1B003",
        "dark-purple": "#565392", 
        "dark-orange": "#DF6710", 
        "card-bg": "#1D2229"
      },
    },
  },
  plugins: [],
}
