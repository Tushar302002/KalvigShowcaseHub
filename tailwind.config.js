/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '393px', 
        'xsplus': '450px', 
        'mdplus': '850px', 
      },
    },
  },
  plugins: [],
}