import no_image_1 from "../images/blog/no_image_1.png"
import no_image_2 from "../images/blog/no_image_2.png"
import no_image_3 from "../images/blog/no_image_3.png"
import no_image_4 from "../images/blog/no_image_4.png"
import no_image_5 from "../images/blog/no_image_5.png"


export function shortenText(text, length) {
  let newText = text.split(" ").splice(0, length)
  if(newText.length < length){
    newText = newText.join(" ")
  } else {
    newText = newText.join(" ").concat(" ...")
  }
  return newText
}

// Assign thumbnail if not provided
export function getImageSource(node) {
  let imagesrc
  if(node.frontmatter && node.frontmatter.thumbnail && node.frontmatter.thumbnail.childImageSharp) {
    imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 
  } else {
    let image_set = [no_image_1, no_image_2, no_image_3, no_image_4, no_image_5]
    imagesrc = image_set[Math.floor(Math.random() * image_set.length)]
  }
  return imagesrc
}

