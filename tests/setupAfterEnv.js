import "@testing-library/jest-dom/extend-expect";
const { configureToMatchImageSnapshot } = require("jest-image-snapshot");

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  noColors: true,
  failureThreshold: 0.05,
  failureThresholdType: "percent",
  dumpDiffToConsole: false,
  dumpInlineDiffToConsole: false,
  allowSizeMismatch: true,
  comparisonMethod: "ssim",
  customDiffConfig: {
    ssim: "fast"
  },
  customSnapshotIdentifier: (stringObj) => {
    let appendix = "DEV";

    if (process.env.LIVE_ENV) {
      appendix = "LIVE";
    }
    if (process.env.QA_ENV) {
      appendix = "QA";
    }

    return [appendix, stringObj.defaultIdentifier, stringObj.counter]
      .join("_")
      .replace(" ", "");
  }
});

expect.extend({ toMatchImageSnapshot });
