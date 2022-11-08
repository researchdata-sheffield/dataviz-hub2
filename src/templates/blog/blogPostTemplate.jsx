// BASE
import React, { useEffect } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import SEO from "../../components/shared/seo";
import PostPagination from "../../components/blog/postPagination";
import { CatBtn, TagBtn } from "../../components/style/styleComponent";
import Comment from "../../components/blog/comment";
import ShareButtons from "../../components/shared/shareButtons";

// MDX component
import "katex/dist/katex.min.css";
import CommonMdxProvider from "../../components/shared/commonMdxProvider";

// Utils
import kebabCase from "lodash.kebabcase";
import { useScript } from "../../utils/hooks/useScript";
import { getShareLinks } from "../../utils/shared";
import { useTrackTableOfContent } from "../../utils/hooks/trackTableOfContent";

import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import trianglify from "trianglify";

const BlogPostTemplate = ({ data: { mdx }, pageContext }) => {
  const { title, date, author, category, tag, disableTOC } = mdx.frontmatter;
  const { prev, next } = pageContext;

  const shareLinks = getShareLinks(mdx);

  // include d3 scripts
  const d3 = mdx.frontmatter.d3 || null;
  useScript(d3);

  // enable/disable table of content
  let tableOfContent;
  if (disableTOC === true) {
    tableOfContent = null;
  } else {
    tableOfContent = mdx.tableOfContents;
  }
  useTrackTableOfContent(`.TOC li a`, `.mdxBody`);

  //Rendering table of content
  const renderItem = (item) => (
    <li key={item.title} className="pb-1 list-none">
      {/* Heading */}
      <a href={item.url} className="inline-block">
        <p>{item.title}</p>
      </a>
      {/* Sub-heading */}
      {item.items ? (
        <ul className="pl-3">{item.items.map(renderSubItem)}</ul>
      ) : (
        <></>
      )}
    </li>
  );
  const renderSubItem = (item) => (
    <li key={item.title} className="pt-1 list-none">
      {item.url ? <a href={item.url}> {item.title}</a> : <></>}
      {item.items ? (
        <ul className="pl-3">{item.items.map(renderSubItem)}</ul>
      ) : (
        <></>
      )}
    </li>
  );

  if (typeof window !== `undefined`) {
    //const list = document.querySelector('.gatsby-code-title')
    // selector all code block titles
    // add copy to clipboard button for every title
    // add copy function to button
  }

  // produce trianglify image
  useEffect(() => {
    let element = document.getElementById("headElement");
    let dimensions = element.getClientRects()[0];
    let pattern = trianglify({
      width: dimensions.width,
      height: dimensions.height,
      cellSize: 60 + Math.ceil(Math.random() * 100),
      variance: Math.random(),
      strokeWidth: Math.random() * 5,
      seed: Math.random().toString(5)
    }).toCanvas();

    let img = pattern.toDataURL("image/png");
    element.style["background-image"] =
      "linear-gradient(0deg, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0.60) 100%), url(" +
      img +
      ")";
  });

  return (
    <div className="relative" key={mdx.id}>
      <SEO
        title={`${title} | Blog`}
        keywords={[
          "the university of sheffield",
          "data visualisation",
          "data visualisation hub",
          "research",
          "blog",
          title,
          ...(mdx.frontmatter?.tag || []),
          ...(mdx.frontmatter?.category || [])
        ]}
        author={mdx.frontmatter.author.map((a) => a.name).join(", ")}
        description={mdx.frontmatter?.description}
        twitterImage={
          mdx.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData
        }
        twitterImageAlt={`Thumbnail image for the blog post - ${mdx.frontmatter?.title}`}
      />
      <Helmet>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
          type="text/javascript"
        />
      </Helmet>

      {/* Top background, title and author etc. */}
      <Fade top delay={300}>
        <div
          id="headElement"
          className="flex flex-wrap justify-center self-center content-center items-center m-auto shadow-lg"
          style={{ minHeight: "500px" }}
        >
          <Pulse cascade delay={2000} duration={500}>
            <div className="flex flex-col flex-wrap text-center text-white pt-24 pb-16">
              <div className="px-3 lg:px-48 2xl:px-78 leading-tight">
                <h1
                  id="title"
                  className="text-4xl xl:text-5xl"
                  style={{
                    textShadow: "#535353 0px 0px 25px",
                    fontWeight: "800"
                  }}
                >
                  {title}
                </h1>
              </div>

              <div className="flex justify-center mt-12 items-center">
                {author.map((authors) => (
                  <GatsbyImage
                    className="rounded-full mx-1 h-30px w-30px lg:h-40px lg:w-40px 2xl:h-50px 2xl:w-50px"
                    key={authors.name}
                    image={getImage(
                      authors.avatar.childImageSharp.gatsbyImageData
                    )}
                    alt={authors.name}
                  />
                ))}
                <div
                  className="inline-block px-2 text-left font-semibold"
                  style={{ textShadow: "black 0px 0px 15px" }}
                >
                  <h1 className="text-sm xl:text-base">
                    {author.map((authors, idx) =>
                      author.length === idx + 1
                        ? authors.name
                        : authors.name + " · "
                    )}
                  </h1>
                  <h1 className="text-xs xl:text-sm">
                    {date} · {mdx.fields.readingTime.text}
                  </h1>
                </div>
              </div>

              <div className="mt-4 text-xs 2xl:text-sm mx-auto flex flex-wrap px-2">
                {category.map((cat) => (
                  <CatBtn key={cat} to={`/blog/category/${kebabCase(cat)}`}>
                    {cat}
                  </CatBtn>
                ))}
                {tag.map((currentTag) => (
                  <TagBtn
                    key={currentTag}
                    to={`/blog/tag/${kebabCase(currentTag)}`}
                  >
                    {currentTag}
                  </TagBtn>
                ))}
              </div>
            </div>
          </Pulse>
        </div>
      </Fade>

      {/* body */}
      <div
        aria-label="Blog post main content"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          paddingTop: "2.5rem",
          position: "relative",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {/* desktop share buttons && mobile: table of content & share buttons */}
        <ShareButtons
          shareLinks={shareLinks}
          tableOfContent={tableOfContent}
          renderItem={renderItem}
        />

        {/******** main mdx content  ***********/}
        <div
          className={` ${
            tableOfContent && tableOfContent.items ? "mdxBody" : ""
          } relative mx-auto container pt-0 pb-32 px-5 text-lg xl:text-xl`}
          style={{ color: "#24292e", maxWidth: "700px" }}
        >
          <CommonMdxProvider mdx={mdx} className="text-gray-100" />
        </div>

        {/* sidebar toc: hidden in mobile */}
        <div
          className={` ${
            tableOfContent && tableOfContent.items ? "lg:w-2/12 lg:block" : ""
          } hidden noScrollBar lg:sticky lg:top-0 lg:right-0 pt-10 pb-10 max-h-100 overflow-auto`}
        >
          <p
            className="font-bold mb-4 pb-2 text-gray-800 text-lg"
            style={{ borderBottom: "1px solid #eaeaea" }}
          >
            TABLE OF CONTENTS
          </p>
          <div className="px-1 text-base TOC lg:pb-10">
            {tableOfContent &&
              tableOfContent.items &&
              tableOfContent.items.map(renderItem)}
          </div>
        </div>
      </div>

      <PostPagination
        mdx={mdx}
        prev={prev}
        next={next}
        shareLinks={shareLinks}
      />
      <Comment mdx={mdx} />
    </div>
  );
};

export default BlogPostTemplate;

BlogPostTemplate.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any
};

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      tableOfContents
      fields {
        ...MdxFields
        slugOrigin
      }
      frontmatter {
        ...MdxFrontmatter
        disableTOC
        d3
      }
    }
  }
`;
