import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import kebabCase from "lodash.kebabcase";
import { FaStar } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { ArrowBox_featured, IMG, IMG_DIV } from "../style/styleComponent";
import { getImageSource, shortenText } from "../../utils/shared";

const featuredItem = ({ item }) => {
  if (item && item.edges) {
    return (
      <div className="w-full flex flex-wrap pb-6 bg-brand-black">
        {item.edges.map(({ node }) => {
          let imagesrc = getImageSource(node);
          let title = shortenText(node.frontmatter.title, 11);
          let description = node.frontmatter.description;

          return (
            <Fade key={node.id} duration={2000} fraction={0.3}>
              <div
                key={node.id}
                className="group w-full sm:w-1/2 min-h-80 lg:min-h-95 xl:min-h-100 pb-28 overflow-hidden relative leading-none bg-brand-black text-gray-300 grow"
                tabIndex="0"
              >
                <Link to={node.fields.slug}>
                  <div
                    className="flex top-0 left-0 absolute m-3 lg:m-5 text-white lg:bg-transparent lg:text-gray-300 group-hover:bg-brand-black items-center rounded-lg p-1"
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
                  <IMG_DIV
                    className="lg:greyScale-100 group-hover:greyScale-0 group-focus:greyScale-0 min-h-3/5 max-h-3/5"
                    style={{ minHeight: "420px" }}
                  >
                    <IMG image={imagesrc} alt={"Image for " + title} />
                  </IMG_DIV>
                  <ArrowBox_featured className="pt-6 px-8 text-gray-600">
                    <h1 className="mt-3 font-bold text-2xl 2xl:text-3xl leading-tight text-gray-200 group-hover:text-brand-blue overflow-y-hidden">
                      {title}
                    </h1>
                    <p className="my-2 text-sm 2xl:text-lg leading-tight group-hover:text-gray-100">
                      {description}
                    </p>
                    <p className="my-2 text-xs 2xl:text-base pt-2 group-hover:text-gray-100">
                      {node.frontmatter.author.map((author, idx) => {
                        return (
                          <span key={node.id + "_author"}>
                            {node.frontmatter.author.length == idx + 1
                              ? author.name
                              : author.name + " · "}
                          </span>
                        );
                      })}
                    </p>
                    <p className="my-2 text-xs 2xl:text-base text-gray-500 group-hover:text-gray-300">
                      {node.frontmatter.date} · {node.fields.readingTime.text}
                    </p>
                  </ArrowBox_featured>
                </Link>
                <div
                  className="px-8 lg:px-8 text-xs text-gray-500"
                  style={{ fontWeight: "400" }}
                >
                  {node.frontmatter.category &&
                    node.frontmatter.category.map((cat) => (
                      <span key={cat}>
                        <Link
                          className="font-semibold hover:underline text-gray-500"
                          key={cat}
                          to={`/blog/category/${kebabCase(cat)}`}
                        >
                          {cat}
                        </Link>
                        <> · </>
                      </span>
                    ))}

                  {node.frontmatter.tag &&
                    node.frontmatter.tag.map((tagItem, i) => {
                      return (
                        i < 3 && (
                          <span key={tagItem}>
                            <Link
                              className="text-gray-500 hover:underline"
                              to={`/blog/tag/${kebabCase(tagItem)}`}
                            >
                              {tagItem}
                            </Link>
                            {node.frontmatter.tag.length === i + 1
                              ? ""
                              : [i === 2 ? " " : " · "]}
                          </span>
                        )
                      );
                    })}
                  {node.frontmatter.tag && node.frontmatter.tag.length > 3 && (
                    <Link
                      className="text-gray-500 hover:underline"
                      to={node.fields.slug}
                    >
                      +{node.frontmatter.tag.length - 3} more
                    </Link>
                  )}
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    );
  }
};

export default featuredItem;

featuredItem.propTypes = {
  featuredItem: PropTypes.any
};
