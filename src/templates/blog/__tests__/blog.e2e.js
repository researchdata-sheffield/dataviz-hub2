describe("e2e | Blog page", () => {
  beforeAll(async () => {
    await page.goto("/blog");
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  afterAll(async () => {
    await page.close();
  });

  it("opens up both tag menus", async () => {
    // slide tag menu
    // normal tag menu
    // click MORE button
  });

  it("navigates to correct tag and category blog page", async () => {});

  it("scroll to the blog posts on click 'Start Reading'", async () => {});

  it("navigates to the second page on click the 'Older posts' button", async () => {});

  it("navigates to the first page on click the 'Newer posts'", async () => {});

  it("navigates to the correct page on select page number", async () => {});
});
