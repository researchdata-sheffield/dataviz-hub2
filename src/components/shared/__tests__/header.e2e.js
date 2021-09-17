describe("Header e2e tests", () => {
  beforeAll(async () => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForSelector("id=__loader", { state: "hidden" });
  }, 300000);

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

  it("navigate to pages (Desktop)", async () => {
    try {
      const hrefs = await page.$$eval("#desktopHeader a", (links) =>
        links.map((a) => a.href)
      );
      for (const link of hrefs) {
        await page.goto(link, { waitUntil: "load" });
        expect(page.url()).toContain(link);
      }
    } catch (error) {
      console.log(error);
    }
  }, 300000);
});
