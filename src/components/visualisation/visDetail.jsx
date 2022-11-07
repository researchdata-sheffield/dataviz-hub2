import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactTooltip from "react-tooltip";
import { CatBtn, TagBtn } from "../../components/style/styleComponent";
import { kebabCase } from "lodash";

const visDetail = ({
  mdx,
  className,
  style,
  displayDescription,
  displayAuthor,
  displayTag
}) => {
  displayDescription = displayDescription ?? true;
  displayAuthor = displayAuthor ?? true;
  displayTag = displayTag ?? true;

  const authors = mdx.frontmatter.author;
  const categories = mdx.frontmatter.category ?? null;
  const tags = mdx.frontmatter.tag ?? null;

  return (
    <div
      className={`${className} flex flex-wrap justify-between mt-5 mx-auto items-center`}
      style={{ ...(style || []), maxWidth: "550px" }}
    >
      {displayDescription && (
        <p className="text-gray-300 text-base">{mdx.frontmatter.description}</p>
      )}
      <div className="mt-10 flex flex-wrap justify-center w-full">
        {/* authors */}
        {displayAuthor && (
          <>
            <div className="flex flex-wrap justify-center space-x-1 w-full">
              {authors.map((author) => (
                <>
                  <GatsbyImage
                    data-tip={author.name}
                    className="rounded-full shadow-xl mx-1 h-30px w-30px lg:h-40px lg:w-40px 2xl:h-50px 2xl:w-50px"
                    key={author.name}
                    image={author.avatar.childImageSharp.gatsbyImageData}
                    alt={author.name}
                  />
                  <ReactTooltip
                    className="text-gray-200 bg-gray-800"
                    place="top"
                    type="dark"
                    effect="float"
                  />
                </>
              ))}
            </div>
            <div className="w-full mt-2 text-center font-semibold text-gray-400">
              <h1 className="text-sm">
                {authors.map((author, idx) =>
                  authors.length == idx + 1 ? author.name : author.name + " · "
                )}
              </h1>
              <h1 className="text-xs mt-1">{mdx.frontmatter.date}</h1>
            </div>
          </>
        )}

        {/* cats & tags */}
        {displayTag && (
          <div className="w-full mt-10 text-xs flex flex-wrap gap-2">
            {categories &&
              categories.map((cat) => (
                <CatBtn
                  className="m-0 rounded-md"
                  key={cat}
                  to={`/visualisation/category/${kebabCase(cat)}`}
                >
                  {cat}
                </CatBtn>
              ))}
            {tags &&
              tags.map((currentTag) => (
                <TagBtn
                  className="m-0 rounded-md"
                  key={currentTag}
                  to={`/visualisation/tag/${kebabCase(currentTag)}`}
                >
                  {currentTag}
                </TagBtn>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default visDetail;

visDetail.propTypes = {
  mdx: PropTypes.any,
  style: PropTypes.string,
  className: PropTypes.string,
  displayDescription: PropTypes.bool,
  displayAuthor: PropTypes.bool,
  displayTag: PropTypes.bool
};
