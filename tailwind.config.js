module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "rapeseed": "url('/rape-field-in-spring-time-1633494.webp')",
        "skyline": "url('/philly_skyline_bg.webp')",
        "boathouse-row": "url('/boathouse_row_bg.webp')",
        "saturn-top": "url('/saturn-rings-top.jpg')",
        "saturn-bottom": "url('/saturn-rings-bottom.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
