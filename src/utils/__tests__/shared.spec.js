import {
  shortenText,
  getImageSource,
  randomInteger,
  getNumberWithinRange,
  calculateUserLocalTime,
  getShareLinks
} from "../shared";

describe("ShortenText", () => {
  const text =
    "Build a community around interactive data visualisation at TUoS.";

  it("shorten text with dots at the end", () => {
    expect(shortenText(text, 5)).toEqual(
      "Build a community around interactive ..."
    );
  });

  it("shorten text with full sentence", () => {
    expect(shortenText(text, 11)).toEqual(text);
  });

  it("should return empty string", () => {
    expect(shortenText("", 5)).toEqual("");
  });
});

describe("getImageSource", () => {
  const node = {
    frontmatter: {
      thumbnail: {
        childImageSharp: {
          gatsbyImageData: {
            layout: "constrained",
            backgroundColor: "#f8f8f8",
            images: {
              fallback: {
                src: "/static/fdb1e2f76e/e96af/Map_Output.png",
                sizes: "(min-width: 1600px) 1600px, 100vw"
              },
              sources: [
                {
                  srcSet: "/static/fdb1e2f76e/e96af/Map_Output.webp 1600w",
                  type: "image/webp",
                  sizes: "(min-width: 1600px) 1600px, 100vw"
                }
              ]
            },
            width: 1600,
            height: 772
          }
        }
      }
    }
  };
  const match = {
    layout: "constrained",
    backgroundColor: "#f8f8f8",
    images: {
      fallback: {
        src: "/static/fdb1e2f76e/e96af/Map_Output.png",
        sizes: "(min-width: 1600px) 1600px, 100vw"
      },
      sources: [
        {
          srcSet: "/static/fdb1e2f76e/e96af/Map_Output.webp 1600w",
          type: "image/webp",
          sizes: "(min-width: 1600px) 1600px, 100vw"
        }
      ]
    },
    width: 1600,
    height: 772
  };

  beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("return image data object", () => {
    expect(getImageSource(node)).toMatchObject(match);
  });

  it("return image source", () => {
    expect(getImageSource(node, true)).toEqual(
      "/static/fdb1e2f76e/e96af/Map_Output.png"
    );
  });
});

describe("Random integer generator", () => {
  it("returns a value between the range", () => {
    const max = 5;
    const generatedNum = randomInteger(max);
    expect(generatedNum).toBeGreaterThanOrEqual(0);
    expect(generatedNum).toBeLessThan(max);
  });

  it("returns zero", () => {
    const max = 0;
    const generatedNum = randomInteger(max);
    expect(generatedNum).toEqual(0);
  });
});

describe("get Number Within Range", () => {
  it("should return upper bound", () => {
    const result = getNumberWithinRange(20, 5, 10);
    expect(result).toEqual(10);
  });

  it("should return lower bound", () => {
    const result = getNumberWithinRange(2, 5, 10);
    expect(result).toEqual(5);
  });

  it("should return the number", () => {
    const result = getNumberWithinRange(7, 5, 10);
    expect(result).toEqual(7);
  });
});

describe("Calculate user's local time", () => {
  let moment;
  beforeEach(() => {
    moment = require("moment-timezone");
  });

  it("returns the same date and time", () => {
    jest.doMock("moment", () => {
      moment.tz.setDefault("Europe/London");
      return moment;
    });

    let objArr = [
      {
        time: "Mon 17 May 2021, 12:00 PM",
        timezone: "Europe/London"
      },
      {
        time: "Mon 17 May 2021, 01:00 PM",
        timezone: "Europe/London"
      }
    ];

    expect(
      calculateUserLocalTime("2021-05-17 01:00 PM", "Europe/London")
    ).toMatchOneObject(objArr);
  });

  it("returns the date and time in China", () => {
    jest.doMock("moment", () => {
      moment.tz.setDefault("Asia/Shanghai");
      return moment;
    });

    let objArr = [
      {
        time: "Mon 17 May 2021, 08:00 PM",
        timezone: "Asia/Shanghai"
      },
      {
        time: "Mon 17 May 2021, 09:00 PM",
        timezone: "Asia/Shanghai"
      }
    ];

    expect(
      calculateUserLocalTime("2021-05-17 01:00 PM", "Asia/Shanghai")
    ).toMatchOneObject(objArr);
  });

  expect.extend({
    toMatchOneObject(received, objectsArray) {
      let pass = JSON.stringify(objectsArray).includes(
        JSON.stringify(received)
      );

      if (pass) {
        return {
          message: () => `expected the object to be in the object array`,
          pass: true
        };
      } else {
        return {
          message: () =>
            `the object ${JSON.stringify(received)} is NOT in the object array:
             ${JSON.stringify(objectsArray)}
            `,
          pass: false
        };
      }
    }
  });
});

describe("Get share links for a MDX document", () => {
  const mdxObj = {
    fields: {
      slug: "/visualisation/22/07/2021/Millions-of-UK-residents-struggle-to-access-food",
      slugOrigin:
        "/2021-07-22-Millions-of-UK-residents-struggle-to-access-food/"
    },
    frontmatter: {
      type: "visualisation",
      title: "Millions of UK residents struggle to access food",
      description: "This is test description"
    }
  };

  const mdxObjBlog = {
    fields: {
      slug: "/blog/22/07/2021/Millions-of-UK-residents-struggle-to-access-food",
      slugOrigin:
        "/2021-07-22-Millions-of-UK-residents-struggle-to-access-food/"
    },
    frontmatter: {
      title: "Millions of UK residents struggle to access food",
      description: "This is test description"
    }
  };

  const matchObj = {
    folderLink:
      "https://github.com/researchdata-sheffield/dataviz-hub2/tree/development/content/visualisation/2021-07-22-Millions-of-UK-residents-struggle-to-access-food/",
    masterFolderLink:
      "https://github.com/researchdata-sheffield/dataviz-hub2/tree/master/content/visualisation/2021-07-22-Millions-of-UK-residents-struggle-to-access-food/",
    githubLink:
      "https://github.com/researchdata-sheffield/dataviz-hub2/tree/development/content/visualisation/2021-07-22-Millions-of-UK-residents-struggle-to-access-food/index.mdx",
    shareLink:
      "https://dataviz.shef.ac.uk/visualisation/22/07/2021/Millions-of-UK-residents-struggle-to-access-food",
    shareMessage:
      "Millions of UK residents struggle to access food - This is test description"
  };

  const matchObjBlog = {
    folderLink:
      "https://github.com/researchdata-sheffield/dataviz-hub2/tree/development/content/blog/2021-07-22-Millions-of-UK-residents-struggle-to-access-food/",
    masterFolderLink:
      "https://github.com/researchdata-sheffield/dataviz-hub2/tree/master/content/blog/2021-07-22-Millions-of-UK-residents-struggle-to-access-food/",
    githubLink:
      "https://github.com/researchdata-sheffield/dataviz-hub2/tree/development/content/blog/2021-07-22-Millions-of-UK-residents-struggle-to-access-food/index.mdx",
    shareLink:
      "https://dataviz.shef.ac.uk/blog/22/07/2021/Millions-of-UK-residents-struggle-to-access-food",
    shareMessage:
      "Millions of UK residents struggle to access food - This is test description"
  };

  it("should return the correct object for visualisation type", () => {
    const result = getShareLinks(mdxObj);
    expect(result).toEqual(matchObj);
  });

  it("should return the correct object for blog type", () => {
    const result = getShareLinks(mdxObjBlog);
    expect(result).toEqual(matchObjBlog);
  });
});
