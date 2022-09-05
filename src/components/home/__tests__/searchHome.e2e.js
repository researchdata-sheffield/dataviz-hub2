const { test, expect } = require("@playwright/test");

/** @type {import('@playwright/test').Page} */
let page;

test.describe("Search bar on the home page", () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("/");
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  test.afterAll(async () => {
    await page.close();
  });

  test("display result list on input & no result list on clear input", async () => {
    await page.fill("#homeSearch", "python");
    const resultList = await page.$$("#searchResult > div");
    expect(resultList.length).toBe(1);

    await page.fill("#homeSearch", "");
    const clearResultList = await page.$$("#searchResult > div");
    expect(clearResultList.length).toBe(0);
  }, 300000);
});
