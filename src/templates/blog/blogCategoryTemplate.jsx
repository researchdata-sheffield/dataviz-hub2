import React, { useState } from "react";
import kebabCase from "lodash.kebabcase";
import { graphql } from "gatsby";
import MenuCategory from "../../components/blog/menuCategory";
import BlogLayout from "../../components/blog/blogLayout";
import PropTypes from "prop-types";
import SEO from "../../components/shared/seo";
import Bg from "../../images/blog/colorful-world.jpg";

const BlogCategoryTemplate = ({ data: { allMdx }, pageContext }) => {
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
        title={`Blog - ${pageContext.category}`}
        keywords={[
          "the university of sheffield",
          "data visualisation",
          "data visualisation hub",
          "research",
          pageContext.category
        ]}
        description={`A list of blog posts at Dataviz.Shef with the category - ${pageContext.category}.`}
      />
      <div
        className="flex flex-wrap content-center justify-center text-center shadow-2xl bg-gray-900 relative z-10 w-full"
        style={{
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.70), rgba(255, 255, 255, 0.70)), url(${Bg})`,
          minHeight: "400px"
        }}
      >
        <div className="text-gray-900 w-full">
          <h1 className="text-4xl">{pageContext.category}</h1>
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
        pageType={`/blog/category/${kebabCase(pageContext.category)}`}
        handleTagMenu={handleTagMenu}
        tagMenu={tagMenu}
      />
    </>
  );
};

export default BlogCategoryTemplate;

BlogCategoryTemplate.propTypes = {
  pageContext: PropTypes.any,
  data: PropTypes.any
};

export const query = graphql`
  query blogCategory($category: String, $skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: { category: { in: [$category] }, published: { ne: false } }
      }
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
