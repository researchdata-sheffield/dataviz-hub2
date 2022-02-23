describe("e2e | Visualisation page", () => {
  beforeAll(async () => {
    await page.goto("visualisation");
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  afterAll(async () => {
    await page.close();
  });

  it("opens up the tag menu", async () => {
    await page.click("text=Browse all tags");
    await page.waitForSelector("#vis-tag-menu", { state: "visible" });
    expect(
      await page.$eval("#vis-tag-menu", (el) => getComputedStyle(el).visibility)
    ).toBe("visible");

    await page.click("#vis-tag-menu button");
    await page.waitForSelector("#vis-tag-menu", { state: "hidden" });
    expect(
      await page.$eval("#vis-tag-menu", (el) => getComputedStyle(el).visibility)
    ).toBe("hidden");

    await page.evaluate(() => window.scrollTo(0, 600));
    expect(
      await page.$eval("#vis-tag-button", (el) => getComputedStyle(el).opacity)
    ).not.toBe(0);

    await page.click("#vis-tag-button");
    await page.waitForSelector("#vis-tag-menu", { state: "visible" });
    expect(
      await page.$eval("#vis-tag-menu", (el) => getComputedStyle(el).visibility)
    ).toBe("visible");
    await page.click("#vis-tag-menu button");
  });

  it("opens up/close the footer", async () => {
    await page.evaluate(() => window.scrollTo(0, 700));
    expect(
      await page.$eval(
        "#vis-footer-button",
        (el) => getComputedStyle(el).opacity
      )
    ).not.toBe(0);

    await page.click("#vis-footer-button");
    expect(
      await page.$eval("main footer", (el) => getComputedStyle(el).display)
    ).not.toBe("none");

    await page.click("#vis-footer-button");
    expect(
      await page.$eval("main footer", (el) => getComputedStyle(el).display)
    ).toBe("none");
  });

  it("returns to the top with the scroll top button", async () => {
    await page.click("#scrollTop-btn");
    await page.waitForFunction(() => window.scrollY == 0);
    expect(await page.evaluate(() => window.scrollY)).toBe(0);
  });
});
