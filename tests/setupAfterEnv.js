import "@testing-library/jest-dom/extend-expect";
const { configureToMatchImageSnapshot } = require("jest-image-snapshot");

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  noColors: false,
  failureThreshold: 0.03,
  failureThresholdType: "percent",
  dumpDiffToConsole: true
});

expect.extend({ toMatchImageSnapshot });
