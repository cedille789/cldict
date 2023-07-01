import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";
import { sky } from "tailwindcss/colors";
import { fontFamily, testFamily } from "./tailwindfont.config";

testFamily();

export default {
  content: [
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    "./src/**/*.{html,js,svelte,ts}",
  ],

  darkMode: "class",

  plugins: [flowbite],

  theme: {
    colors: {
      primary: {
        ...sky,
        600: sky[500],
        700: sky[500],
        800: sky[600],
        900: sky[600],
        950: sky[600],
      },
    },
    fontFamily,
    extend: {},
  },
} satisfies Config;
