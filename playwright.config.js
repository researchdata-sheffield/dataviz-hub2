// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    baseURL: 'http://localhost:9000',
    headless: false,
    ignoreHTTPSErrors: true,
  },
  timeout: 60000,
  testMatch: [
    "**/?(*.)+(e2e).[jt]s?(x)"
  ],
  projects: [
    {
      name: 'Desktop Chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'Desktop Safari',
      use: {
        browserName: 'webkit',
        viewport: { width: 1280, height: 720 },
      }
    },
    {
      name: 'Desktop Firefox',
      use: {
        browserName: 'firefox',
        viewport: { width: 1280, height: 720 },
      }
    },
    {
      name: 'Mobile Chrome',
      use: devices['Pixel 5'],
    },
    {
      name: 'Mobile Firefox',
      use: devices['Pixel 5'],
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 12'],
    },
  ],
};

module.exports = config;