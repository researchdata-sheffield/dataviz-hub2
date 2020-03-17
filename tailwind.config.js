// See https://tailwindcss.com/docs/configuration for details 
module.exports = {
  important: '#website',  //Make tailwind have highest specificity over other styling plugin (e.g. styled components)
  theme: {
    extend: {
      textColor: {
        'highlight': '#337ab7',
        'highlight_2': '#00aeef',
        'highlight_2t': '#73d8ff',
        'logo_blue': '#009fe3',
      },
      backgroundColor: {
        'footer': '#414042',
        'highlight_2': '#00aeef',
      },
      borderColor: {
        'highlight_2': '#00aeef',

      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
      },
      screens: {
        'laptop': '1300px'
      },
      minHeight: {
        '80': '80vh',
        '90': '90vh',
        '95': '95vh',
        '100': '100vh',
      },
      maxHeight: {
        '12': '12vh',
        '80': '80vh',
        '90': '90vh',
        '95': '95vh',
        '100': '100vh',
      },
      transitionProperty: {
        'hover': 'hover',
        'group-hover': 'group-hover',
      }

    },
 
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderColor: ['responsive', 'hover', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'group-hover'],
    fontWeight: ['group-hover'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    zIndex: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionDuration: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionProperty: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionTimingFunction: ['responsive', 'hover', 'focus', 'group-hover'],

  },
  plugins: [require("@tailwindcss/custom-forms")],
}
