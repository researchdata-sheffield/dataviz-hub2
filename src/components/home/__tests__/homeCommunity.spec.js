/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import HomeCommunity from "../homeCommunity";

describe("Home | Community Section", () => {
  let community;

  beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  beforeEach(async () => {
    community = render(<HomeCommunity />);
  });
  it("should renders correctly", async () => {
    expect(community).toMatchSnapshot();
  });

  it("background should change colour on mouseOver and mouseLeave", async () => {
    const supportSection = await community.container.querySelector(
      `[data-section="support"]`
    );
    await fireEvent.mouseOver(supportSection);

    const communitySection = await community.container.querySelector(
      `#home-community`
    );
    expect(getComputedStyle(communitySection).backgroundColor).toBe(
      `rgb(167, 243, 208)`
    );

    await fireEvent.mouseLeave(supportSection);
    expect(getComputedStyle(communitySection).backgroundColor).toBe(
      `rgb(255, 255, 255)`
    );
  });

  it("support section should have correct email and Slack links", async () => {
    const emailLink = await getByText(community.container, "Email").closest(
      "a"
    );
    expect(emailLink.href).toBe("mailto:rdm@sheffield.ac.uk");

    const DMLink1 = await getByText(community.container, "DM 1").closest("a");
    expect(DMLink1.href).toBe(
      "https://shef-dataviz.slack.com/archives/DRF6V81L0"
    );

    const DMLink2 = await getByText(community.container, "DM 2").closest("a");
    expect(DMLink2.href).toBe(
      "https://shef-dataviz.slack.com/archives/D01CANTQN2F"
    );

    const DMLink3 = await getByText(community.container, "DM 3").closest("a");
    expect(DMLink3.href).toBe(
      "https://shef-dataviz.slack.com/archives/D014SQAFRGT"
    );

    const DMLink4 = await getByText(community.container, "DM 4").closest("a");
    expect(DMLink4.href).toBe(
      "https://shef-dataviz.slack.com/archives/D01CARHVAJF"
    );
  });
});
