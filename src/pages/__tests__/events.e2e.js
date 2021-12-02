import moment from "moment-timezone";

describe("e2e | Events page", () => {
  beforeAll(async () => {
    await page.goto("events");
    await page.waitForSelector("id=__loader", { state: "hidden" });
  });

  afterAll(async () => {
    await page.close();
  });

  it("shows the correct date and time", async () => {
    let timeNow = moment().format("ddd DD MMMM YYYY, hh");
    const element = await page.$$(`text=${timeNow}`);

    expect(element.length).not.toBe(0);
  }, 300000);

  it("show/hidden the register button on hover/unhover", async () => {
    const upcomingEvents = await page.$$("#upcomingEvents a");

    if (upcomingEvents.length > 0) {
      const firstElement = upcomingEvents[0];
      await firstElement.hover();
      expect(
        await firstElement.$eval("button", (el) => getComputedStyle(el).display)
      ).not.toBe("none");

      // unhover
      await page.mouse.move(0, -300);
      expect(
        await firstElement.$eval("button", (el) => getComputedStyle(el).display)
      ).toBe("none");
    }
  }, 300000);

  it("opens up the correct eventbrite page", async () => {
    const upcomingEvents = await page.$$("#upcomingEvents a");

    if (upcomingEvents.length > 0) {
      const firstElement = upcomingEvents[0];
      const eventUrl = await firstElement.getAttribute("href");

      const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        firstElement.click()
      ]);

      expect(newPage.url()).toBe(eventUrl);
    }
  }, 40000);
});
