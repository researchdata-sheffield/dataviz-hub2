import { graphql, useStaticQuery } from "gatsby"
import { getSrc } from "gatsby-plugin-image"



/**
 * 
 * @param {String} text 
 * @param {Integer} length 
 * @returns 
 */
export function shortenText(text, length) {
  let newText = text ? text.split(" ").splice(0, length) : ""
  if (newText.length < length) {
    newText = newText.join(" ")
  } else {
    newText = newText.join(" ").concat(" ...")
  }
  return newText
}


// Assign thumbnail if not provided
export function getImageSource(node, source = false) {
  var imagesrc;
  if (node.frontmatter && node.frontmatter.thumbnail && node.frontmatter.thumbnail.childImageSharp) {
    imagesrc = node.frontmatter.thumbnail.childImageSharp.gatsbyImageData;
  } else {
    const imageData = useStaticQuery(graphql`
      query getImageFiles {
        image1: file(relativePath: { eq: "blog/no_image_1.jpg" }) {
          ...ImageSharp
        }
        image2: file(relativePath: { eq: "blog/no_image_2.png" }) {
          ...ImageSharp
        }
        image3: file(relativePath: { eq: "blog/no_image_3.png" }) {
          ...ImageSharp
        }
        image4: file(relativePath: { eq: "blog/no_image_4.png" }) {
          ...ImageSharp
        }
        image5: file(relativePath: { eq: "blog/no_image_5.png" }) {
          ...ImageSharp
        }
      }
    `)

    var imageArray = Object.values(imageData)
    // choose a random image from the result
    let imageToUse = imageArray[Math.floor(randomNumber() * imageArray.length)]
    imagesrc = imageToUse.childImageSharp.gatsbyImageData;
  }

  if(source === true) {
    return getSrc(imagesrc);
  }
  return imagesrc
}

/**
 * Generate cryptographically strong random value between 0 and 1
 */
export function randomNumber() {
  if (typeof window !== 'undefined') {
    return window.crypto.getRandomValues(new Uint16Array(1))[0] / 2**16;
  }
  return 0;
}