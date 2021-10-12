describe("e2e | Blog page", () => {
  beforeAll(async () => {
    page.setDefaultNavigationTimeout(60000);
    await page.goto("/blog/18/02/2021/Useful-Resources-for-R", {
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
      expect(await elementHandle.screenshot()).toMatchImageSnapshot();
    }
  );

  it.jestPlaywrightSkip(
    { browsers: ["chromium", "firefox"] },
    "match the content (Webkit)",
    async () => {
      const elementHandle = await page.$(
        '[aria-label="Blog post main content"]'
      );
      expect(await elementHandle.screenshot()).toMatchImageSnapshot();
    }
  );

  it("go to correct anchors", async () => {
    await page.click('.TOC a[href="#tutorials"]');
    await page.waitForFunction(() => window.scrollY != 0);

    expect(page.url()).toContain("#tutorials");
  });
});
