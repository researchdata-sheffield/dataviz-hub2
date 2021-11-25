import "@testing-library/jest-dom/extend-expect";
const { configureToMatchImageSnapshot } = require("jest-image-snapshot");

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  noColors: true,
  failureThreshold: 0.05,
  failureThresholdType: "percent",
  dumpDiffToConsole: true,
  dumpInlineDiffToConsole: false,
  allowSizeMismatch: true,
  comparisonMethod: "ssim",
  customSnapshotIdentifier: (stringObj) => {
    let appendix = process.env.LIVE_ENV ? "LIVE" : "";
    let customIdentifier = [
      appendix,
      stringObj.defaultIdentifier,
      stringObj.counter
    ]
      .join("_")
      .replace(" ", "");
    return customIdentifier;
  }
});

expect.extend({ toMatchImageSnapshot });
