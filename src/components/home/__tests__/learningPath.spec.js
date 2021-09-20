/**
 * @jest-environment jsdom
 */

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

jest.mock("../../../utils/shared", () => {
  return {
    ...jest.requireActual("../../../utils/shared"),
    getImageSource: () => {
      return null;
    }
  };
});

import "../../../../__mocks__/matchMedia";
import React from "react";
import { render, queryByText, queryAllByText } from "@testing-library/react";
import LearningPath from "../learningPath";
import { useStaticQuery } from "gatsby";

const mockData = {
  allMdx: {
    edges: [
      {
        node: {
          id: "fa723d97-4dd0-5fcc-896d-03aedd338cea",
          fields: {
            slug: "/docs/03/07/2020/LearningPath-Introduction"
          },
          frontmatter: {
            published: null,
            description:
              "Explore data visualisations through definitions, examples, videos, and relevant resources.",
            learningPath: true,
            learningPathBtn: "Get started",
            learningPathDescription:
              "New to data visualisation and programming.",
            learningPathTitle: "Introduction to Dataviz",
            thumbnail: {
              childImageSharp: {
                gatsbyImageData: {
                  layout: "fullWidth",
                  images: {
                    sources: [
                      {
                        srcSet:
                          "/static/ba8697b3749795153395d921371a58d7/99f93/thumb.webp 640w",
                        type: "image/webp",
                        sizes: "100vw"
                      }
                    ]
                  },
                  width: 1,
                  height: 0.5
                }
              }
            }
          }
        }
      },
      {
        node: {
          id: "e33c977a-dfeb-5c0c-a8db-3ae7f5151c7d",
          fields: {
            slug: "/docs/04/07/2020/LearningPath-Lab"
          },
          frontmatter: {
            published: null,
            description:
              "Tutorials and guides on create data visualisations using different tools and languages.",
            learningPath: true,
            learningPathBtn: "Go to Lab",
            learningPathDescription:
              "Previous knowledge of programming languages.",
            learningPathTitle: "Dataviz Lab",
            thumbnail: {
              childImageSharp: {
                gatsbyImageData: {
                  layout: "fullWidth",
                  images: {
                    sources: [
                      {
                        srcSet:
                          "/static/0a519b25edeac63d964187dcb0937182/18e38/thumb.webp 640w",
                        type: "image/webp",
                        sizes: "100vw"
                      }
                    ]
                  },
                  width: 1,
                  height: 0.665625
                }
              }
            }
          }
        }
      },
      {
        node: {
          id: "10503280-e304-5145-a01f-0abc4f0106a1",
          fields: {
            slug: "/docs/05/07/2020/LearningPath-Workflow"
          },
          frontmatter: {
            published: null,
            description:
              "Increase your research impact through reproducible data visualisation workflows.",
            learningPath: true,
            learningPathBtn: "Learn workflows",
            learningPathDescription:
              "Experienced in producing data visualisations.",
            learningPathTitle: "Dataviz Workflows",
            thumbnail: {
              childImageSharp: {
                gatsbyImageData: {
                  layout: "fullWidth",
                  images: {
                    sources: [
                      {
                        srcSet:
                          "/static/1b368099a7b8ef41da2cd78fe2d20e86/18e38/thumb.webp 640w",
                        type: "image/webp",
                        sizes: "100vw"
                      }
                    ]
                  },
                  width: 1,
                  height: 0.665625
                }
              }
            }
          }
        }
      },
      {
        node: {
          id: "6c6e0a12-d818-5f00-9f88-35a6b047133c",
          fields: {
            slug: "/docs/18/03/2021/LearningPath-Statistical-Modeling"
          },
          frontmatter: {
            published: false,
            description:
              "A statistical model is a mathematical model used to describe the relationship between different variables. It contains a set of assumptions about the sample data and usually represent the data generation process in a idealised form.",
            learningPath: true,
            learningPathBtn: "Explore the path",
            learningPathDescription: "Interested in statistics and inferences.",
            learningPathTitle: "Statistical Modeling",
            thumbnail: {
              childImageSharp: {
                gatsbyImageData: {
                  layout: "fullWidth",
                  images: {
                    sources: [
                      {
                        srcSet:
                          "/static/4cf4ad02022a34564b5249892a580461/3d714/thumb.webp 750w,\n/static/4cf4ad02022a34564b5249892a580461/a8b43/thumb.webp 841w",
                        type: "image/webp",
                        sizes: "100vw"
                      }
                    ]
                  },
                  width: 1,
                  height: 0.5897740784780023
                }
              }
            }
          }
        }
      }
    ]
  }
};

describe("Home | Learning Paths", () => {
  beforeAll(async () => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("should renders correctly", async () => {
    useStaticQuery.mockReturnValue(mockData);
    let learningPaths = render(<LearningPath />);
    expect(learningPaths).toMatchSnapshot();
  });

  it("should display `Coming soon` for one learning path", async () => {
    useStaticQuery.mockReturnValue(mockData);

    let learningPaths = render(<LearningPath />);
    const text = await queryAllByText(learningPaths.container, "Coming soon");
    expect(text).not.toBeNull();
  });

  it("should not display any coming soon text", async () => {
    let newMockData = { ...mockData };
    newMockData.allMdx.edges[
      newMockData.allMdx.edges.length - 1
    ].node.frontmatter.published = null;
    useStaticQuery.mockReturnValue(newMockData);

    let learningPaths = render(<LearningPath />);
    const text = await queryByText(learningPaths.container, "Coming soon");
    expect(text).not.toBeInTheDocument();
  });
});
