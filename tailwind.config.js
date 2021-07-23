const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      black00: "#000",
      black10: "#242C37",
      white: "#FFF",
      gray: "#EEF0F2",
      darkGray: "#778597",
      lightGray: "#7785970",
      textGray: "#778697",
      linkGray: "#313843",
      play: '#CBD3DC', // gray
      blue: "#00448F",
      lightBlue: "#4BB2F4",
    },
    extend: {
      textColor: ['active'],
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}