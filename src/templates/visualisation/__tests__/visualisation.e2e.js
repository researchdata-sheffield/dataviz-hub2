describe("e2e | Visualisation page", () => {
  beforeAll(async () => {
    await page.goto("/visualisation");
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  afterAll(async () => {
    await page.close();
  });

  it("opens up tag menu", async () => {
    await page.click("text=Browse all tags");
    await page.waitForSelector("#vis-tag-menu", { state: "visible" });
    expect(
      await page.$eval("#vis-tag-menu", (el) => getComputedStyle(el).visibility)
    ).toBe("visible");

    await page.click("#vis-tag-menu button");
    await page.waitForSelector("#vis-tag-menu", { state: "hidden" });
    expect(
      await page.$eval("#vis-tag-menu", (el) => getComputedStyle(el).visibility)
    ).toBe("hidden");

    await page.evaluate(() => window.scrollTo(0, 600));
    expect(
      await page.$eval("#vis-tag-button", (el) => getComputedStyle(el).opacity)
    ).not.toBe(0);

    await page.click("#vis-tag-button");
    await page.waitForSelector("#vis-tag-menu", { state: "visible" });
    expect(
      await page.$eval("#vis-tag-menu", (el) => getComputedStyle(el).visibility)
    ).toBe("visible");
  }, 30000);
});
