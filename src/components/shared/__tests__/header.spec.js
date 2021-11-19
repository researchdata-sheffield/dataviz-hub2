/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import Header from "../header";
import { LocationProvider } from "@gatsbyjs/reach-router";
import { render, fireEvent } from "@testing-library/react";

describe("Header", () => {
  it("renders correctly", async () => {
    let tree = renderer
      .create(
        <LocationProvider>
          <Header />
        </LocationProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Header Interaction", () => {
  let header;
  document.execCommand = jest.fn();

  beforeEach(() => {
    header = render(
      <LocationProvider>
        <Header />
      </LocationProvider>
    );
  });

  it("open the dialog box when click RSS button (desktop)", async () => {
    const rssDesktop = await header.container.querySelector("#rssDesktop");
    await fireEvent.click(rssDesktop);

    const rssBox = await header.container.querySelector("#rssBox");

    expect(rssBox.style.visibility).toBeFalsy();
    expect(document.execCommand).toHaveBeenCalledWith("copy");
  });

  it("open the dialog box when click RSS button (mobile)", async () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 400
    });

    await window.dispatchEvent(new Event("resize"));

    const rssMobile = await header.container.querySelector("#rssMobile");
    await fireEvent.click(rssMobile);

    const rssBox = await header.container.querySelector("#rssBox");
    expect(rssBox.style.visibility).toBeFalsy();
    expect(document.execCommand).toHaveBeenCalledWith("copy");
  });
});
