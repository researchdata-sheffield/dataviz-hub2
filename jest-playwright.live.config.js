// https://playwright.dev/docs/api/class-browsertype OPTIONS
module.exports = {
  launchOptions: {
    headless: true,
    devtools: false,
    timeout: 60000
  },
  contextOptions: {
    baseURL: "https://dataviz.shef.ac.uk/",
    viewport: {
      // default: 1280 x 720
      width: 1280,
      height: 720
    }
  },
  exitOnPageError: false, // process won't exit on http errors anymore
  browsers: [
    "chromium",
    "firefox"
    //"webkit"
  ]
};
