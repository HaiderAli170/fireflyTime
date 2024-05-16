/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      darkBlue: '#012485',
      blue: '#143AA5',
      white: '#ffffff',
      black: '#0f0f10',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },},
  },
  plugins: [],
}