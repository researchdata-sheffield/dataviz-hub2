// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  mode: "jit",
  important: "#website", //Make tailwind have highest specificity over other styling plugin (e.g. styled components)
  purge: {
    content: [
      "./src/**/*.{jsx, js}",
      "./content/**/*.jsx",
      "./content/**/*.mdx",
      "./content/**/*.js"
    ]
  },
  theme: {
    extend: {
      screens: {
        "2lg": "1200px",
        xl: "1280px",
        "2xl": "1441px"
      },
      backgroundColor: {
        footer: "#414042",
        highlight: "#1cbfff",
        "brand-blue": "#00aeef",
        "brand-pink": "#ff79b4",
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
        "brand-blue": "#00aeef",
        "brand-pink": "#ff79b4",
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
      fontFamily: {
        stephenson: ["TUOS Stephenson", "Georgia", "Times", "serif"]
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
        "-3": "-0.75rem",
        "-9": "-2.25rem",
        "-12": "-3rem",
        "-14": "-3.5rem",
        "-18": "-4.5rem",
        "-36": "-9rem",
        "-60": "-15rem",
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
        86: "21.5rem",
        full: "100%",
        full2: "200%",
        full3: "300%",
        full4: "400%"
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
        "brand-blue": "#00aeef",
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
  },
  variants: {
    textColor: [
      "responsive",
      "focus",
      "group-focus",
      "group-hover",
      "hover",
      "first",
      "last",
      "odd",
      "even"
    ],
    backgroundColor: [
      "responsive",
      "focus",
      "active",
      "group-focus",
      "group-hover",
      "hover",
      "first",
      "last",
      "odd",
      "even"
    ],
    borderColor: [
      "responsive",
      "group-hover",
      "hover",
      "focus",
      "group-focus",
      "first",
      "last",
      "odd",
      "even"
    ],
    borderWidth: [
      "responsive",
      "group-hover",
      "hover",
      "focus",
      "group-focus",
      "first",
      "last",
      "odd",
      "even"
    ],
    fontWeight: ["group-hover", "first", "last", "odd", "even"],
    fontSize: [
      "responsive",
      "hover",
      "focus",
      "group-hover",
      "first",
      "last",
      "odd",
      "even"
    ],
    display: ["responsive", "group-hover", "hover", "focus", "group-focus"],
    opacity: ["responsive", "group-hover", "focus", "group-focus", "hover"],
    zIndex: ["responsive", "hover", "focus", "group-focus", "group-hover"],
    scale: [
      "responsive",
      "focus",
      "active",
      "group-focus",
      "hover",
      "group-hover",
      "first",
      "last",
      "odd",
      "even"
    ],
    transitionDuration: ["responsive", "focus", "group-hover", "hover"],
    transitionProperty: ["responsive", "focus", "group-hover", "hover"],
    transitionTimingFunction: ["responsive", "hover", "focus", "group-hover"],
    minHeight: [
      "responsive",
      "hover",
      "focus",
      "group-focus",
      "group-hover",
      "first",
      "last",
      "odd",
      "even"
    ],
    maxHeight: [
      "responsive",
      "hover",
      "focus",
      "group-focus",
      "group-hover",
      "first",
      "last",
      "odd",
      "even"
    ],
    greyScale: ["responsive", "hover", "focus", "group-focus", "group-hover"],
    translate: [
      "responsive",
      "hover",
      "focus",
      "group-focus",
      "active",
      "group-hover",
      "first",
      "last",
      "odd",
      "even"
    ],
    visibility: ["responsive", "group-hover", "hover", "focus", "group-focus"]
  }
};
