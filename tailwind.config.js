// See https://tailwindcss.com/docs/configuration for details 
module.exports = {
  theme: {
    extend: {
      textColor: {
        'highlight': '#337ab7',
        'highlight_2': '#00aeef',
      },
      backgroundColor: {
        'footer': '#414042',
      }
    },
 
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
}
