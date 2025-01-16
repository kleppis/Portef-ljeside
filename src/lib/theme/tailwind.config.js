const path = require("path")
import fluid, { extract, screens } from "fluid-tailwind"
import { animations } from "./animations"
import { borderRadius } from "./borderRadius"
import { customClasses } from "./customClasses"
import { fontFamily } from "./fontFamily"
import { fontSize } from "./fontSize"
import { fontWeight } from "./fontWeight"
import { darkTheme } from "./modes/dark"
import { lightTheme } from "./modes/light"
import { shadows } from "./shadows"
import { spacing } from "./spacing"

import { createThemes } from "tw-colors"

module.exports = {
  darkMode: "class",
  presets: [require("@medusajs/ui-preset")],
  content: {
    files: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/modules/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
    ],
    extract,
  },
  theme: {
    borderRadius,
    fontFamily,
    fontSize,
    boxShadow: shadows,
    screens,
    extend: {
      fontWeight,
      animations: animations.animation,
      keyframes: animations.keyframes,
      spacing,
      transitionProperty: {
        width: "width margin",
        height: "height",
        bg: "background-color",
        display: "display opacity",
        visibility: "visibility",
        padding: "padding-top padding-right padding-bottom padding-left",
      },

      maxWidth: {
        "8xl": "100rem",
      },
    },
  },
  plugins: [
    fluid,
    require("tailwindcss-radix")(),
    createThemes(
      {
        light: lightTheme,
        dark: darkTheme,
      },
      {
        defaultTheme: "light",
      }
    ),
    customClasses,
  ],
}
