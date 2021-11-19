describe("Search bar on the home page", () => {
  beforeAll(async () => {
    await jestPlaywright.resetPage();
    await jestPlaywright.resetContext();

    await page.goto("/");
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  afterAll(async () => {
    await page.close();
  });

  it("display result list on input & no result list on clear input", async () => {
    await page.fill("#homeSearch", "python");
    const resultList = await page.$$("#searchResult > div");
    expect(resultList.length).toBe(1);

    await page.fill("#homeSearch", "");
    const clearResultList = await page.$$("#searchResult > div");
    expect(clearResultList.length).toBe(0);
  }, 300000);
});
