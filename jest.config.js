module.exports = {
  preset: "jest-playwright-preset",
  cacheDirectory: ".jest-cache",

  // transform js/jsx files using jest-preprocess.js file
  transform: {
    "^.+\\.jsx?$": `<rootDir>/tests/jest-preprocess.js`
  },

  // handling mocking static file imports
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "^gatsby-page-utils/(.*)$": `gatsby-page-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    "^gatsby-core-utils/(.*)$": `gatsby-core-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    "^gatsby-plugin-utils/(.*)$": [
      `gatsby-plugin-utils/dist/$1`,
      `gatsby-plugin-utils/$1`
    ] // Workaround for https://github.com/facebook/jest/issues/9771
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test|e2e).[jt]s?(x)"
  ],

  // ignore these files when testing
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],

  // IMPORTANT: because Gatsby includes un-transpiled ES6 code
  // And it will try to transform files within Gatsby-name folders under node_modules
  // gatsby-browser-entry.js isn’t being transpiled before running in Jest
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
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
