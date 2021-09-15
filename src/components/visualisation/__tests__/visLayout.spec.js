/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, getByText } from "@testing-library/react";
import VisLayout from "../visLayout";

const mockMDXs = [
  {
    node: {
      id: "0c473e6a-0c5d-55c5-b036-9c7bb1187ed3",
      frontmatter: {
        type: "visualisation",
        title: "Test Title",
        date: "06 September 2021",
        description:
          "A sunburst visualisation that shows modelled effects of tax and minimum unit pricing (MUP) policies on Consumption (units per year), Expenditure (annual £ spent), and Hospitalisations (at full effect).\nYou can choose to see the modelled effects in percentage change (default choice, express the change in percentage) or absolute change (real value).\n",
        tag: ["Alcohol Policy", "Gender"],
        category: ["Department name"],
        featured: null,
        thumbnail: {
          childImageSharp: {
            gatsbyImageData: {
              layout: "fullWidth",
              images: {
                sources: [
                  {
                    srcSet:
                      "/static/a183276647b83d5e9d80d444f54f2d38/4f03f/thumb.webp 750w,\n/static/a183276647b83d5e9d80d444f54f2d38/4f506/thumb.webp 1080w,\n/static/a183276647b83d5e9d80d444f54f2d38/f0a0a/thumb.webp 1366w,\n/static/a183276647b83d5e9d80d444f54f2d38/60a06/thumb.webp 1624w",
                    type: "image/webp",
                    sizes: "100vw"
                  }
                ]
              },
              width: 1,
              height: 1
            }
          }
        },
        author: [
          {
            name: "Author Name",
            avatar: {
              childImageSharp: {
                gatsbyImageData: {
                  layout: "fullWidth",
                  images: {
                    sources: [
                      {
                        srcSet:
                          "/static/0b4fd531c4d7e2b13cad834b37cad1fc/dacf8/image.webp 591w",
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
        ],
        rowSpan: null,
        columnSpan: null
      },
      fields: {
        slug: "/visualisation/06/09/2021/Test-Title",
        readingTime: {
          text: "3 min read"
        }
      }
    }
  }
];

const mockRef = {
  current: {}
};

const mockPageContext = {
  pagePath: "/visualisation",
  allVisCatTag: []
};

jest.mock("../../shared/seo", () => {
  return {
    __esModule: true,
    // eslint-disable-next-line react/display-name
    default: () => {
      return <div />;
    }
  };
});

describe("Visualisation | Page layout", () => {
  let visLayoutComponent;

  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
    visLayoutComponent = render(
      <VisLayout
        currentMDXs={mockMDXs}
        nextPageRef={mockRef}
        title="Test Visualisation Layout"
        pageContext={mockPageContext}
      />
    );
  });

  it("should renders correctly", async () => {
    expect(visLayoutComponent).toMatchSnapshot();
    expect(
      await getByText(visLayoutComponent.container, "Test Visualisation Layout")
    ).toBeInTheDocument();
  });
});
