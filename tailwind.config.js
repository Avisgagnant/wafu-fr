/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wafu: {
          ink: '#141414',
          paper: '#FBF7EF',
          sand: '#F2EBDB',
          pink: '#DA2B79',
          stone: '#8A8278',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        editorial: '-0.018em',
        stamp: '0.24em',
      },
    },
  },
  plugins: [],
}
