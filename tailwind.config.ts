import type { Config } from 'tailwindcss'
const {fontFamily} = require('tailwindcss/defaultTheme')

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);",
        circularDark: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 100px);",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240circular,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
