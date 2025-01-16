/** @type {import('tailwindcss').Config} */
import { createThemes } from "tw-colors";

export default {
  darkMode: "class", // Bruk "class" for å aktivere dark mode med klassen 'dark'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Sørger for å inkludere alle relevante filer
  ],
  theme: {
    extend: {
      colors: {
        // Eksempler på custom farger
        primary: "#1d4ed8", // Blå for lys modus
        secondary: "#64748b", // Grå for lys modus
        "dark-primary": "#2563eb", // Blå for mørk modus
        "dark-secondary": "#94a3b8", // Grå for mørk modus
      },
      spacing: {
        128: "32rem", // Eksempel på ny spacing
        144: "36rem",
      },
      borderRadius: {
        xl: "1.5rem", // Ny grense for hjørneradius
      },
    },
  },
  plugins: [
    createThemes(
      {
        light: {
          background: "#ffffff", // Lys bakgrunn
          text: "#1f2937", // Mørk tekst
          primary: "#1d4ed8", // Lys primærfarge
        },
        dark: {
          background: "#1e293b", // Mørk bakgrunn
          text: "#f1f5f9", // Lys tekst
          primary: "#2563eb", // Mørk primærfarge
        },
      },
      { defaultTheme: "light" } // Sett standard tema
    ),
  ],
};
