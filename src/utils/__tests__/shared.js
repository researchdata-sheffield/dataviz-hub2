import { shortenText, getImageSource, randomNumber, calculateUserLocalTime } from "../shared"

describe("ShortenText", () => {
  const text = "Build a community around interactive data visualisation at TUoS."

  it("shorten text with dots at the end", () => {
    expect(shortenText(text, 5)).toEqual("Build a community around interactive ...")
  })

  it("shorten text with full sentence", () => {
    expect(shortenText(text, 11)).toEqual(text)
  })
});


describe("getImageSource", () => {
  const node = {
    "frontmatter": {
      "thumbnail": {
        "childImageSharp": {
          "gatsbyImageData": {
            "layout": "constrained",
            "backgroundColor": "#f8f8f8",
            "images": {
              "fallback": {
                "src": "/static/fdb1e2f76e/e96af/Map_Output.png",
                "sizes": "(min-width: 1600px) 1600px, 100vw"
              },
              "sources": [
                {
                  "srcSet": "/static/fdb1e2f76e/e96af/Map_Output.webp 1600w",
                  "type": "image/webp",
                  "sizes": "(min-width: 1600px) 1600px, 100vw"
                }
              ]
            },
            "width": 1600,
            "height": 772
          }
        }
      }
    }
  };
  const match = {
    "layout": "constrained",
    "backgroundColor": "#f8f8f8",
    "images": {
      "fallback": {
        "src": "/static/fdb1e2f76e/e96af/Map_Output.png",
        "sizes": "(min-width: 1600px) 1600px, 100vw"
      },
      "sources": [
        {
          "srcSet": "/static/fdb1e2f76e/e96af/Map_Output.webp 1600w",
          "type": "image/webp",
          "sizes": "(min-width: 1600px) 1600px, 100vw"
        }
      ]
    },
    "width": 1600,
    "height": 772
  }

  it("return image data object", () => {
    expect(getImageSource(node)).toMatchObject(match);
  })

  it("return image source", () => {
    expect(getImageSource(node, true)).toEqual("/static/fdb1e2f76e/e96af/Map_Output.png");
  })
});



var nodeCrypto = require('crypto');
global.crypto = {
    getRandomValues: function(buffer) { 
      return nodeCrypto.randomFillSync(buffer)
    }
};

describe("Random number generator - defined window", () => {
  it("returns a non-zero value", () => {
    expect(randomNumber()).not.toBe(0)
  })

})

describe("Random number generator - undefined window", () => {
  beforeEach(() => {
    delete global.window;
  });

  it("returns zero", () => {
    expect(randomNumber()).toBe(0);
  })
})


describe("Calculate user's local time", () => {
  beforeEach(() => {
    const moment = require('moment-timezone');
  })

  it("returns the same date and time", () => {
    jest.doMock('moment', () => {
      moment.tz.setDefault('Europe/London');
      return moment;
    });
    expect(calculateUserLocalTime("2021-05-17 01:00 PM"))
      .toEqual({
        time: "Mon 17 May 2021, 01:00 PM",
        timezone: "Europe/London"
      })
  });

  it("returns the date and time in China", () => {
    jest.doMock('moment', () => {
      moment.tz.setDefault('Asia/Shanghai');
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
      },
    ]

    expect(calculateUserLocalTime("2021-05-17 01:00 PM", "Asia/Shanghai")).toMatchOneObject(objArr);
  });

  expect.extend({
    toMatchOneObject(received, objectsArray) {
      let pass = JSON.stringify(objectsArray).includes(JSON.stringify(received));
      
      if (pass) {
        return {
          message: () =>
            `expected the object to be in the object array`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `the object is NOT in the object array`,
          pass: false,
        };
      }
    }
  });
})