/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{jsx,js}"
],
  theme: {
    extend: {
      fontFamily:{
        anton:["Anton, sans-serif"],
        nunito:["Nunito Sans, sans-serif"]
      },
      colors:{
        transparent:"transparent",
        "brand-blue":"#11324D",
        "brand-red":"#FF686B",
        "brand-yellow": "#FFD966",
        "dark-grey":"#797A7E",
        "light-grey": "#D8D3CD",
        "background": "#EFE8E1",
        "neutral-black": "#000000",
        "neutral-white": "#FFFFFF" 

      }
    },
  },
  plugins: [],
}

