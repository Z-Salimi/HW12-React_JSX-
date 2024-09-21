/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'app_header': '#717171',
        'Brand/Primary' : '#4CAF4F',
        'D_Grey' : '#4D4D4D',
        'silver' : '#F5F7FA',
        'semi_black' : '#18191F',
        'app-gray' : '#89939E',
        'app-black' : '#263238',
      },
      backgroundImage: {
        "app-send": "url('src/assets/footer/send.svg')",
      },
      backgroundPosition: {
        "right-10" : '150px center',
      }
    },
  },
  plugins: [],
}