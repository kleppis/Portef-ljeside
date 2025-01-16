import plugin from "tailwindcss/plugin"
export const customClasses = plugin(({ addUtilities }) => {
  addUtilities({
    ".display": {
      "@apply ~text-displayMin/display font-oswald": {},
    },
    "h1, .h1": {
      "@apply ~text-h1Min/h1 font-oswald": {},
    },
    "h2, .h2": {
      "@apply ~text-h2Min/h2 font-oswald text-primaryTxt": {},
    },
    "h3, .h3": {
      "@apply ~text-h3Min/h3 font-oswald": {},
    },
    "p, .p": {
      "@apply ~text-bodyMin/body font-ibm text-primaryTxt": {},
    },
    ".large": {
      "@apply ~text-largeMin/large font-ibm": {},
    },
    ".body": {
      "@apply ~text-bodyMin/body font-ibm": {},
    },
    ".small": {
      "@apply text-small font-ibm": {},
    },
    ".caption": {
      "@apply text-caption font-ibm": {},
    },
    ".label": {
      "@apply text-label font-ibm-mono": {},
    },
    ".skeleton": {
      "@apply animate-skeleton bg-gradient-to-r from-backgroundHover from-40% to-60% via-layer1 to-backgroundHover bg-[length:350%] bg-[0_50%]":
        {},
    },
    ".ignore-scrollbar": {
      "margin-right": "calc(100% - 100vw)",
    },
  })
})
