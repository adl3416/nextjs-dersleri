import type { Config } from "tailwindcss";

const config: Config = {

  darkMode: 'class', //'media' veya 'class' olarak ayarlanabilir

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        padding: '2rem'
      },

      fontSize:{
          '7xl': '13.052rem',
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myprimary: "#507687",
        mysecond: "#F95454",
        mypink: "#D91656",
      },
    },
  },
  plugins: [],
};
export default config;
