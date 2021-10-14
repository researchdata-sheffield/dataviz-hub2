describe("Header e2e tests", () => {
  beforeAll(async () => {
    await page.goto("/");
    await page.waitForSelector("id=__loader", { state: "hidden" });
  }, 400000);

  afterAll(async () => {
    await page.close();
  });

  it("render correctly", async () => {
    await expect(page).toHaveSelector("id=navbar");
  });

  it("disappear on scroll down", async () => {
    try {
      await page.evaluate(() => window.scrollTo(0, 400));

      await page.waitForSelector("id=navbar", { state: "hidden" });
      await page.waitForTimeout(100);
      expect(await page.isHidden("id=navbar")).toBeTruthy();
    } catch (error) {
      console.log(error);
    }
  }, 40000);

  it("appears on scroll up", async () => {
    try {
      await page.evaluate(() => window.scrollTo(0, 100));
      await page.waitForSelector("id=navbar", { state: "visible" });

      expect(await page.isVisible("id=navbar")).toBeTruthy();
    } catch (error) {
      console.log(error);
    }
  }, 40000);
});
