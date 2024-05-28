/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      screens: {
        'sm': {'max': '767.98px'},
        // => @media (max-width: 767.98px) { ... }
        
        'md': {'min': '768px', 'max': '991.98px'},
        // => @media (min-width: 768px) and (max-width: 991.98px) { ... }
      
        'lg': {'min': '992px', 'max': '1199.98px'},
        // => @media (min-width: 992px) and (max-width: 1199.98px) { ... }
      
        'xl': {'min': '1200px'},
        // => @media (min-width: 1200px) { ... }
      },
      colors: {
      darkBlue: '#012485',
      blue: '#143AA5',
      white: '#ffffff',
      black: '#0f0f10',
    },
    backgroundImage:{
      "banner-bg":"url('/public/blue-green-background-with-blue-background-white-wave_483537-4181.avif')",
      "dasbord-bg":"url('/public/5594016-e1656071131636.jpg')"
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  },
  plugins: [],
}