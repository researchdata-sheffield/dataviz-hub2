import { shortenText, getImageSource, randomNumber } from "../shared"

describe("ShortenText", () => {
  const text = "Build a community around interactive data visualisation at TUoS."

  test("Shorten text with dots at the end", () => {
    expect(shortenText(text, 5)).toEqual("Build a community around interactive ...")
  })

  test("Shorten text with full sentence", () => {
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

  test("return image data", () => {
    expect(getImageSource(node)).toMatchObject(match);
  })

  test("return image source", () => {
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
  test("Check return value is non-zero", () => {
    expect(randomNumber()).not.toBe(0)
  })

})

describe("Random number generator - undefined window", () => {
  beforeEach(() => {
    delete global.window;
  });

  test("Check return value is zero", () => {
    expect(randomNumber()).toBe(0);
  })
})