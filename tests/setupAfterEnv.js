import "@testing-library/jest-dom/extend-expect";
const { configureToMatchImageSnapshot } = require("jest-image-snapshot");

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  noColors: true,
  failureThreshold: 0.03,
  failureThresholdType: "percent",
  dumpDiffToConsole: false,
  dumpInlineDiffToConsole: true,
  allowSizeMismatch: true,
  comparisonMethod: "ssim"
});

expect.extend({ toMatchImageSnapshot });
