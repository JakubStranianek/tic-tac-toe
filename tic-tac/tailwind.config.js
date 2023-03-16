/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "myBlue": "#31C3BD",
        "myLightBlue": "#65E9E4",
        "myOrange": "#F2B137",
        "myLightOrange": "#FFC860",
        "myBlack": "#1A2A33",
        "myGrey": "#1F3641",
        "myLightGrey": "#A8BFC9",
        "myLightWhite": "#DBE8ED"
      },
      fontFamily : {
        outfit : ['Outfit'],
      },
      boxShadow: {
        "customShadow": '0px 10px 0px 0px',
        "customSmallShadow": '0px 3px 0px 0px'
      }    
    },
  },
  plugins: [],
}