module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      /* this is example code to how we can create the custom styles of our needs with the tailwind css itself*/
      // screens: {
      //   '3xl': '2000px'
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
