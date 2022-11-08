import * as htmlToImage from "html-to-image";
import kebabCase from "lodash.kebabcase";
import { checkURL } from "../../utils/shared";

/**
 * Solution for nested function within a mocked function
 * https://github.com/facebook/jest/issues/936
 *
 * Require() make an object reference to the module, and when
 * you mock a function A() this will overwrite the reference object.
 *
 * When you call A() and it has a nested function B() in the same module,
 * the actual function will be called rather the one in the reference,
 * Even if B() is also mocked.
 *
 * To solve this issue, use current file
 */
import * as thisFile from "./utils";

/**
 * Handle image download for current visualisation
 * @param {object} targetVis the target visualisation as a HTML object
 * @param {object} mdx current mdx object
 * @param {string} pngImagePath path of the saved png image (if any)
 * @param {string} svgImagePath path of the saved svg image (if any)
 * @param {string} type which type of image to download
 * @returns {void}
 */
export const handleImageDownload = (
  targetVis,
  mdx,
  pngImagePath = "",
  svgImagePath = "",
  type = "png"
) => {
  if (type == "png") {
    return thisFile.downloadAsPng(targetVis, mdx, pngImagePath);
  }
  return thisFile.downloadAsSvg(targetVis, mdx, svgImagePath);
};

/**
 * Download svg image for current visualisation
 * @param {object} visElement the target visualisation as a HTML object
 * @param {object} mdxObject current mdx object
 * @param {string} svgPath  path of the saved svg image (if any)
 * @returns {void}
 */

export const downloadAsSvg = (visElement, mdxObject, svgPath = "") => {
  if (svgPath) {
    const link = checkURL(svgPath)
      ? svgPath
      : `${mdxObject.folderLink}${svgPath}`;
    window.open(link, "_blank", "noopener,noreferrer");
    return;
  }

  htmlToImage
    .toSvg(visElement)
    .then((dataURL) => {
      let image = new Image();
      image.src = dataURL;
      return createLinkForImage(
        `${kebabCase(mdxObject.frontmatter.title)}.svg`,
        dataURL
      );
    })
    .catch((error) => {
      window.alert("Oops, something went wrong!", error.toString());
    });
};

/**
 * Download png image for current visualisation
 * @param {object} visElement the target visualisation as a HTML object
 * @param {object} mdxObject current mdx object
 * @param {string} pngPath  path of the saved png image (if any)
 * @returns {void}
 */
export const downloadAsPng = (visElement, mdxObject, pngPath = "") => {
  if (pngPath) {
    const link = checkURL(pngPath)
      ? pngPath
      : `${mdxObject.folderLink}${pngPath}`;
    window.open(link, "_blank", "noopener,noreferrer");
    return;
  }

  htmlToImage
    .toPng(visElement, {
      quality: 1,
      pixelRatio: 4
    })
    .then((dataURL) => {
      return createLinkForImage(
        `${kebabCase(mdxObject.frontmatter.title)}.png`,
        dataURL
      );
    })
    .catch((error) => {
      window.alert("Oops, something went wrong!", error.toString());
    });
};

/**
 * Create link for image url and perform the click action
 * @param {string} fileName name for the download file
 * @param {string} imageURL url of the image to download
 */
export const createLinkForImage = (fileName, imageURL) => {
  let link = document.createElement("a");
  link.download = fileName;
  link.href = imageURL;
  link.click();
};
