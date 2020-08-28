"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldUpdateScroll = exports.onRouteUpdate = exports.onServiceWorkerUpdateReady = exports.onClientEntry = void 0;

require("tailwindcss/dist/base.css");

require("gitalk/dist/gitalk.css");

require("./src/css/index.css");

require("./src/css/style.scss");

require("./src/css/post.scss");

require("./src/css/animation.scss");

require("./src/css/gitalk.scss");

require("./src/css/accordion.scss");

require("./src/css/d3js.scss");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var onClientEntry = function onClientEntry() {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!("IntersectionObserver" in window)) {
    Promise.resolve().then(function () {
      return _interopRequireWildcard(require("intersection-observer"));
    });
    console.log("# IntersectionObserver is polyfilled!");
  }
}; // Disable default scroll-to-top
// export const shouldUpdateScroll = () => {
//   return false;
// };


exports.onClientEntry = onClientEntry;

var onServiceWorkerUpdateReady = function onServiceWorkerUpdateReady() {
  var answer = window.confirm("Dataviz.Shef has been updated. " + "Reload to display the latest version?");

  if (answer === true) {
    window.location.reload();
  }
};

exports.onServiceWorkerUpdateReady = onServiceWorkerUpdateReady;

require("./src/css/prism-custom.scss");

require("prismjs/plugins/line-numbers/prism-line-numbers.css");

var onRouteUpdate = function onRouteUpdate(window) {
  if (window.location.hash) {
    // fix for id starting with numbers
    var hash = window.location.hash.replace(/^#(\d)/, '#\\3$1');
    setTimeout(function () {
      document.querySelector("".concat(hash)).scrollIntoView();
    }, 700);
  }
};

exports.onRouteUpdate = onRouteUpdate;

var shouldUpdateScroll = function shouldUpdateScroll(_ref) {
  var location = _ref.routerProps.location;

  //console.log(location)
  //const currentPosition = getSavedScrollPosition(location)
  // console.log(currentPosition)
  // window.scrollTo(...(currentPosition || [0, 0]))
  if (location.hash) {
    setTimeout(function () {
      document.querySelector("".concat(location.hash)).scrollIntoView();
    }, 10);
  }
};

exports.shouldUpdateScroll = shouldUpdateScroll;