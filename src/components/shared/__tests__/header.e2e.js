describe("Header e2e tests", () => {
  beforeAll(async () => {
    await page.goto("/");
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  it("render correctly", async () => {
    await expect(page).toHaveSelector("id=navbar");
  });

  it("disappear on scroll down", async () => {
    //await page.click('a[href="/#explore"]');
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForSelector("id=navbar", { state: "hidden" });
    await page.waitForTimeout(100);
    expect(await page.isHidden("id=navbar")).toBeTruthy();
  }, 5000);

  it.jestPlaywrightSkip(
    { browsers: [] },
    "appears on scroll up",
    async () => {
      await page.evaluate(() => window.scrollTo(0, 100));
      await page.waitForSelector("id=navbar", { state: "visible" });

      expect(await page.isVisible("id=navbar")).toBeTruthy();
    },
    5000
  );

  it("navigate to pages", async () => {
    const hrefs = await page.$$eval("#navbar a", (links) =>
      links.map((a) => a.href)
    );
    console.log(hrefs);

    for (const link of hrefs) {
      await page.goto(link);
      expect(page.url()).toContain(link);
    }
  });
});
