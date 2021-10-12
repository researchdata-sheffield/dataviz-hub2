describe("e2e tests for all pages", () => {
  beforeAll(async () => {
    await page.goto("/");
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  afterAll(async () => {
    await page.close();
  });

  it.jestPlaywrightSkip(
    { browsers: ["webkit", "firefox"] },
    "all render correctly",
    async () => {
      const fs = require("fs");
      const path = require("path");
      let rawPathData = fs.readFileSync(
        path.resolve("./tests/websitePaths.json")
      );
      let paths = JSON.parse(rawPathData).filter(
        (p) => p != "/visWorkshop/" || !p.includes("404")
      );
      //console.log(paths)

      for (const link of paths) {
        try {
          await Promise.all([
            page.waitForNavigation(),
            page.goto(link, { waitUntil: "domcontentloaded" })
          ]);
          expect(await page.url()).not.toContain("/404");
        } catch (error) {
          throw new Error(`Error in rendering: ${link}`);
        }
      }
    },
    300000
  );
});
