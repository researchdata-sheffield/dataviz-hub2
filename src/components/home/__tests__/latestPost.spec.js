/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, queryByText } from "@testing-library/react";
import LatestPost from "../latestPost";

jest.mock("../../../utils/shared", () => {
  return {
    ...jest.requireActual("../../../utils/shared"),
    getImageSource: () => {
      return null;
    }
  };
});

const mockData = {
  edges: [
    {
      node: {
        id: "4ed7c949-552f-594d-bb02-3b47dc104629",
        frontmatter: {
          type: null,
          title: "Mock featured Item 1",
          date: "15 Jan 2021",
          description: "Mock Description",
          tag: ["Mock tag"],
          category: ["Articles", "Events"],
          featured: true,
          thumbnail: null,
          author: [
            {
              name: "MOck Author",
              avatar: {
                childImageSharp: {
                  gatsbyImageData: {
                    layout: "fullWidth",
                    images: {
                      sources: [
                        {
                          srcSet:
                            "/static/0b4fd531c4d7e2b13cad834b37cad1fc/dacf8/Y.L_Weng.webp 591w",
                          type: "image/webp",
                          sizes: "100vw"
                        }
                      ]
                    },
                    width: 1,
                    height: 0.9475465313028765
                  }
                }
              }
            }
          ]
        },
        fields: {
          slug: "/blog/15/06/2021/Visualising-Cultural-Heritage-Data",
          readingTime: {
            text: "8 min read"
          }
        }
      }
    },
    {
      node: {
        id: "50198fed-ab7b-54d1-94b8-4f6529debeed",
        frontmatter: {
          type: null,
          title: "Mock featured Item 2",
          date: "16 March 2021",
          description:
            "The title says it all! Some snippets of advice for making our charts more fit for purpose.",
          tag: ["Tutorial"],
          category: ["Articles"],
          featured: true,
          thumbnail: null,
          author: [
            {
              name: "Gemma Ives",
              avatar: {
                childImageSharp: {
                  gatsbyImageData: {
                    layout: "fullWidth",
                    images: {
                      sources: [
                        {
                          srcSet:
                            "/static/c8d0f44f49a0c2ce38d557f5b9070c49/bf733/PPCirc.webp 626w",
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
          slug: "/blog/16/03/2021/Good-Practice-Guide/Index",
          readingTime: {
            text: "11 min read"
          }
        }
      }
    },
    {
      node: {
        id: "9693afb1-c1fa-5871-98f2-f617ff11f2d7",
        frontmatter: {
          type: null,
          title: "Useful Resources for R",
          date: "18 February 2021",
          description:
            "Part 4 | A summary of resources that you might find useful when using R.",
          tag: ["R"],
          category: ["Articles"],
          featured: true,
          thumbnail: null,
          author: [
            {
              name: "Yu Liang Weng",
              avatar: {
                childImageSharp: {
                  gatsbyImageData: {
                    layout: "fullWidth",
                    images: {
                      sources: [
                        {
                          srcSet:
                            "/static/0b4fd531c4d7e2b13cad834b37cad1fc/dacf8/Y.L_Weng.webp 591w",
                          type: "image/webp",
                          sizes: "100vw"
                        }
                      ]
                    },
                    width: 1,
                    height: 0.9475465313028765
                  }
                }
              }
            }
          ]
        },
        fields: {
          slug: "/blog/18/02/2021/Useful-Resources-for-R",
          readingTime: {
            text: "6 min read"
          }
        }
      }
    },
    {
      node: {
        id: "11028bda-de4f-5638-b10b-3867d82f51d4",
        frontmatter: {
          type: null,
          title: "Templates for Shiny applications",
          date: "05 February 2021",
          description:
            "A simple framework to get you started creating your own Shiny app. Ready to use Shiny templates where you can replace elements with your own data and visualisations.",
          tag: [
            "Shiny",
            "Template",
            "R",
            "Mock tag 2",
            "Mock tag 3",
            "Mock tag 4"
          ],
          category: ["Tutorial"],
          featured: null,
          thumbnail: {
            childImageSharp: {
              gatsbyImageData: {
                layout: "fullWidth",
                images: {
                  sources: [
                    {
                      srcSet:
                        "/static/ab155ee272c11bb6b70e17943518efd4/56234/Thumb.webp 750w,\n/static/ab155ee272c11bb6b70e17943518efd4/b36af/Thumb.webp 1080w,\n/static/ab155ee272c11bb6b70e17943518efd4/918e5/Thumb.webp 1310w",
                      type: "image/webp",
                      sizes: "100vw"
                    }
                  ]
                },
                width: 1,
                height: 0.7923664122137405
              }
            }
          },
          author: [
            {
              name: "Gemma Ives",
              avatar: {
                childImageSharp: {
                  gatsbyImageData: {
                    layout: "fullWidth",
                    images: {
                      sources: [
                        {
                          srcSet:
                            "/static/c8d0f44f49a0c2ce38d557f5b9070c49/bf733/PPCirc.webp 626w",
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
            },
            {
              name: "Yu Liang Weng",
              avatar: {
                childImageSharp: {
                  gatsbyImageData: {
                    layout: "fullWidth",
                    images: {
                      sources: [
                        {
                          srcSet:
                            "/static/0b4fd531c4d7e2b13cad834b37cad1fc/dacf8/Y.L_Weng.webp 591w",
                          type: "image/webp",
                          sizes: "100vw"
                        }
                      ]
                    },
                    width: 1,
                    height: 0.9475465313028765
                  }
                }
              }
            }
          ]
        },
        fields: {
          slug: "/blog/05/02/2021/Shiny-Template",
          readingTime: {
            text: "9 min read"
          }
        }
      }
    }
  ]
};

describe("Home | Latest Post", () => {
  let latest;

  beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  it("should renders correctly", async () => {
    latest = render(<LatestPost post={mockData} />);
    expect(latest).toMatchSnapshot();
  });

  it("should skip first two featured items", async () => {
    latest = render(<LatestPost post={mockData} />);

    const item1 = await queryByText(latest.container, "Mock feature Item 1");
    expect(item1).not.toBeInTheDocument();

    const item2 = await queryByText(latest.container, "Mock feature Item 2");
    expect(item2).not.toBeInTheDocument();
  });
});
