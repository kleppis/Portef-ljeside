/** @type {import('tailwindcss').Config} */
import { createThemes } from "tw-colors";
import { lightTheme } from "./src/lib/theme/modes/light";
import { darkTheme } from "./src/lib/theme/modes/dark";

export default {
  darkMode: "class", // Bruk "class" for å aktivere dark mode med klassen 'dark'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Sørger for å inkludere alle relevante filer
  ],
  theme: {
    extend: {
      keyframes: {
        "bounce-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
        "bounce-x-left": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10px)" },
        },
        "open-box": {
          "0%": { maxWidth: "0" },
          "100%": { maxWidth: "100%" },
        },
      },
      animation: {
        "bounce-x": "bounce-x 1s infinite",
        "bounce-x-left": "bounce-x-left 1s infinite",
        "open-box": "open-box 2s ease-in-out forwards",
      },
      spacing: {
        128: "32rem", // Eksempel på ny spacing
        144: "36rem",
      },
      borderRadius: {
        xl: "1.5rem", // Ny grense for hjørneradius
      },
      fontFamily: {
        "walter-turncoat": ['"Walter Turncoat"', "serif"],
      },
    },
  },
  plugins: [
    createThemes(
      {
        light: lightTheme,
        dark: darkTheme,
      },
      { defaultTheme: "light" } // Sett standard tema
    ),
  ],
};
