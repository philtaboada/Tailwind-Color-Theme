/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      colors:{
        current:"var(--text-color)"
      },
      textColor: {
        skin: {
          base: "var(--text-color)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
          indicator: "var(--fill-color-indicator)",

        }
      },
      gradientColorStops: {
        skin: {
          hue: "var(--fill-color)"
        }
      }
    },
  },
  plugins: [],
}