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
        '1': '1px',
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '15': '15px',
        '7vh': '7vh',

      },
      screens: {
        'ipadp': '1030px',
        '2xl': '1441px',
      },
      minHeight: {
        '30': '30vh',
        '40': '40vh',
        '50': '50vh',
        '60': '60vh',
        '70': '70vh',
        '80': '80vh',
        '90': '90vh',
        '95': '95vh',
        '100': '100vh',
      },
      maxHeight: {
        '15': '15vh',
        '18': '18vh',
        '20': '20vh',
        '25': '25vh',
        '30': '30vh',
        '50': '50vh',
        '60': '60vh',
        '70': '70vh',
        '80': '80vh',
        '90': '90vh',
        '95': '95vh',
        '100': '100vh',
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      minWidth: {
        '0': '0',
        '30': '30vw',
        '40': '40vw',
        '50': '50vw',
        '60': '60vw',
        '80': '80vw',
        '90': '90vw',
        '95': '95vw',
        '100': '100vw',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '5/12': '41.6666666%',
        'full': '100%',
      },
      maxWidth: {
        '0': '0',
        '10': '10vw',
        '15': '15vw',
        '25': '25vw',
        '30': '30vw',
        '40': '40vw',
        '50': '50vw',
      },
      padding: {
        '26': '6.5rem',
        '28': '7rem',
        '36': '9rem',
        '10vh': '10vh',
        '15vh': '15vh',
        '18vh': '18vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '100vh': '100vh',
      },
      margin: {
        '26': '6.5rem',
        '28': '7rem',

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
    fontSize: ['responsive', 'hover', 'focus','group-hover'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    zIndex: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionDuration: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionProperty: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionTimingFunction: ['responsive', 'hover', 'focus', 'group-hover'],

  },
  plugins: [require("@tailwindcss/custom-forms")],
}
