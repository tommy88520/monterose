module.exports = {
  mode:"jit",
  purge: ['./public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: {
          100: '#D88B83',
          200: '#efd1ce',
        },

        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}