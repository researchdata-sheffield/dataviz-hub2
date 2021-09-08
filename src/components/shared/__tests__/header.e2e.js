describe("Header e2e tests", () => {
  beforeAll(async () => {
    await page.goto("/");
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  it("render correctly", async () => {
    await expect(page).toHaveSelector("id=navbar");
  });

  it("disappear on scroll down", async () => {
    await page.click('a[href="/#explore"]');
    await page.waitForSelector("id=navbar", { state: "hidden" });

    expect(await page.isHidden("id=navbar")).toBeTruthy();
  }, 5000);

  it.jestPlaywrightSkip(
    { browsers: ["firefox"] },
    "[Chromium, Webkit] appears on scroll up",
    async () => {
      await Promise.all([
        page.waitForNavigation(),
        await page.focus('a[href="/#explore"]')
      ]);
      //await page.click('a[href="/#explore"]');
      await page.waitForSelector("id=navbar", { state: "visible" });

      expect(await page.isVisible("id=navbar")).toBeTruthy();
    },
    5000
  );

  it.jestPlaywrightSkip(
    { browsers: ["chromium", "webkit"] },
    "[Firefox] appears on scroll up",
    async () => {
      await page.click('a[href="/#explore"]', { clickCount: 0, delay: 300 });
      await page.waitForSelector("id=navbar", { state: "visible" });

      expect(await page.isVisible("id=navbar")).toBeTruthy();
    },
    5000
  );
});
