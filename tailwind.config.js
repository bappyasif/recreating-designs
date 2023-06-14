/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs:"0px",
      xs: '479px',
      sm: '624px',
      md: '768px',
      lg: '1062px',
      xl: '1390px',
      xxl: '1590px'
    },
    extend: {
      fontFamily :{
        monoton: ["monoton-regular","sans-serif"],
        righteous: ["righteous-regular","sans"],
      }
    },
  },
  plugins: [],
}

