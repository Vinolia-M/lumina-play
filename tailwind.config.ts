import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dustyBlue: '#009d7fe0',
        lightGrey: '#5252528f',
        red: '#FF0000',
      },
      backgroundcolors: {
        dustyBlue: '#009d7fe0',
        transparentBlack: '#00000082',
        lightGrey: '#5252528f',
      },
    },
  },
  plugins: [],
};
export default config;
