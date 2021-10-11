describe("e2e | Blog page", () => {
  beforeAll(async () => {
    await jestPlaywright.resetPage();
    await jestPlaywright.resetContext();

    await page.goto("/blog/05/02/2021/Shiny-Template", {
      waitUntil: "domcontentloaded"
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
      expect(await elementHandle.screenshot()).toMatchImageSnapshot(
        "blogPost.png",
        { failureThreshold: 0.01 }
      );
    }
  );

  it.jestPlaywrightSkip(
    { browsers: ["chromium", "firefox"] },
    "match the content (Webkit)",
    async () => {
      const elementHandle = await page.$(
        '[aria-label="Blog post main content"]'
      );
      expect(await elementHandle.screenshot()).toMatchImageSnapshot(
        "blogPostWebkit.png",
        { failureThreshold: 0.01, allowSizeMismatch: true }
      );
    }
  );

  it("go to correct anchors", async () => {
    await page.click('.TOC a[href="#highcharter-and-data-table"]');
    await page.waitForFunction(() => window.scrollY != 0);

    expect(await page.url()).toContain("#highcharter-and-data-table");
  });

  it("navigate to the other post through related posts, and prev & next buttons", async () => {
    const firstPost = await page.$('[aria-label="You Might Also Like"] a');
    const postLink = await firstPost.getAttribute("href");

    await Promise.all([
      page.waitForNavigation({ waitUntil: "load" }),
      firstPost.click()
    ]);
    expect(await page.url()).toContain(postLink);

    await page.waitForSelector('[aria-label="Next post"]');
    const nextPost = await page.$('[aria-label="Next post"]');
    await Promise.all([
      page.waitForNavigation({ waitUntil: "load" }),
      nextPost.click()
    ]);
    expect(await page.url()).toContain(await nextPost.getAttribute("href"));

    const prevPost = await page.$('[aria-label="Previous post"]');
    await Promise.all([
      page.waitForNavigation({ waitUntil: "load" }),
      prevPost.click()
    ]);

    expect(await page.url()).toContain(await prevPost.getAttribute("href"));
  });
});
