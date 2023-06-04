/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        monoton: ["monoton-regular","sans-serif"],
        righteous: ["righteous-regular","sans"],
        novaSlim: ["novaSlim-regular","sans-serif"],
        macondo: ["macondo-regular","sans"],
      }
    },
  },
  plugins: [],
}

