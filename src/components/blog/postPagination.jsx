import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import kebabCase from "lodash.kebabcase";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { CatBtn, TagBtn } from "../style/styleComponent";
import { Twitter, Facebook, Mail, Linkedin } from "react-social-sharing";
import { RiEditBoxLine } from "react-icons/ri";
import RelatedPost from "./relatedPost";
import { shortenText } from "../../utils/shared";
import ReactTooltip from "react-tooltip";

class PostPagination extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mdx, shareLinks, prev, next } = this.props;
    const displayTags = this.props.displayTags ?? true;
    const displayPagination = this.props.displayPagination ?? true;
    const displayShareButtons = this.props.displayShareButtons ?? true;
    const { githubLink, shareLink, shareMessage } = shareLinks;

    let mdxType = mdx.frontmatter.type || "blog";

    let prevTitle = prev ? shortenText(prev.node.frontmatter.title, 6) : "";
    let nextTitle = next ? shortenText(next.node.frontmatter.title, 6) : "";

    let linkStyle =
      "flex items-center px-3 inline-block hover:bg-brand-blue text-brand-black";

    return (
      <div className="relative z-20" style={{ backgroundColor: "#fafafa" }}>
        <RelatedPost currentPost={mdx} type={mdxType} />

        {/* social media share buttons */}
        {displayShareButtons && (
          <div
            className={`flex flex-wrap text-sm justify-center w-full pt-5`}
            aria-label="Bottom share buttons"
          >
            <Twitter
              className="greyScale-100 hover:greyScale-0"
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
              data-tip=""
              data-for="share_editpost"
            >
              <div className="m-2 py-1 px-2 bg-black hover:bg-brand-blue text-white hover:text-brand-black flex justify-center rounded-md text-xl cursor-pointer">
                <RiEditBoxLine />
              </div>
            </a>
            <ReactTooltip id="share_editpost">
              Edit this page on GitHub
            </ReactTooltip>
          </div>
        )}

        {/* category and tags */}
        {displayTags && mdx.frontmatter.category && mdx.frontmatter.tag && (
          <div className="pt-5 flex flex-wrap text-gray-900 justify-center items-center content-center mx-auto text-sm">
            {mdx.frontmatter.category.map((cat) => (
              <CatBtn key={cat} to={`/blog/category/${kebabCase(cat)}`}>
                {cat}
              </CatBtn>
            ))}
            {mdx.frontmatter.tag.map((tag) => (
              <TagBtn key={tag} to={`/blog/tag/${kebabCase(tag)}`}>
                {tag}
              </TagBtn>
            ))}
          </div>
        )}

        {/* previous & next post */}
        {displayPagination && (
          <div className="flex justify-center py-8 px-3 mx-auto font-semibold text-sm">
            <Link
              value="prev"
              className={linkStyle + " justify-end"}
              to={prev && prev.node.fields.slug}
              aria-label="Previous post"
            >
              {prev && (
                <>
                  <TiArrowLeftThick className="mr-3 text-base" /> {prevTitle}
                </>
              )}
            </Link>
            <Link
              value="next"
              className={linkStyle}
              to={next && next.node.fields.slug}
              aria-label="Next post"
            >
              {next && (
                <>
                  {nextTitle} <TiArrowRightThick className="ml-3 text-base" />
                </>
              )}
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default PostPagination;

PostPagination.propTypes = {
  mdx: PropTypes.any,
  prev: PropTypes.any,
  next: PropTypes.any,
  shareLinks: PropTypes.any,
  displayPagination: PropTypes.bool,
  displayTags: PropTypes.bool,
  displayShareButtons: PropTypes.bool
};
