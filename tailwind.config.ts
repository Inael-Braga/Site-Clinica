import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img-hero': "url('../assets/bg-hero.jpg')",
        'bgImageVideo': "url('../assets/dentista-video.jpg')",
        'bgImageTestemonial': "url('../assets/andrea.jpg')",
        'bgContatoMap': "url('../assets/map-blurred.jpg')",
      },
      colors: {
        'primary': '#145DE8',
        'secondary': '#00BCDF',
        'dark': '#05071C',
        'grey': '#2B2B2D',
        'grey-p': '#6E7276',
        'light': '#F8F9FB',
      }
    },
  },
  plugins: [],
};
export default config;
