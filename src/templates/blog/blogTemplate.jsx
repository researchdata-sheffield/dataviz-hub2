import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import BlogLayout from "../../components/blog/blogLayout";
import MenuCategory from "../../components/blog/menuCategory";
import PropTypes from "prop-types";
import SEO from "../../components/shared/seo";
import Flip from "react-reveal/Flip";
import { GreyButton } from "../../components/style/styleComponent";
import Bg from "../../images/blog/colorful-world.jpg";
import { useBackgroundMovement } from "../../utils/hooks/backgroundMovement";

const BlogTemplate = ({ data: { allMdx }, pageContext }) => {
  const [tagMenu, toggleTagMenu] = useState(false);

  function handleTagMenu() {
    toggleTagMenu(!tagMenu);

    if (screen.width <= 1280 && tagMenu === false) {
      let element = document.querySelector("#tagMenu");
      element.scrollIntoView();
    }
  }

  useBackgroundMovement("blogBackground");

  return (
    <>
      <SEO
        title="Blog"
        keywords={[
          "the university of sheffield",
          "data visualisation",
          "data visualisation hub",
          "research",
          "Blog"
        ]}
        description="Blog posts, tutorials, and articles at Dataviz.Shef."
      />
      {/* Height={`${pageContext.currentPage != 1 ? `50vh` : ``}`} */}
      <div
        className={`${
          pageContext.currentPage != 1 ? "min-h-60" : "min-h-100"
        } w-full overflow-hidden flex flex-col items-center justify-center text-center relative z-10`}
      >
        <div
          id="blogBackground"
          className="absolute top-0 left-0 w-full h-full scale-110"
          style={{
            background: `linear-gradient(0deg, rgba(255, 255, 255, 0.70), rgba(255, 255, 255, 0.70)), url(${Bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
          }}
        ></div>

        <Flip cascade top delay={700}>
          <div
            className="text-black"
            style={{ textShadow: "#fff 0px 0px 5px" }}
          >
            <h1 className="text-6xl font-extrabold">Blog</h1>
            <p
              className="text-md font-semibold mt-5 px-5"
              style={{ maxWidth: "500px" }}
            >
              &ldquo;The greatest value of a picture is when it forces us to
              notice what we never expected to see.&rdquo; - John W. Tukey
            </p>
          </div>
        </Flip>
        <Flip cascade top delay={700}>
          <div className={`${pageContext.currentPage !== 1 ? "hidden" : ""}`}>
            <MenuCategory
              pageContext={pageContext}
              handleTagMenu={handleTagMenu}
              tagMenu={tagMenu}
            />
            <div className="mt-10">
              <Link to="/blog#read">
                <GreyButton className="text-sm bg-gray-700 text-white hover:bg-black">
                  What&apos;s new?
                </GreyButton>
              </Link>
            </div>
          </div>
        </Flip>
      </div>

      {/* blog posts & tag menu */}
      <BlogLayout
        allMdx={allMdx}
        pageContext={pageContext}
        pageType={"/blog"}
        handleTagMenu={handleTagMenu}
        tagMenu={tagMenu}
      />
    </>
  );
};

export default BlogTemplate;

BlogTemplate.propTypes = {
  pageContext: PropTypes.any,
  data: PropTypes.any
};

export const query = graphql`
  query blogList($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { type: { eq: null }, published: { ne: false } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
