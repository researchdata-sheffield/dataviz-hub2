import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as htmlToImage from 'html-to-image';
import kebabCase from "lodash.kebabcase"
import { FiDownload } from "react-icons/fi"
import { MdCancel, MdError } from "react-icons/md"
import { checkURL } from "../../utils/shared"

/**
 * Render visualisation pagination component
 * Download visualisation as image strategy:
 * 1. Check if frontmatter contains path from pngImagePath / svgImagePath
 *  2a. YES => download image from the path
 *  2b. NO => check if frontmatter contains external path from pngExternalImagePath / svgExternalImagePath
 *    3a. YES => download image from the path
 *    3b. NO => check if current page has a element with id "visualisation"
 *      4a. YES => capture html as image and download (Recommend Chrome as svg generated in Firefox doesn't work in Chrome)
*       4b. No => Hide/disable download button
 */
const visDownload = ({ mdx }) => {
  const [menu, setMenu] = useState(false);
  const [targetVis, setTargetVis] = useState('');
  const pngImagePath = mdx.frontmatter?.pngImagePath?.relativePath || mdx.frontmatter?.pngExternalImagePath || '';
  const svgImagePath = mdx.frontmatter?.svgImagePath?.relativePath || mdx.frontmatter?.svgExternalImagePath || '';
  const folderLink = "https://raw.githubusercontent.com/researchdata-sheffield/dataviz-hub2/master/content/visualisation/";
  mdx.folderLink = folderLink;

  useEffect(() => {
    if (typeof window != "undefined") {
      setTargetVis(document.getElementById('visualisation') || '');
    }
  }, [mdx])

  return (
    <div className="relative text-3xl">
      <button 
        className="py-1 px-2 text-white bg-black hover:bg-white hover:text-black flex justify-center rounded-md text-xl cursor-pointer" 
        title="Download as an image"
        onClick={() => setMenu(!menu)}
      ><FiDownload /></button>
      
      {/* Pop-up window */}
      <div 
        className={`${menu ? 'z-20' : 'hidden z-0'} fixed rounded-lg py-5 px-6 bg-gray-700 text-white text-base text-left`} 
        style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)', maxWidth: '350px', boxShadow: '0 5px 30px -5px #00aeef'}}
      >
        <h4 className="text-gray-300">Download this visualisation in one of the following format:</h4>
        <div className="w-full flex justify-evenly mt-3 space-x-1">
        {/* PNG button */}
          <button 
            title="Download as PNG"
            onClick={() => handleImageDownload(targetVis, mdx, pngImagePath, svgImagePath, "png")} 
            disabled={!pngImagePath && !targetVis}
            className={`${!pngImagePath && !targetVis ? 'cursor-not-allowed text-sm bg-gray-900 text-gray-500' : 'hover:bg-brand-pink'} p-4 rounded-full`}
          >
            PNG {!pngImagePath && !targetVis && "unavailable"}
          </button>
          {/* SVG button */}
          <button 
            title={`Download as SVG ${!svgImagePath && targetVis ? "\nThis will be generated by a package and we recommend to use Chrome.\nKnown issue: some SVG generated by Firefox lose styles." : ''}`}
            onClick={() => handleImageDownload(targetVis, mdx, pngImagePath, svgImagePath, "svg")} 
            disabled={!svgImagePath && !targetVis}
            className={`${!svgImagePath && !targetVis ? 'cursor-not-allowed text-sm bg-gray-900 text-gray-500' : 'hover:bg-brand-pink'} relative p-4 rounded-full`} 
          >
            SVG {!svgImagePath && !targetVis && "unavailable"}
            
            {!svgImagePath && targetVis &&
              <MdError className="text-red-500 rounded-full bg-white absolute top-0 right-0 text-lg" />
            }
          </button>
        </div>
        {/* cancel button */}
        <button onClick={() => setMenu(!menu)} className="text-gray-100 hover:text-brand-pink rounded-md transition duration-300 text-2xl p-1 absolute top-0 right-0 flex items-center">
          <MdCancel />
        </button>
      </div>
    </div>
  )
}

visDownload.propTypes = {
  mdx: PropTypes.any,
}

export default visDownload



/**
 * Handle image download for current visualisation
 * @param {object} targetVis the target visualisation as a HTML object 
 * @param {object} mdx current mdx object
 * @param {string} pngImagePath path of the saved png image (if any)
 * @param {string} svgImagePath path of the saved svg image (if any)
 * @param {string} type which type of image to download
 * @returns {void}
 */
export function handleImageDownload(targetVis, mdx, pngImagePath, svgImagePath, type = "png") {
  if (type == "png") {
    downloadAsPng(targetVis, mdx, pngImagePath);
    return;
  }
  downloadAsSvg(targetVis, mdx, svgImagePath);
}

/**
 * Download svg image for current visualisation
 * @param {object} visElement the target visualisation as a HTML object 
 * @param {object} mdxObject current mdx object
 * @param {string} svgPath  path of the saved svg image (if any)
 * @returns {void}
 */
export function downloadAsSvg(visElement, mdxObject, svgPath = '') {
  if (svgPath) {
    const link = checkURL(svgPath) ? svgPath : `${mdxObject.folderLink}${svgPath}`;
    window.open(link, '_blank', 'noopener,noreferrer');
    return;
  }

  htmlToImage.toSvg(visElement)
  .then((dataURL) => {
    var image = new Image();
    image.src = dataURL;
    createLinkForImage(`${kebabCase(mdxObject.frontmatter.title)}.svg`, dataURL);
  })
  .catch((error) => {
    window.alert('Oops, something went wrong!', error.toString());
  });
}


/**
 * Download png image for current visualisation
 * @param {object} visElement the target visualisation as a HTML object 
 * @param {object} mdxObject current mdx object
 * @param {string} pngPath  path of the saved png image (if any)
 * @returns {void}
 */
export function downloadAsPng(visElement, mdxObject, pngPath = '') {
  if (pngPath) {
    const link = checkURL(pngPath) ? pngPath : `${mdxObject.folderLink}${pngPath}`;
    window.open(link, '_blank', 'noopener,noreferrer');
    return;
  }

  htmlToImage.toPng(visElement, {
    quality: 1,
    pixelRatio: 4,
  })
  .then((dataURL) => {
    createLinkForImage(`${kebabCase(mdxObject.frontmatter.title)}.png`, dataURL);
  })
  .catch((error) => {
    window.alert('Oops, something went wrong!', error.toString());
  });
}

/**
 * Create link for image url and perform the click action
 * @param {string} fileName name for the download file 
 * @param {string} imageURL url of the image to download
 */
export function createLinkForImage(fileName, imageURL) {
  let link = document.createElement('a');
  link.download = fileName;
  link.href = imageURL;
  link.click();
}
