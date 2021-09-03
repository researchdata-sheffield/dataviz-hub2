/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react"
import SEO from "../seo"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"

beforeEach(() => {
  jest.clearAllMocks()
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        author: "YLW",
        description: "This is a test metadata for dataviz.shef.",
        title: "SEO test cases"
      }
    }
  }))
})

describe("SEO", () => {
  it("renders correctly", async () => {
    const page = renderer
      .create(
        <div style={{ height: "100vh", width: "100%" }}>
          <SEO
            description="Description for test page"
            title="Test page"
            keywords={["One", "Two"]}
          />
        </div>
      )
      .toJSON()
    expect(page).toMatchSnapshot()
  })
})
