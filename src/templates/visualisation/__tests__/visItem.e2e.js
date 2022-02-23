describe("e2e | Visualisation item page", () => {
  beforeAll(async () => {
    page.setDefaultNavigationTimeout(30000);
    await page.goto(
      "visualisation/31/01/2022/ORDA-datasets-FAIRness-assessment"
    );
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
        "url=https%3A%2F%2Fdataviz.shef.ac.uk%2Fvisualisation"
      );
      await twitterPage.close();

      const [facebookPage] = await Promise.all([
        context.waitForEvent("page"),
        page.click('[aria-label="Share on Facebook"]')
      ]);
      await facebookPage.waitForLoadState();
      expect(await facebookPage.url()).toContain("https://www.facebook.com/");
      expect(await facebookPage.url()).toContain(
        "ORDA-datasets-FAIRness-assessment"
      );
      await facebookPage.close();

      expect(
        await page.getAttribute('[aria-label="Share on E-mail"]', "href")
      ).toContain("mailto:?subject=Assess");

      const [linkedinPage] = await Promise.all([
        context.waitForEvent("page"),
        page.click('[aria-label="Share on LinkedIn"]')
      ]);
      await linkedinPage.waitForLoadState();
      expect(await linkedinPage.url()).toContain("https://www.linkedin.com/");
      expect(await linkedinPage.url()).toContain(
        "https%253A%252F%252Fdataviz%2Eshef%2Eac%2Euk%252Fvisualisation"
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
    "can navigate between visualisations using the Next button",
    async () => {
      await Promise.all([
        page.waitForNavigation(), // The promise resolves after navigation has finished
        page.click('[aria-label="Next visualisation"]')
      ]);
      expect(await page.url()).not.toContain(
        "ORDA-datasets-FAIRness-assessment"
      );
    },
    40000
  );

  it.jestPlaywrightSkip(
    { browsers: ["webkit"] },
    "can navigate between visualisations using the Prev button",
    async () => {
      await Promise.all([page.click('[aria-label="Previous visualisation"]')]);
      expect(await page.url()).toContain("ORDA-datasets-FAIRness-assessment");
    },
    40000
  );
});
