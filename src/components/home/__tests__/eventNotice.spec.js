/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, getByText } from "@testing-library/react";
import EventNotice from "../eventNotice";
import moment from "moment-timezone";
import { calculateUserLocalTime } from "../../../utils/shared";

jest.mock("../../../utils/shared", () => {
  return {
    ...jest.requireActual("../../../utils/shared"),
    calculateUserLocalTime: (timeNow) => {
      return {
        time: timeNow,
        timezone: "Europe/London"
      };
    }
  };
});

describe("Home | Event Notice Banner", () => {
  const mockData = {
    edges: [
      {
        node: {
          id: "163679197887",
          url: "https://www.eventbrite.co.uk/e/celebration-of-open-research-at-the-university-of-sheffield-tickets-163679197887",
          name: {
            text: "Celebration of Open Research at The University of Sheffield"
          },
          logo: {
            original: {
              url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F143589123%2F121727010915%2F1%2Foriginal.20210804-163431?auto=format%2Ccompress&q=75&sharp=10&s=c61552c6c69fe01890ae8e6316ae1c2b"
            }
          },
          venue: null,
          online_event: true,
          summary:
            "Join us for a celebration of Open Research at the University of Sheffield with the winners of the Library's inaugural Open Research Prize.",
          start: {
            local: "Wed 27 October 2021, 10:00 AM"
          }
        }
      }
    ]
  };

  beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
    Date.now = jest.fn(() => new Date("2021-09-16T10:00:00.00"));
  });

  let notice;

  beforeEach(async () => {
    notice = render(<EventNotice eventBrite={mockData} />);
  });
  it("should renders correctly", async () => {
    expect(notice).toMatchSnapshot();
  });

  it("should display correct date and timezone", async () => {
    let timeNow = moment().format("ddd DD MMMM YYYY, hh:mm A");
    let userTimezone = calculateUserLocalTime(timeNow).timezone;

    expect(
      await getByText(notice.container, `${timeNow} (${userTimezone})`)
    ).toBeInTheDocument();
  });
});
