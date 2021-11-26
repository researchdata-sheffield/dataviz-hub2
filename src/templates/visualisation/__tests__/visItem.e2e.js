describe("e2e | Visualisation item page", () => {
  beforeAll(async () => {
    page.setDefaultNavigationTimeout(30000);
    await page.goto("visualisation/23/08/2021/Leading-risk-factors-for-DALYs");
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  afterAll(async () => {
    await page.close();
  });

  it.jestPlaywrightSkip(
    { browsers: ["webkit", "firefox"] },
    "go to correct sharing site",
    async () => {
      const [twitterPage] = await Promise.all([
        context.waitForEvent("page"),
        page.click('[aria-label="Share on Twitter"]')
      ]);
      await twitterPage.waitForLoadState();
      expect(await twitterPage.url()).toContain(
        "https://twitter.com/intent/tweet/?text="
      );
      expect(await twitterPage.url()).toContain(
        "url=https%3A%2F%2Fdataviz.shef.ac.uk%2Fvisualisation%2F23%2F08%2F2021%2FLeading-risk-factors-for-DALYs"
      );
      await twitterPage.close();

      const [facebookPage] = await Promise.all([
        context.waitForEvent("page"),
        page.click('[aria-label="Share on Facebook"]')
      ]);
      await facebookPage.waitForLoadState();
      expect(await facebookPage.url()).toContain("https://www.facebook.com/");
      expect(await facebookPage.url()).toContain(
        "Leading-risk-factors-for-DALYs"
      );
      await facebookPage.close();

      expect(
        await page.getAttribute('[aria-label="Share on E-mail"]', "href")
      ).toBe(
        "mailto:?subject=Leading%20risk%20factors%20for%20disability-adjusted%20life%20years%20in%20different%20SDI%20countries%20-%20A%20simple%20visualisation%20that%20shows%20leading%20risk%20factors%20for%20number%20of%20years%20lost%20due%20to%20overall%20disease%20burden%2C%20in%20countries%20with%20different%20Socio-Demographic%20Indexes.%0A&body=https%3A%2F%2Fdataviz.shef.ac.uk%2Fvisualisation%2F23%2F08%2F2021%2FLeading-risk-factors-for-DALYs"
      );

      const [linkedinPage] = await Promise.all([
        context.waitForEvent("page"),
        page.click('[aria-label="Share on LinkedIn"]')
      ]);
      await linkedinPage.waitForLoadState();
      expect(await linkedinPage.url()).toContain("https://www.linkedin.com/");
      expect(await linkedinPage.url()).toContain(
        "https%253A%252F%252Fdataviz%2Eshef%2Eac%2Euk%252Fvisualisation%252F23%252F08%252F2021%252FLeading-risk-factors-for-DALYs"
      );
      await linkedinPage.close();

      // Edit on GitHub
      const [githubPage] = await Promise.all([
        context.waitForEvent("page"),
        page.click('[aria-label="Edit on GitHub"]')
      ]);
      await githubPage.waitForLoadState();
      expect(await githubPage.url()).toContain(
        "https://github.com/researchdata-sheffield/dataviz-hub2/blob/development/content/visualisation/"
      );
      await githubPage.close();

      // Download button
      await page.click('[aria-label="Download Visualisation"]');
      expect(
        await page.$eval(
          '[aria-label="Download Visualisation"] + div',
          (el) => getComputedStyle(el).display
        )
      ).not.toBe("none");

      await page.click('[aria-label="Close download menu"]');
      expect(
        await page.$eval(
          '[aria-label="Download Visualisation"] + div',
          (el) => getComputedStyle(el).display
        )
      ).toBe("none");
    },
    90000
  );

  it.jestPlaywrightSkip(
    { browsers: ["webkit", "firefox"] },
    "it opens embed menu and copy the code",
    async () => {
      await page.click('[aria-label="Embed Visualisation"]');
      expect(
        await page.$eval("#embedMenu", (el) => getComputedStyle(el).display)
      ).not.toBe("none");
      await context.grantPermissions(["clipboard-read"]);

      const embedCode = await page.$eval(
        "#embedMenu .gatsby-highlight",
        (el) => el.innerText
      );
      await page.click("#copyEmbedCodeBtn");

      const clipText = await page.evaluate(async () => {
        return navigator.clipboard.readText();
      });
      expect(embedCode.replace(/ /g, "").replace(/\n/g, "")).toBe(
        clipText.replace(/ /g, "").replace(/\n/g, "")
      );
    },
    90000
  );

  it.jestPlaywrightSkip(
    { browsers: ["webkit"] },
    "can navigate between visualisations using Prev & Next buttons",
    async () => {
      await Promise.all([
        page.waitForNavigation(), // The promise resolves after navigation has finished
        page.click('[aria-label="Next visualisation"]')
      ]);
      expect(await page.url()).not.toContain(
        "/visualisation/23/08/2021/Leading-risk-factors-for-DALYs"
      );

      await Promise.all([page.click('[aria-label="Previous visualisation"]')]);
      expect(await page.url()).toContain(
        "/visualisation/23/08/2021/Leading-risk-factors-for-DALYs"
      );
    },
    40000
  );
});
