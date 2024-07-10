import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "Light-pink": "hsl(275, 100%, 97%)",
        "Grayish-purple":"hsl(292, 16%, 49%)",
        "Dark-purple": "hsl(292, 42%, 14%)"
      },
    },
  },
  plugins: [],
};
export default config;
