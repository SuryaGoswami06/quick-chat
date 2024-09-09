/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:'#1877f2;'
      },
      screens:{
        'phone':'788px'
      }
    },
  },
  plugins: [],
}

