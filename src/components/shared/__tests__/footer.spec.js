/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import Footer from "../footer";

describe("Shared | Footer", () => {
  it("should renders correctly", async () => {
    let footer = render(<Footer />);
    expect(footer).toMatchSnapshot();
  });
});
