/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, getByText } from "@testing-library/react";
import WordCloud from "../wordCloud";

describe("Visualisation | Word Cloud", () => {
  const words = [
    {
      name: "Test Category 1",
      count: 2,
      type: "category"
    },
    {
      name: "Test Category 2",
      count: 8,
      type: "category"
    },
    {
      name: "Test Tag 1",
      count: 1,
      type: "tag"
    }
  ];

  beforeEach(() => {});

  it("should renders correctly", async () => {
    let wordCloudComponent = render(
      <WordCloud words={words} colours={["white"]} />
    );
    expect(wordCloudComponent).toMatchSnapshot();
    expect(
      await getByText(wordCloudComponent.container, "Test Category 1")
    ).toBeInTheDocument();
    expect(
      await getByText(wordCloudComponent.container, "Test Category 2")
    ).toBeInTheDocument();
    expect(
      await getByText(wordCloudComponent.container, "Test Tag 1")
    ).toBeInTheDocument();
  });
});
