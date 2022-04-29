/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import Tab from "../tab";
import { render, fireEvent, waitFor, getByText } from "@testing-library/react";

const data = [
  {
    title: "Source",
    content: `The University of Sheffield - <a href="https://www.sheffield.ac.uk/news">Latest News</a>.`
  },
  {
    title: "Detail",
    content: `This is an example of detail section.`
  },
  {
    title: "License",
    content: `This visualisation is covered by a Creative Commons license (<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>).`
  }
];

describe("tab component", () => {
  let tabComponent;

  beforeEach(() => {
    tabComponent = render(<Tab data={data} />);
  });

  it("should renders correctly", async () => {
    expect(tabComponent).toMatchSnapshot();

    expect(document.querySelector("#panel\\:r0\\:0")).toHaveClass(
      "react-tabs__tab-panel--selected"
    );
    expect(document.querySelector("#panel\\:r0\\:1")).not.toHaveClass(
      "react-tabs__tab-panel--selected"
    );
    expect(document.querySelector("#panel\\:r0\\:2")).not.toHaveClass(
      "react-tabs__tab-panel--selected"
    );
  });

  it("should switch to different tab on click", async () => {
    const detailBtn = await getByText(tabComponent.container, "Detail");

    await fireEvent.click(detailBtn);

    const sourceBtn = await getByText(tabComponent.container, "Source");
    const licenseBtn = await getByText(tabComponent.container, "License");

    expect(sourceBtn).not.toHaveClass("react-tabs__tab--selected");
    expect(detailBtn).toHaveClass("react-tabs__tab--selected");
    expect(licenseBtn).not.toHaveClass("react-tabs__tab--selected");
  });
});
