/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import FeaturedItem from "../featuredItem";

jest.mock("../../../utils/shared", () => {
  return {
    ...jest.requireActual("../../../utils/shared"),
    getImageSource: () => {
      return null;
    }
  };
});

describe("Home | Featured Items", () => {
  const mockData = {
    edges: [
      {
        node: {
          id: "168c4103-f8fd-58e2-b305-3eb015954844",
          frontmatter: {
            type: null,
            title: "Mock item 1",
            date: "25 January 2021",
            description: "Featured item mock.",
            tag: ["Dataviz", "C++", "Interactive"],
            category: ["Articles"],
            featured: true,
            thumbnail: {
              childImageSharp: {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          "/static/8299e3c1cf212758e19d56784b0e4e48/bd3dc/thumb.webp 366w,\n/static/8299e3c1cf212758e19d56784b0e4e48/32213/thumb.webp 732w,\n/static/8299e3c1cf212758e19d56784b0e4e48/8dc67/thumb.webp 1464w",
                        type: "image/webp",
                        sizes: "(min-width: 1464px) 1464px, 100vw"
                      }
                    ]
                  },
                  width: 1464,
                  height: 1125
                }
              }
            },
            author: [
              {
                name: "Mock author 1",
                avatar: {
                  childImageSharp: {
                    gatsbyImageData: {
                      layout: "fullWidth",
                      images: {
                        sources: [
                          {
                            srcSet:
                              "/static/1b950aec9371d81fecb003f21d10c274/5e011/Mock.webp 320w",
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
            ]
          },
          fields: {
            slug: "/blog/25/01/2021/mock-item-1",
            readingTime: {
              text: "11 min read"
            }
          }
        }
      },
      {
        node: {
          id: "006656c2-c336-53f1-936d-a93f8751bba9",
          frontmatter: {
            type: null,
            title: "Mock featured item 2",
            date: "09 September 2020",
            description: "Data visualizations have effects.",
            tag: ["Social Factors", "Effects"],
            category: ["Articles"],
            featured: true,
            thumbnail: {
              childImageSharp: {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          "/static/8299e3c1cf212758e19d56784b0e4e48/bd3dc/thumb.webp 366w,\n/static/8299e3c1cf212758e19d56784b0e4e48/32213/thumb.webp 732w,\n/static/8299e3c1cf212758e19d56784b0e4e48/8dc67/thumb.webp 1464w",
                        type: "image/webp",
                        sizes: "(min-width: 1464px) 1464px, 100vw"
                      }
                    ]
                  },
                  width: 1464,
                  height: 1125
                }
              }
            },
            author: [
              {
                name: "Mock author 2",
                avatar: {
                  childImageSharp: {
                    gatsbyImageData: {
                      layout: "fullWidth",
                      images: {
                        sources: [
                          {
                            srcSet:
                              "/static/b6f432ec1b47d139d904d5025714b073/ca9d4/helen_k.webp 84w",
                            type: "image/webp",
                            sizes: "100vw"
                          }
                        ]
                      },
                      width: 1,
                      height: 1.0119047619047619
                    }
                  }
                }
              }
            ]
          },
          fields: {
            slug: "/blog/09/09/2020/mock-item-2",
            readingTime: {
              text: "6 min read"
            }
          }
        }
      }
    ]
  };

  beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("should renders correctly", async () => {
    let featured = render(<FeaturedItem item={mockData} />);
    expect(featured).toMatchSnapshot();
  });
});
