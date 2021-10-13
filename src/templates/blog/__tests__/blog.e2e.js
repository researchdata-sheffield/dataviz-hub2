describe("e2e | Blog page", () => {
  beforeAll(async () => {
    await page.goto("/blog", { waitUntil: "domcontentloaded" });
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  afterAll(async () => {
    await page.close();
  });

  it.jestPlaywrightSkip(
    { browsers: ["webkit", "firefox"] },
    "opens up slide tag menu and search",
    async () => {
      // click MORE button
      const toggleBtnLabel = '[aria-label="Click to toggle the tag menu"]';
      await page.click(toggleBtnLabel);
      expect(
        await page.$eval("#slideTagMenu", (el) => el.style.transform)
      ).toBe("translateX(0%)");
      await page.click(toggleBtnLabel);
      expect(
        await page.$eval("#slideTagMenu", (el) => el.style.transform)
      ).not.toBe("translateX(0%)");

      // slide tag menu
      await page.click('[aria-label="Open the side tag menu"]');
      expect(
        await page.$eval("#slideTagMenu", (el) => el.style.transform)
      ).toBe("translateX(0%)");

      await page.fill("#tagSearchSlide", "python");
      expect(
        (await page.$$('[aria-label="Slide tag menu results"] a')).length
      ).toBeLessThanOrEqual(2);

      await page.click('[aria-label="Close the slide tag menu"]');
      expect(
        await page.$eval("#slideTagMenu", (el) => el.style.transform)
      ).not.toBe("translateX(0%)");
    },
    60000
  );

  it.jestPlaywrightSkip(
    { browsers: ["chromium", "firefox"] },
    "opens up slide tag menu and search",
    async () => {
      // click MORE button
      const toggleBtnLabel = '[aria-label="Click to toggle the tag menu"]';
      await page.click(toggleBtnLabel);
      expect(
        await page.$eval('[aria-label="Tag menu results"]', (el) =>
          el.classList.contains("hidden")
        )
      ).toBeFalsy();

      await page.click(toggleBtnLabel);
      expect(
        await page.$eval('[aria-label="Tag menu results"]', (el) =>
          el.classList.contains("hidden")
        )
      ).toBeTruthy();
    },
    60000
  );

  it("navigates to correct tag and category blog page", async () => {
    await Promise.all([
      page.waitForNavigation({ waitUntil: "load" }),
      page.click(
        '[aria-label="List of categories and top tags"] :text("Articles")'
      )
    ]);
    expect(page.url()).toContain("/blog/category/articles");

    await Promise.all([
      page.waitForNavigation({ waitUntil: "load" }),
      page.click(
        '[aria-label="List of categories and top tags"] :text("Python")'
      )
    ]);
    expect(page.url()).toContain("/blog/tag/python");
  });

  it("scroll to the blog posts on click 'Start Reading'", async () => {
    await page.goto("/blog", { waitUntil: "load" });
    await page.click('a[href="/blog#read"]');
    await page.waitForFunction(() => window.scrollY >= window.innerHeight);
    const windowHeight = await page.evaluate(() => window.innerHeight);
    const currentY = await page.evaluate(() => window.scrollY);
    expect(currentY).toBeGreaterThanOrEqual(windowHeight);
  });

  it("navigates to the second page on click the 'Older posts' button", async () => {
    await Promise.all([
      page.waitForNavigation({ timeout: 60000 }),
      page.click('[aria-label="Older posts"]')
    ]);
    expect(page.url()).toContain("/blog/page/2");
  });

  it("navigates to the first page on click the 'Newer posts'", async () => {
    await Promise.all([
      page.waitForNavigation({ timeout: 60000 }),
      page.click('[aria-label="Newer posts"]')
    ]);
    expect(page.url()).toContain("/blog");
  });

  it("navigates to the correct page on select page number", async () => {
    await Promise.all([
      page.waitForNavigation(),
      page.selectOption('[aria-label="Select the target page"]', "3")
    ]);
    expect(page.url()).toContain("/blog/page/3");
  });
});
