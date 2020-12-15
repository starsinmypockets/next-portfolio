module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "rapeseed": "url('/rape-field-in-spring-time-1633494.jpg')",
        "boathouse-row": "url('/boathouse_row_bg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
