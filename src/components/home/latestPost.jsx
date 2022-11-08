import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import kebabCase from "lodash.kebabcase";
import { MdFiberNew } from "react-icons/md";
import Fade from "react-reveal/Fade";
import { CatBtn, TagBtn, ArrowButton } from "../style/styleComponent";
import { getImageSource, shortenText } from "../../utils/shared";
import { GatsbyImage } from "gatsby-plugin-image";

const latestPost = ({ post }) => {
  let count = 0;

  return (
    <>
      <div
        className="w-full flex flex-wrap"
        style={{
          background:
            "linear-gradient(0deg, rgb(255, 121, 180) 10%, rgb(41, 197, 255) 100%)"
        }}
      >
        {post.edges.map(({ node }) => {
          // exclude first two featured posts
          if (node.frontmatter.featured === true) {
            count = count + 1;
            if (count <= 2) return;
          }

          let imagesrc = getImageSource(node);
          let description = shortenText(node.frontmatter?.description, 40);
          let postDate = node.frontmatter.date;

          postDate = postDate.substring(0, 6);

          return (
            <div
              key={node.id}
              className="group w-full relative z-10 border-t-1 border-transparent first:border-brand-black"
              tabIndex="0"
            >
              <Fade key={node.id} duration={1000} fraction={0.1}>
                <div className="w-full bg-brand-black hover:bg-transparent text-white 2xl:text-xl">
                  <Link
                    to={node.fields.slug}
                    className="flex flex-wrap flex-col md:flex-row justify-between w-full text-gray-500 hover:text-white px-5 lg:px-12 py-4"
                  >
                    <div className="flex flex-wrap items-center md:w-2/5 lg:w-3/12">
                      <MdFiberNew className="text-red-700 lg:text-white group-hover:text-red-700 text-3xl mr-1" />
                      {node.frontmatter.category.map((cat) => (
                        <CatBtn
                          key={cat}
                          to={`/blog/category/${kebabCase(cat)}`}
                          className="rounded-full py-0 my-0 mx-1 border-none bg-white text-black hover:bg-gray-200 font-semibold invisible group-hover:visible"
                        >
                          {cat}
                        </CatBtn>
                      ))}
                    </div>
                    <div className="md:w-3/5 lg:w-9/12 flex justify-between">
                      <div className="inline-block font-semibold">
                        {node.frontmatter.title}
                      </div>
                      <div className="inline-block font-semibold">
                        {postDate}
                      </div>
                    </div>
                  </Link>
                </div>
              </Fade>

              {/* On hover, show details on the left */}
              <div
                className="bg-white hidden xl:block fixed left-0 top-0 opacity-0 group-focus:opacity-100 group-hover:opacity-100 -translate-x-110% group-hover:translate-x-0 transition duration-500 shadow-xl"
                style={{ width: "33.333333%" }}
              >
                <div className="min-h-50 max-h-50 w-full overflow-hidden">
                  <GatsbyImage
                    image={imagesrc}
                    alt={"Image for " + node.frontmatter.title}
                  />
                </div>
                <div className="flex flex-col bg-white min-h-50 py-6 px-8">
                  <p className="text-sm text-gray-500 font-normal 2xl:text-lg">
                    {node.frontmatter.author.map((author, idx) =>
                      node.frontmatter.author.length == idx + 1
                        ? author.name
                        : author.name + " · "
                    )}{" "}
                    &nbsp; | &nbsp; {node.fields.readingTime.text}
                  </p>
                  <p className="mt-2 text-gray-500">
                    {node.frontmatter.tag.map((tag, i) => {
                      return (
                        i < 3 && (
                          <TagBtn
                            className="text-xs py-0 mr-1 my-0"
                            key={tag}
                            to={`/blog/tag/${kebabCase(tag)}`}
                          >
                            {tag}
                          </TagBtn>
                        )
                      );
                    })}
                    {node.frontmatter.tag.length > 3 && (
                      <TagBtn
                        className="text-xs py-0 mx-1 my-0"
                        to={node.fields.slug}
                      >
                        +{node.frontmatter.tag.length - 3} more
                      </TagBtn>
                    )}
                  </p>
                  <p className="mt-4 2xl:text-2xl text-black">{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="flex flex-wrap w-full bg-brand-black py-10 px-3 justify-center items-center self-center z-10"
        style={{ transition: ".3s ease" }}
      >
        <div className="text-white mr-10">
          Discover more articles and tutorials at our blog.
        </div>
        <Link to="/blog">
          <ArrowButton
            type="AnimateButton"
            className="group py-2 px-4 mt-6 md:mt-0 text-sm bg-white text-black hover:text-white"
            hoverBC="#000"
            link
            title="read more on blog"
          >
            Read more
          </ArrowButton>
        </Link>
      </div>
    </>
  );
};

export default latestPost;

latestPost.propTypes = {
  post: PropTypes.any
};
