module.exports = {
  cacheDirectory: ".jest-cache",

  // transform js/jsx files using jest-preprocess.js file
  transform: {
    "^.+\\.jsx?$": `<rootDir>/tests/jest-preprocess.js`
  },
  
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test|e2e).[jt]s?(x)"
  ],

  // ignore these files when testing
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],

  // IMPORTANT: https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/
  // because Gatsby includes un-transpiled ES6 code
  // And it will try to transform files within Gatsby-name folders under node_modules
  // gatsby-browser-entry.js isn’t being transpiled before running in Jest
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`],
  globals: {
    __PATH_PREFIX__: ""
  },
  testEnvironmentOptions: {
    url: "http://localhost:9000"
  },
  // files will be included before all tests are run
  setupFiles: ["<rootDir>/tests/loadershim.js"],
  setupFilesAfterEnv: ["<rootDir>/tests/setupAfterEnv.js", "expect-playwright"],
  testTimeout: 60000,
  collectCoverage: true,
  coverageReporters: ["text", "html"]
};
