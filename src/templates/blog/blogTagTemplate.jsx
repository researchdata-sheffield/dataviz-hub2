import React, { useState } from "react";
import { graphql } from "gatsby";
import MenuCategory from "../../components/blog/menuCategory";
import PropTypes from "prop-types";
import BlogLayout from "../../components/blog/blogLayout";
import SEO from "../../components/shared/seo";
import kebabCase from "lodash.kebabcase";
import Bg from "../../images/blog/colorful-world.jpg";

const BlogTagTemplate = ({ data: { allMdx }, pageContext }) => {
  const [tagMenu, toggleTagMenu] = useState(false);

  function handleTagMenu() {
    toggleTagMenu(!tagMenu);

    if (screen.width <= 1280 && tagMenu === false) {
      let element = document.querySelector("#tagMenu");
      element.scrollIntoView();
    }
  }

  return (
    <>
      <SEO
        title={`Blog - ${pageContext.tag}`}
        keywords={[
          "the university of sheffield",
          "data visualisation",
          "data visualisation hub",
          "research",
          pageContext.tag
        ]}
        description={`A list of blog posts at Dataviz.Shef with the tag - ${pageContext.tag}.`}
      />
      <div
        className="flex flex-wrap content-center justify-center bg-gray-900 text-center shadow-2xl relative z-10 w-full"
        style={{
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.70), rgba(255, 255, 255, 0.70)), url(${Bg})`,
          minHeight: "400px"
        }}
      >
        <div className="text-gray-900 w-full">
          <h1 className="text-4xl">Tag: {pageContext.tag}</h1>
          {/* <p className="text-sm md:max-w-35">&ldquo;The greatest value of a picture is when it forces us to notice what we never expected to see.&rdquo; - John W. Tukey</p> */}
        </div>
        <MenuCategory
          pageContext={pageContext}
          handleTagMenu={handleTagMenu}
          tagMenu={tagMenu}
        />
      </div>

      <BlogLayout
        allMdx={allMdx}
        pageContext={pageContext}
        pageType={`/blog/tag/${kebabCase(pageContext.tag)}`}
        handleTagMenu={handleTagMenu}
        tagMenu={tagMenu}
      />
    </>
  );
};

export default BlogTagTemplate;

BlogTagTemplate.propTypes = {
  pageContext: PropTypes.any,
  data: PropTypes.any
};

export const query = graphql`
  query blogTag($tag: String, $skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { tag: { in: [$tag] }, published: { ne: false } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            ...MdxFrontmatter
          }
          fields {
            ...MdxFields
          }
        }
      }
    }
  }
`;
