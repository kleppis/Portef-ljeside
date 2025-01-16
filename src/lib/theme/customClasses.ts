import plugin from "tailwindcss/plugin";

const customClasses = plugin(({ addUtilities }) => {
  addUtilities(
    {
      ".display": {
        "@apply text-4xl font-bold font-oswald": {},
      },
      "h1, .h1": {
        "@apply text-3xl font-bold font-oswald": {},
      },
      "h2, .h2": {
        "@apply text-2xl font-semibold font-oswald text-gray-700": {},
      },
    },
    { variants: ["responsive"], layer: "utilities" } // Legger til i "utilities"-laget
  );
});

export default customClasses;
