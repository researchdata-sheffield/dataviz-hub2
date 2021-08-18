/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react"
import renderer from "react-test-renderer"
import * as utils from "../utils"
import { render, fireEvent, waitFor, getByRole } from "@testing-library/react"
import * as htmlToImage from "html-to-image"

const mdxObj = {
  folderLink: "https://testURL.com/visualisation/",
  frontmatter: {
    title: "Test png download",
    pngImagePath: {
      relativePath: "2021-06-24-Increased-snack-intake-in-UK.png"
    }
  }
}

/**
 * createLinkForImage
 */
describe("Create link for image to download", () => {
  it("should create the link and been clicked", () => {
    const link = {
      click: jest.fn()
    }
    jest.spyOn(document, "createElement").mockImplementation(() => link)

    utils.createLinkForImage(
      "downloadImage.jpg",
      "https://dataviz.shef.ac.uk/image.jpg"
    )

    expect(link.download).toEqual("downloadImage.jpg")
    expect(link.href).toEqual("https://dataviz.shef.ac.uk/image.jpg")
    expect(link.click).toHaveBeenCalledTimes(1)
  })
})

/**
 * downloadAsPng
 */
describe("download the HTML element as png image", () => {
  const { open } = window
  let visualisationEl

  beforeAll(() => {
    visualisationEl = document.createElement("div")
  })

  beforeEach(() => {
    delete window.open
    window.open = jest.fn()
  })

  afterAll(() => {
    window.open = open
  })

  it("should open the link if an external path provided", () => {
    utils.downloadAsPng(
      visualisationEl,
      mdxObj,
      "https://dataviz.shef.ac.uk/image.png"
    )
    expect(window.open).toHaveBeenCalledTimes(1)
    expect(window.open).toHaveBeenCalledWith(
      "https://dataviz.shef.ac.uk/image.png",
      "_blank",
      "noopener,noreferrer"
    )
  })

  it("should open the link if an internal path provided", () => {
    utils.downloadAsPng(
      visualisationEl,
      mdxObj,
      "2021-06-24-Increased-snack-intake-in-UK.png"
    )
    expect(window.open).toHaveBeenCalledTimes(1)
    expect(window.open).toHaveBeenCalledWith(
      "https://testURL.com/visualisation/2021-06-24-Increased-snack-intake-in-UK.png",
      "_blank",
      "noopener,noreferrer"
    )
  })

  it("should call createLinkForImage method if path not provided", () => {
    const spyToPng = jest.spyOn(htmlToImage, "toPng")
    spyToPng.mockImplementation(() =>
      Promise.resolve(utils.createLinkForImage())
    )
    const createLinkSpy = jest.spyOn(utils, "createLinkForImage")

    utils.downloadAsPng(visualisationEl, mdxObj)
    expect(createLinkSpy).toHaveBeenCalledTimes(1)

    spyToPng.mockRestore()
  })
})

/**
 * handleImageDownload
 */
describe("handle image download for visualisation", () => {
  let visualisationEl

  beforeAll(() => {
    jest.clearAllMocks()
    jest.spyOn(window, "alert").mockImplementation(() => {
      jest.fn()
    })
    visualisationEl = document.createElement("div")
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it("should use the PNG download method", () => {
    const spyToPng = jest
      .spyOn(utils, "downloadAsPng")
      .mockImplementation(() => jest.fn())
    utils.handleImageDownload(visualisationEl, mdxObj)

    expect(spyToPng).toHaveBeenCalledTimes(1)
  })

  it("should use the SVG download method", () => {
    const spyToSvg = jest
      .spyOn(utils, "downloadAsSvg")
      .mockImplementation(() => jest.fn())
    utils.handleImageDownload(visualisationEl, mdxObj, "", "", "svg")

    expect(spyToSvg).toHaveBeenCalledTimes(1)
  })
})
