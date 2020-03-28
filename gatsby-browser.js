/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */


import "./src/css/style.css";
import "./src/css/prismjs.css";
import "./src/css/post.css";


export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

// Disable default scroll-to-top
export const shouldUpdateScroll = () => {
  return false;
};

export const onServiceWorkerUpdateReady = () => window.location.reload();

require("prismjs/themes/prism-okaidia.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")