describe("e2e | Blog page", () => {
  beforeAll(async () => {
    page.setDefaultNavigationTimeout(60000);
    await page.goto("/blog/02/05/2020/dataviz-stats-1", {
      waitUntil: "load"
    });
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  afterAll(async () => {
    await page.close();
  });

  it.jestPlaywrightSkip(
    { browsers: ["webkit"] },
    "match the content",
    async () => {
      const elementHandle = await page.$(
        '[aria-label="Blog post main content"]'
      );
      expect(await elementHandle.screenshot()).toMatchImageSnapshot({
        failureThreshold: 0.1
      });
    }
  );

  it.jestPlaywrightSkip(
    { browsers: ["chromium", "firefox"] },
    "match the content (Webkit)",
    async () => {
      const elementHandle = await page.$(
        '[aria-label="Blog post main content"]'
      );
      expect(await elementHandle.screenshot()).toMatchImageSnapshot({
        failureThreshold: 0.2
      });
    }
  );

  it("go to correct anchors", async () => {
    await page.click('.TOC a[href="#mean"]');
    await page.waitForFunction(() => window.scrollY != 0);

    expect(page.url()).toContain("#mean");
  });
});
