/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      textShadow: {
        card: ["1px 1px 0 #000",
          "-1px 1px 0 #000",
          "-1px -1px 0 #000",
          "1px -1px 0 #000"],
          modalHeader: [
            "1px 1px 0 #000",
          "1px 1px 0 #000",
          "1px 1px 0 #000",
          "1px 1px 0 #000"
          ]
      },
      fontFamily: {
        anton: ["Anton, sans-serif"],
        nunito: ["Nunito Sans, sans-serif"],
      },
      colors: {
        transparent: "transparent",
        "brand-blue": "#11324D",
        "brand-red": "#FF686B",
        "brand-yellow": "#FFD966",
        "dark-grey": "#797A7E",
        "light-grey": "#D8D3CD",
        background: "#EFE8E1",
        "neutral-black": "#000000",
        "neutral-white": "#FFFFFF",
      },
      backgroundImage: {
        "sign-up-desk":"url('./assets/bg-vector-size.jpeg')",
        "sign-up-mobile":"url('./assets/sign-up-mobile.jpeg')",
        "sign-up-image": "url('./assets/sign-up-image.jpg')"
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
