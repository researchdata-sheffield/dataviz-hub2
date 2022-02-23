describe("e2e | Blog page", () => {
  beforeAll(async () => {
    page.setDefaultNavigationTimeout(30000);
    await page.goto("blog/18/02/2021/Useful-Resources-for-R", {
      waitUntil: "load"
    });
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  afterAll(async () => {
    await page.close();
  });

  it("navigate to other post through related posts", async () => {
    const firstPost = await page.$('[aria-label="You Might Also Like"] a');
    const postLink = await firstPost.getAttribute("href");

    await Promise.all([page.waitForNavigation(), firstPost.click()]);
    expect(page.url()).toContain(postLink);
  });

  it.jestPlaywrightSkip(
    { browsers: ["webkit"] },
    "navigate to other posts through the next button",
    async () => {
      await page.goto("blog/18/02/2021/Useful-Resources-for-R", {
        waitUntil: "load"
      });
      await page.waitForSelector("id=__loader", { state: "hidden" });

      const nextPost = await page.$('[aria-label="Next post"]');

      await Promise.all([page.waitForNavigation(), nextPost.click()]);
      expect(page.url()).not.toContain(
        "/blog/18/02/2021/Useful-Resources-for-R"
      );
    }
  );
  it.jestPlaywrightSkip(
    { browsers: ["webkit"] },
    "navigate to other posts through the prev button",
    async () => {
      await page.goto("blog/18/02/2021/Useful-Resources-for-R", {
        waitUntil: "load"
      });
      await page.waitForSelector("id=__loader", { state: "hidden" });

      const prevPost = await page.$('[aria-label="Previous post"]');

      await Promise.all([page.waitForNavigation(), prevPost.click()]);
      expect(page.url()).not.toContain(
        "/blog/18/02/2021/Useful-Resources-for-R"
      );
    }
  );
});
