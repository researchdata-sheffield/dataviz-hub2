/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import ScrollTopBtn from "../scrollTop";
import { render, fireEvent } from "@testing-library/react";

// TODO: replace by E2E test
describe("Scroll top button", () => {
  it("scroll to the top", async () => {
    const page = render(
      <div style={{ height: "300vh", width: "100%" }}>
        <ScrollTopBtn />
      </div>
    );

    await fireEvent.scroll(window, { target: { scrollY: 1000 } });

    await fireEvent(
      page.container.querySelector("#scrollTop-btn"),
      new MouseEvent("click")
    );

    setTimeout(() => {
      expect(window.scrollY).toEqual(0);
    }, 100);
  });
});
