/**
 * Implement Gatsby's Browser APIs in this file.
 * This file is ONLY run on the client side
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "tailwindcss/base.css";
import "gitalk/dist/gitalk.css";
import "katex/dist/katex.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import "./src/css/index.scss";
import "./src/css/style.scss";
import "./src/css/post.scss";
import "./src/css/animation.scss";
import "./src/css/visualisation.scss";
import "./src/css/gitalk.scss";
import "./src/css/accordion.scss";
import "./src/css/d3js.scss";
import "./src/css/prism-custom.scss";
import "./src/css/react-tabs.scss";

/*
 * the Gatsby browser runtime first starts
 */
export const onClientEntry = () => {};

/**
 * when the initial (but not subsequent) render of Gatsby App is done on the client
 */
export const onInitialClientRender = () => {
  // Remove loading animation
  let element = document.querySelector("#__loader");
  element.style.transform = "translateY(-1000px)";
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.visibility = "hidden";
  }, 1000);
};

// Disable default scroll-to-top
// export const shouldUpdateScroll = () => {
//   return false;
// };

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Dataviz.Shef has been updated since your last visit, please refresh the page to get the latest version. You can also go to the /changelog page to see what's new!`
  );
  if (answer === true) {
    window.location.reload();
  }
};

export const onRouteUpdate = (window) => {
  if (window.location.hash) {
    // fix for id starting with numbers
    const hash = window.location.hash.replace(/^#(\d)/, "#\\3$1");

    setTimeout(() => {
      document.querySelector(`${hash}`).scrollIntoView();
    }, 300);
  }
};

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash) {
    setTimeout(() => {
      document.querySelector(`${location.hash}`).scrollIntoView();
    }, 500);
  }
};
