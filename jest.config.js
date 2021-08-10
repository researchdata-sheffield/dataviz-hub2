module.exports = {
  cacheDirectory: ".jest-cache",
  // transform js/jsx files using jest-preprocess.js file
  transform: {
    "^.+\\.jsx?$": `<rootDir>/tests/jest-preprocess.js`,
  },
  // handling mocking static file imports
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`
  },
  // ignore these files when testing
  testPathIgnorePatterns: [
    "node_modules", 
    "\\.cache", 
    "<rootDir>.*/public",
    "<rootDir>.*/cypress"
  ],
  // IMPORTANT: because Gatsby includes un-transpiled ES6 code
  // And it will try to transform files within Gatsby-name folders under node_modules
  // gatsby-browser-entry.js isn’t being transpiled before running in Jest
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
  },
  testURL: "http://localhost",
  // files will be included before all tests are run
  setupFiles: [
    "<rootDir>/tests/loadershim.js"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/tests/setupAfterEnv.js"
  ]
}