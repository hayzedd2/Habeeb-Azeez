/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      lg: "976px",
      xl: "1200px",
    },
    extend: {
      screens : {
        bigmd : "1450px",
      },
      colors : {
        grey : "#CFD0D0"
      },
      fontFamily: {

        kumbh : ['Kumbh Sans', "sans-serif"],
      },
    },
  },
};
