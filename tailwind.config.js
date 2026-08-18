/** @type {import('tailwindcss').Config} */
import { createThemes } from "tw-colors";
import { lightTheme } from "./src/lib/theme/modes/light";
import { darkTheme } from "./src/lib/theme/modes/dark";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
      },
      maxWidth: {
        page: "72rem",
      },
      fontFamily: {
        sans: ['"Instrument Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [
    createThemes(
      {
        light: lightTheme,
        dark: darkTheme,
      },
      { defaultTheme: "light" }
    ),
  ],
};
