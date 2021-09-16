/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, screen } from "@testing-library/react";
import Search from "../search";
import { useStaticQuery } from "gatsby";

const mockResult = [
  {
    id: "someID1",
    title: "Statistical Testing",
    description:
      "Statistical Modeling Part 4 - What is Statistical testing? Why do we need to test? How do we perform tests?",
    author: ["Dataviz Team", "Jean Russell"],
    url: "/docs/07/04/2021/LearningPath-Statistical-Modeling-4",
    type: "docs",
    published: false
  },
  {
    id: "someID",
    title: "Which statistical test to use for two variables?",
    description:
      "An interative tool based on the flow chart made by Jean Russell to help you determine which statistical test to use for two variables. This tool is a part of the statistical modelling learning path.\n",
    author: ["Yu Liang Weng"],
    category: ["Research & Innovation IT"],
    tag: ["Statistics", "Interative"],
    url: "/visualisation/04/08/2021/Which-Statistical-Test-To-Use-For-Two-Variables",
    type: "visualisation"
  }
];

describe("Search component", () => {
  let spy;

  beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  beforeEach(() => {
    spy = jest
      .spyOn(Search.prototype, "getSearchResults")
      .mockImplementation((query) => {
        if (!query) {
          return [];
        }
        return mockResult;
      });

    useStaticQuery.mockReturnValue({
      allMdx: {
        edges: [
          {
            node: {
              id: "e5b4489f-61a4-5070-ace9-13b7d5a2ae3d",
              frontmatter: {
                date: "Wed, 04 Aug 2021",
                thumbnail: {
                  childImageSharp: {
                    gatsbyImageData: {
                      layout: "fullWidth",
                      images: {
                        fallback: {
                          src: "/static/338f5d51a41cdbc2c6ff4a86788b4f6f/7d307/thumbnail.png",
                          srcSet:
                            "/static/338f5d51a41cdbc2c6ff4a86788b4f6f/f054e/thumbnail.png 750w,\n/static/338f5d51a41cdbc2c6ff4a86788b4f6f/ae1c8/thumbnail.png 1080w,\n/static/338f5d51a41cdbc2c6ff4a86788b4f6f/d41bd/thumbnail.png 1366w,\n/static/338f5d51a41cdbc2c6ff4a86788b4f6f/7d307/thumbnail.png 1920w",
                          sizes: "100vw"
                        },
                        sources: [
                          {
                            srcSet:
                              "/static/338f5d51a41cdbc2c6ff4a86788b4f6f/4f03f/thumbnail.webp 750w,\n/static/338f5d51a41cdbc2c6ff4a86788b4f6f/4f506/thumbnail.webp 1080w,\n/static/338f5d51a41cdbc2c6ff4a86788b4f6f/f0a0a/thumbnail.webp 1366w,\n/static/338f5d51a41cdbc2c6ff4a86788b4f6f/26222/thumbnail.webp 1920w",
                            type: "image/webp",
                            sizes: "100vw"
                          }
                        ]
                      },
                      width: 1,
                      height: 1
                    }
                  }
                }
              }
            }
          },
          {
            node: {
              id: "e8c76639-68f0-54fb-b571-b1e296bebbb4",
              frontmatter: {
                date: "Thu, 22 Jul 2021",
                thumbnail: {
                  childImageSharp: {
                    gatsbyImageData: {
                      layout: "fullWidth",
                      images: {
                        fallback: {
                          src: "/static/550fb0c7cd27123c708c78a607e115b6/52cc1/thumb.png",
                          srcSet:
                            "/static/550fb0c7cd27123c708c78a607e115b6/52cc1/thumb.png 580w",
                          sizes: "100vw"
                        },
                        sources: [
                          {
                            srcSet:
                              "/static/550fb0c7cd27123c708c78a607e115b6/f8c58/thumb.webp 580w",
                            type: "image/webp",
                            sizes: "100vw"
                          }
                        ]
                      },
                      width: 1,
                      height: 1.0034482758620689
                    }
                  }
                }
              }
            }
          }
        ]
      }
    });
  });

  it("renders correctly", async () => {
    let tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("return search result without error", async () => {
    // TODO: mock mdx queries

    let search = render(<Search />);
    const inputNode = screen.getByPlaceholderText(
      "Search title, description, date..."
    );

    await fireEvent.change(inputNode, {
      target: { value: "test search query" }
    });

    expect(search.container).toMatchSnapshot();
  });
});
