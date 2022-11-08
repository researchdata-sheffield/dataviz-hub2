import { graphql, useStaticQuery } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import moment from "moment-timezone/builds/moment-timezone-with-data";

/**
 * Calculate user local time based on their timezone
 * @param {String} sheffieldTime date/time to be parsed
 * @returns {Object} return timezone and time for the user
 */
export function calculateUserLocalTime(sheffieldTime, timezone = "") {
  moment.suppressDeprecationWarnings = true;

  // convert string to date
  if (typeof sheffieldTime == "string") {
    sheffieldTime = moment.tz(sheffieldTime, "Europe/London");
  }

  // handle daylight saving time
  if (sheffieldTime.isDST()) {
    sheffieldTime.subtract(1, "hours");
  }

  // get user's timezone and convert
  let userTimeZone =
    timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
  let userTime;

  if (userTimeZone == "Europe/London") {
    userTime = moment(sheffieldTime).format("ddd DD MMMM YYYY, hh:mm A");
  } else {
    userTime = moment
      .tz(sheffieldTime, userTimeZone)
      .format("ddd DD MMMM YYYY, hh:mm A");
  }

  return {
    time: userTime,
    timezone: userTimeZone
  };
}

/**
 * Provide a random thumbnail if not provided
 * @param {object} node the node to be query on
 * @param {boolean} source whether to return an absolute path of the image
 * @returns {object / string} an object contains image urls or an absolute path to the image
 */
export function getImageSource(node, source = false) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
  `);
  let imagesrc;
  if (
    node.frontmatter &&
    node.frontmatter.thumbnail &&
    node.frontmatter.thumbnail.childImageSharp
  ) {
    imagesrc = node.frontmatter.thumbnail.childImageSharp.gatsbyImageData;
  } else {
    let imageArray = Object.values(imageData);
    // choose a random image from the result
    let imageToUse = imageArray[randomInteger(imageArray.length)];
    imagesrc = imageToUse.childImageSharp.gatsbyImageData;
  }

  if (source === true) {
    return getSrc(imagesrc);
  }
  return imagesrc;
}

export function randomInteger(max) {
  const MAX = max ?? 100;

  return Math.floor(Math.random() * MAX);
}

/**
 * For a given number, if it is smaller than the minimum, return minimum
 * If it is greater than the maximum, return maximum
 * @param {number} num
 * @param {number} min
 * @param {number} max
 * @returns
 */
export function getNumberWithinRange(num, min, max) {
  const MIN = min || 1;
  const MAX = max || 5;
  const NUM = parseFloat(num).toFixed(1);
  return Math.min(Math.max(NUM, MIN), MAX);
}

/**
 * Generate share link, share message, and github link for MDX nodes
 * @param {*} mdx
 * @returns {object}
 *
 */
export function getShareLinks(mdx) {
  const folderName = mdx.fields.slugOrigin;
  const type = mdx.frontmatter.type || "blog";

  const folderLink = `https://github.com/researchdata-sheffield/dataviz-hub2/tree/development/content/${type}${folderName}`;
  const githubLink = `${folderLink}index.mdx`;
  const shareLink = `https://dataviz.shef.ac.uk${mdx.fields.slug}`;
  const shareMessage = `${mdx.frontmatter.title} - ${mdx.frontmatter.description}`;

  return {
    folderLink: folderLink,
    masterFolderLink: folderLink.replace(
      "dataviz-hub2/tree/development",
      "dataviz-hub2/tree/master"
    ),
    githubLink: githubLink,
    shareLink: shareLink,
    shareMessage: shareMessage
  };
}

/**
 * Return shorten text with specified number of words
 * @param {String} text
 * @param {Integer} numOfWords number of words to be retained
 * @returns {String} new shorten text
 */
export function shortenText(text, numOfWords) {
  if (!text) {
    return "";
  }

  let newText = text.split(" ").splice(0, numOfWords);

  if (newText.length < numOfWords) {
    return newText.join(" ");
  }

  return newText.join(" ").concat(" ...");
}

/**
 * Check if current string is a URL
 * @param {string} myString
 * @returns {boolean}
 */
export function checkURL(myString) {
  if (myString.length == 0) {
    return false;
  }

  return myString.includes("https://") || myString.includes("http://");
}
