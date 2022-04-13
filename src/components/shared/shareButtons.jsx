import React from "react";
import PropTypes from "prop-types";
import { Twitter, Facebook, Mail, Linkedin } from "react-social-sharing";
import { RiEditBoxLine } from "react-icons/ri";
import ReactTooltip from "react-tooltip";
import Fade from "react-reveal/Fade";

/**
 * @param {Object} shareLinks an object contains all information for sharing
 * @param {boolean} tableOfContent either receive false or an object of tableOfContent for the MDX document
 * @param {function} renderItem a function which takes an item and returns HTML (how to display items)
 */
const shareButtons = ({ shareLinks, tableOfContent, renderItem }) => {
  const { githubLink, shareLink, shareMessage } = shareLinks;

  return (
    <>
      <div
        className="left-0 top-0 sticky hidden lg:block z-10"
        style={{ height: "max-content" }}
      >
        <Fade left cascade delay={1000} duration={1300}>
          <div
            className="mt-28 flex flex-col text-xs"
            style={{ maxWidth: "40px", height: "0", overflow: "visible" }}
            aria-label="Top share buttons"
          >
            <Twitter
              className="greyScale-100 hover:greyScale-0 transition duration-500"
              solid
              small
              message={shareMessage}
              link={shareLink}
            />
            <Facebook
              className="greyScale-100 hover:greyScale-0 transition duration-500"
              solid
              small
              link={shareLink}
            />
            <Mail
              className="hover:bg-red-600 transition duration-500"
              solid
              small
              subject={shareMessage}
              link={shareLink}
            />
            <Linkedin
              className="greyScale-100 hover:greyScale-0 transition duration-500"
              solid
              small
              message={shareMessage}
              link={shareLink}
            />
            <hr className="my-3" />
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              data-tip=""
              data-for="share_editpost_1"
              offset={{ top: 100, left: 100 }}
            >
              <div className="m-2 mt-1 bg-transparent text-black flex justify-center rounded-md text-xl transition duration-500">
                <RiEditBoxLine />
              </div>
            </a>

            <ReactTooltip id="share_editpost_1">
              Edit this page on GitHub
            </ReactTooltip>
          </div>
        </Fade>
      </div>

      {/* mobile: table of content & share buttons */}
      <div
        className="w-full shadow-md flex flex-wrap lg:hidden justify-center -mt-12 lg:mt-0"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div
          className={`${
            tableOfContent && Object.keys(tableOfContent).length === 0
              ? "flex-row"
              : "flex-col w-1/4"
          } flex text-sm justify-center items-center py-2`}
          style={{ maxWidth: "50px" }}
          aria-label="Top mobile share buttons"
        >
          <Twitter solid small message={shareMessage} link={shareLink} />
          <Facebook solid small link={shareLink} />
          <Mail
            solid
            small
            className="bg-red-600"
            subject={shareMessage}
            link={shareLink}
          />
          <Linkedin solid small message={shareMessage} link={shareLink} />
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <div className="m-2 py-1 px-2 bg-gray-800 hover:bg-brand-blue text-white flex justify-center rounded-md text-xl">
              <RiEditBoxLine />
            </div>
          </a>
        </div>
        <div
          className={` ${
            tableOfContent && tableOfContent.items ? "pt-8 pb-5" : "hidden"
          } ml-10 overflow-auto text-black lg:hidden px-2`}
        >
          {tableOfContent && tableOfContent.items && (
            <p className="font-bold mb-3 pb-2 border-b-1 border-gray-300">
              TABLE OF CONTENTS
            </p>
          )}
          {tableOfContent &&
            tableOfContent.items &&
            tableOfContent.items.map(renderItem)}
        </div>
      </div>
    </>
  );
};

export default shareButtons;

shareButtons.propTypes = {
  mdx: PropTypes.any
};
