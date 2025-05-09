import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      blue: {
        50: "#EBF8FF",
        100: "#D6F1FF",
        200: "#A3E0FF",
        300: "#68CEFF",
        400: "#14B1FF",
        500: "#008DD2",
        600: "#007EBD",
        700: "#0070A8",
        800: "#005885",
        900: "#004466",
        950: "#00293D",
      },
      backgroundImage: {
        "custom-blue-gradient":
          "linear-gradient(to bottom, #0F172B 0%, #1D293D 50%, #0F172B 100%)",
      },
      fontFamily: {
        sans: ["Atkinson", ...defaultTheme.fontFamily.sans],
        square: ["Square", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "full",
          },
        },
      },
      rotate: {
        45: "45deg",
        135: "135deg",
        225: "225deg",
        315: "315deg",
      },
      animation: {
        twinkle: "twinkle 2s ease-in-out forwards",
        meteor: "meteor 3s ease-in-out forwards",
      },
      keyframes: {
        twinkle: {
          "0%": {
            opacity: 0,
            transform: "rotate(0deg)",
          },
          "50%": {
            opacity: 1,
            transform: "rotate(180deg)",
          },
          "100%": {
            opacity: 0,
            transform: "rotate(360deg)",
          },
        },
        meteor: {
          "0%": {
            opacity: 0,
            transform: "translateY(200%)",
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translateY(0)",
          },
        },
      },
    },
    container: {
      padding: "2rem",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
