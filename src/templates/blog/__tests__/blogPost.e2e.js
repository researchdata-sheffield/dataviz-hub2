describe("e2e | Blog page", () => {
  beforeAll(async () => {
    page.setDefaultNavigationTimeout(60000);
    await page.goto("/blog/05/02/2021/Shiny-Template", {
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
      expect(await elementHandle.screenshot()).toMatchImageSnapshot(
        "blogPost.png"
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
        "blogPostWebkit.png"
      );
    }
  );

  it("go to correct anchors", async () => {
    await page.click('.TOC a[href="#highcharter-and-data-table"]');
    await page.waitForFunction(() => window.scrollY != 0);

    expect(page.url()).toContain("#highcharter-and-data-table");
  });

  it("navigate to the other post through related posts, and prev & next buttons", async () => {
    const firstPost = await page.$('[aria-label="You Might Also Like"] a');
    const postLink = await firstPost.getAttribute("href");

    await Promise.all([page.waitForNavigation(), firstPost.click()]);
    expect(page.url()).toContain(postLink);

    const nextPost = await page.$('[aria-label="Next post"]');
    await Promise.all([page.waitForNavigation(), nextPost.click()]);
    expect(page.url()).toContain(await nextPost.getAttribute("href"));

    const prevPost = await page.$('[aria-label="Previous post"]');
    await Promise.all([page.waitForNavigation(), prevPost.click()]);

    expect(await page.url()).toContain(await prevPost.getAttribute("href"));
  });
});
