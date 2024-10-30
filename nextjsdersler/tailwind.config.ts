import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {

  darkMode: 'class', //'media' veya 'class' olarak ayarlanabilir
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|checkbox|ripple|spinner).js"
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
        myblue: "#090979",
        myprimary: "#507687",
        mysecond: "#F95454",
        mypink: "#D91656",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
