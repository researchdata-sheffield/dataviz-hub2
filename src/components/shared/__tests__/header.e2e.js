describe("Header e2e tests", () => {
  beforeAll(async () => {
    await page.goto("/");
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  afterAll(async () => {
    await page.close();
  });

  it("render correctly", async () => {
    await expect(page).toHaveSelector("id=navbar");
  });

  it("disappear on scroll down", async () => {
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForSelector("id=navbar", { state: "hidden" });
    await page.waitForTimeout(100);
    expect(await page.isHidden("id=navbar")).toBeTruthy();
  });

  it.jestPlaywrightSkip({ browsers: [] }, "appears on scroll up", async () => {
    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForSelector("id=navbar", { state: "visible" });

    expect(await page.isVisible("id=navbar")).toBeTruthy();
  });

  it("navigate to pages (Desktop)", async () => {
    const hrefs = await page.$$eval("#desktopHeader a", (links) =>
      links.map((a) => a.href)
    );
    for (const link of hrefs) {
      await page.goto(link, { waitUntil: "domcontentloaded" });
      expect(page.url()).toContain(link);
    }
  }, 300000);
});