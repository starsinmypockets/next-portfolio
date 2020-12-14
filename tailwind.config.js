module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "skyline": "url('/philly_skyline_bg.jpg')",
        "boathouse-row": "url('/boathouse_row_bg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
