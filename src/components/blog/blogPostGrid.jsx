import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import kebabCase from "lodash.kebabcase";
import { FaStar } from "react-icons/fa";
import Slide from "react-reveal/Slide";
import { ArrowBox, IMG, IMG_DIV } from "../style/styleComponent";
import { getImageSource, shortenText } from "../../utils/shared";

const blogPostGrid = ({ allMdx }) => {
  return (
    <div id="read" className="flex flex-wrap w-full">
      {allMdx.edges.map(({ node }) => {
        let imagesrc = getImageSource(node);
        let description = shortenText(node.frontmatter.description, 30);
        let title = node.frontmatter.title;
        let tag = node.frontmatter.tag;

        return (
          <Slide bottom key={node.id} duration={400} fraction={0.3}>
            <div
              key={node.id}
              className="w-full md:w-1/3 xl:w-1/4 min-h-90 xl:min-h-110 2xl:max-h-90 overflow-hidden bg-white relative pb-10 2xl:pb-0"
              alt={title}
            >
              <Link className="group" to={node.fields.slug}>
                {node.frontmatter.featured === true && (
                  <div
                    className="flex top-0 left-0 absolute m-3 lg:m-5 text-white bg-black lg:bg-transparent lg:text-gray-300 group-hover:bg-black items-center rounded-lg p-1"
                    style={{ zIndex: "3" }}
                  >
                    <FaStar className="text-yellow-300 text-2xl" />
                    <p
                      className="inline-block lg:opacity-0 group-hover:opacity-100 text-base font-semibold px-2"
                      style={{ fontFamily: "Source Serif Pro" }}
                    >
                      Featured
                    </p>
                  </div>
                )}
                <IMG_DIV className="lg:greyScale-100 group-hover:greyScale-0">
                  <IMG image={imagesrc} alt={"Image for " + title} />
                </IMG_DIV>
                <ArrowBox className="px-6 pt-6 2xl:px-8 2xl:pt-8 leading-none">
                  <div className="overflow-hidden fade-box">
                    <h1 className="font-extrabold xl:text-2xl 2xl:text-3xl leading-tight text-black group-hover:text-brand-purple overflow-y-hidden font-sans">
                      {title}
                    </h1>
                    <p className="my-3 text-base leading-tight group-hover:text-brand-purple text-gray-800">
                      {description}
                    </p>
                  </div>
                  <div
                    className="relative z-10 text-xs"
                    style={{ color: "#595959", fontWeight: "400" }}
                  >
                    <p className="mt-4 mb-1">
                      {node.frontmatter.date} · {node.fields.readingTime.text}
                    </p>
                  </div>
                </ArrowBox>
              </Link>
              <div
                className="px-6 2xl:px-8 text-xs"
                style={{ color: "#595959", fontWeight: "400" }}
              >
                {node.frontmatter.category.map((cat) => (
                  <>
                    <Link
                      key={cat}
                      className="font-semibold hover:underline"
                      to={`/blog/category/${kebabCase(cat)}`}
                    >
                      {cat}
                    </Link>
                    <> · </>
                  </>
                ))}
                {tag.map((tagItem, i) => {
                  return (
                    i < 3 && (
                      <>
                        <Link
                          key={tagItem}
                          className="hover:underline"
                          to={`/blog/tag/${kebabCase(tagItem)}`}
                        >
                          {tagItem}
                        </Link>
                        {tag.length === i + 1 ? "" : [i === 2 ? " " : " · "]}
                      </>
                    )
                  );
                })}
                {tag.length > 3 && (
                  <Link className="hover:underline" to={node.fields.slug}>
                    +{tag.length - 3} more
                  </Link>
                )}
              </div>
            </div>
          </Slide>
        );
      })}
    </div>
  );
};

export default blogPostGrid;

blogPostGrid.propTypes = {
  allMdx: PropTypes.any
};
