import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Twitter, Facebook, Mail, Linkedin } from "react-social-sharing";
import { RiEditBoxLine } from "react-icons/ri";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { ShareButton } from "../../components/style/visStyle";
import VisDownload from "./visDownload";
import VisEmbed from "./visEmbed";

const visPagination = (props) => {
  const { mdx, className, style } = props;
  const { githubLink, shareLink, shareMessage } = mdx.shareLinks;
  const { prev, next } = mdx.pageContext;
  const buttonStyle =
    "py-2 px-2 bg-gray-800 hover:bg-brand-blue text-white hover:text-brand-black font-semibold text-sm rounded-md transition duration-300";

  return (
    <div
      className={`${className} flex flex-wrap justify-between mt-2 space-y-3 mx-auto items-center relative z-10`}
      style={{ ...(style || []), maxWidth: "550px" }}
    >
      {/* Previous visualisation */}
      <Link
        to={prev ? prev.node.fields.slug : ``}
        className={`${prev ? "" : "pointer-events-none"} mt-3`}
        aria-label="Previous visualisation"
      >
        <button
          className={`${
            prev ? "" : "cursor-not-allowed text-gray-700"
          } ${buttonStyle}`}
        >
          <MdKeyboardArrowLeft className="inline-block font-bold" /> Prev
        </button>
      </Link>

      {/* Buttons */}
      <ShareButton
        className={`flex flex-wrap text-sm justify-center items-center space-x-1 space-y-1`}
      >
        <Twitter
          className="greyScale-100 hover:greyScale-0 mt-1 ml-0"
          solid
          small
          message={shareMessage}
          link={shareLink}
        />
        <Facebook
          className="greyScale-100 hover:greyScale-0"
          solid
          small
          link={shareLink}
        />
        <Mail
          className="hover:bg-red-600"
          solid
          small
          subject={shareMessage}
          link={shareLink}
        />
        <Linkedin
          className="greyScale-100 hover:greyScale-0"
          solid
          small
          message={shareMessage}
          link={shareLink}
        />
        <a
          className="text-3xl"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Edit this page on GitHub"
          aria-label="Edit on GitHub"
        >
          <div className="py-1 px-2 bg-black hover:bg-brand-blue text-white flex justify-center rounded-md text-xl cursor-pointer">
            <RiEditBoxLine />
          </div>
        </a>
        <VisDownload mdx={mdx} />
        <VisEmbed {...props} />
      </ShareButton>

      {/* Next visualisation */}
      <Link
        to={next ? next.node.fields.slug : ``}
        className={`${next ? "" : "pointer-events-none"}`}
        aria-label="Next visualisation"
      >
        <button
          className={`${
            next ? "" : "cursor-not-allowed text-gray-700"
          } ${buttonStyle}`}
        >
          Next <MdKeyboardArrowRight className="inline-block font-bold" />
        </button>
      </Link>
    </div>
  );
};

export default visPagination;

visPagination.propTypes = {
  props: PropTypes.any,
  mdx: PropTypes.any
};
