const colors = require("tailwindcss/colors");

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  important: "#website", //Make tailwind have highest specificity over other styling plugin (e.g. styled components)
  content: [
    "./src/components/**/*.{jsx,js}", //no spaces between commas
    "./src/pages/**/*.{jsx,js}",
    "./src/templates/**/*.{jsx,js}",
    "./content/**/*.{jsx,mdx,md}"
  ],

  theme: {
    extend: {
      screens: {
        "2lg": "1200px",
        xl: "1280px",
        "2xl": "1441px"
      },
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet
      },
      backgroundColor: {
        footer: "#414042",
        highlight: "#1cbfff",
        "brand-blue": "#9ADBE8",
        "brand-pink": "#ff79b4",
        "brand-black": "#131E29",
        "brand-purple": "#440099",
        light_grey: "#f1f1f1",
        light_black: "rgba(0,0,0, .6)",
        "black-10": "rgba(0, 0, 0, .1)",
        "black-35": "rgba(0, 0, 0, .35)",
        "black-45": "rgba(0, 0, 0, .45)",
        "black-55": "rgba(0, 0, 0, .55)",
        "black-65": "rgba(0, 0, 0, .65)",
        "black-75": "rgba(0, 0, 0, .75)",
        "black-85": "rgba(0, 0, 0, .85)",
        "black-custom": "#0C0717",
        shefBlue: "#0066b3",
        shefPurple: "#251d5a",
        shefYellow: "#fedf00",
        shefGreen: "#009640",
        sheflightBlue: "#ade1f8"
      },
      borderColor: {
        "brand-blue": "#9ADBE8",
        "brand-pink": "#ff79b4",
        "brand-black": "#131E29",
        "brand-purple": "#440099",
        menu_red: "#ff5e5e",
        menu_yellow: "#f3f218",
        menu_green: "#99f318",
        black: "#000",
        shefBlue: "#0066b3",
        shefPurple: "#251d5a",
        shefYellow: "#fedf00",
        shefGreen: "#009640",
        sheflightBlue: "#ade1f8"
      },
      borderRadius: {
        xl: "0.675rem",
        "2xl": "0.85rem",
        "3xl": "1.025rem",
        "4xl": "1.2rem",
        "5xl": "1.375rem",
        "6xl": "1.5rem"
      },
      borderWidth: {
        1: "1px",
        3: "3px",
        5: "5px",
        6: "6px",
        7: "7px",
        15: "15px"
      },
      boxShadow: {
        c1: "0px 12px 15px 0px #C8C4C1",
        c2: "0px 12.3px 15.37px 0px #3A3631"
      },
      fontSize: {
        xxs: ".65rem",
        med: ".94rem"
      },
      height: {
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px"
      },
      margin: {
        3: "0.75rem",
        9: "2.25rem",
        12: "3rem",
        7: "1.75rem",
        14: "3.5rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        28: "7rem",
        36: "9rem",
        38: "9.5rem",
        40: "10rem",
        44: "11rem",
        52: "13rem",
        60: "15rem",
        68: "17rem",
        70: "17.5rem",
        72: "18rem",
        74: "18.5rem",
        78: "19.5rem"
      },
      maxHeight: {
        50: "50vh",
        60: "60vh",
        70: "70vh",
        90: "90vh",
        95: "95vh",
        100: "100vh",
        0: "0",
        "1/4": "25%",
        "2/5": "40%",
        "1/2": "50%",
        "3/5": "60%",
        "3/4": "75%",
        full: "100%"
      },
      maxWidth: {
        xs: "576px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "8xl": "88rem",
        0: "0",
        25: "25vw",
        30: "30vw",
        35: "35vw",
        40: "40vw",
        50: "50vw",
        60: "60vw",
        70: "70vw"
      },
      minHeight: {
        15: "15vh",
        40: "40vh",
        50: "50vh",
        60: "60vh",
        70: "70vh",
        90: "90vh",
        95: "95vh",
        100: "100vh",
        110: "110vh",
        "1/4": "25%",
        "2/5": "40%",
        "1/2": "50%",
        "3/5": "60%",
        "3/4": "75%",
        full: "100%"
      },
      minWidth: {
        0: "0",
        20: "20vw",
        80: "80vw",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "5/12": "41.6666666%",
        full: "100%"
      },
      padding: {
        14: "3.5rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        28: "7rem",
        36: "9rem",
        38: "9.5rem",
        40: "10rem",
        44: "11rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        68: "17rem",
        70: "17.5rem",
        72: "18rem",
        74: "18.5rem",
        78: "19.5rem",
        82: "20.5rem",
        86: "21.5rem"
      },
      scale: {
        170: "1.7",
        180: "1.8",
        200: "2"
      },
      spacing: {
        "110%": "110%"
      },
      textColor: {
        highlight: "#337ab7",
        "brand-blue": "#9ADBE8",
        "brand-black": "#131E29",
        "brand-purple": "#440099",
        shefBlue: "#0066b3",
        shefPurple: "#251d5a",
        shefYellow: "#fedf00",
        shefGreen: "#009640",
        sheflightBlue: "#ade1f8",
        "brand-pink": "#ff79b4"
      },
      transitionDuration: {
        0: "0ms",
        1500: "1500ms",
        2000: "2000ms"
      },
      transitionProperty: {
        hover: "hover, group-hover",
        opacity: "opacity",
        display: "display"
      },
      width: {
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%"
      },
      zIndex: {
        "-10": "-10"
      }
    }
  }
};
