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
      let rawdata = fs.readFileSync(path.resolve("./tests/websitePaths.json"));
      let paths = JSON.parse(rawdata).filter((p) => p != "/visWorkshop/");

      for (const link of paths) {
        try {
          await page.goto(link, { waitUntil: "domcontentloaded" });
          expect(await page.isVisible("#website")).toBeTruthy();
        } catch (error) {
          throw new Error(`Error in rendering: ${link}`);
        }
      }
    },
    300000
  );
});
