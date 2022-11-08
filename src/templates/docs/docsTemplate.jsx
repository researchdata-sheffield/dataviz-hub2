// BASE
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { GatsbyImage } from "gatsby-plugin-image";

import SEO from "../../components/shared/seo";
import PostPagination from "../../components/blog/postPagination";
import Comment from "../../components/blog/comment";
import ShareButtons from "../../components/shared/shareButtons";

// MDX component
import CommonMdxProvider from "../../components/shared/commonMdxProvider";
import "katex/dist/katex.min.css";

// Utils
import { useScript } from "../../utils/hooks/useScript";
import { getShareLinks } from "../../utils/shared";
import { useTrackTableOfContent } from "../../utils/hooks/trackTableOfContent";

import Fade from "react-reveal/Fade";

const DocsTemplate = ({ data: { mdx }, pageContext }) => {
  const { title, date, author, disableTOC } = mdx.frontmatter;
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

  return (
    <div className="relative" key={mdx.id}>
      <SEO
        title={title}
        keywords={[
          "the university of sheffield",
          "data visualisation",
          "data visualisation hub",
          "research",
          "docs",
          title,
          ...(mdx.frontmatter?.tag || []),
          ...(mdx.frontmatter?.category || [])
        ]}
        author={mdx.frontmatter.author.map((a) => a.name).join(", ")}
        description={mdx.frontmatter?.description}
        twitterImage={
          mdx.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData
        }
        twitterImageAlt={`Thumbnail image for the docs - ${mdx.frontmatter?.title}`}
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
          className="flex flex-wrap justify-center self-center content-center items-center m-auto"
          style={{ minHeight: "500px" }}
        >
          <div className="flex flex-col flex-wrap text-center text-white pt-24 pb-10">
            <div className="px-3 lg:px-48 2xl:px-78 leading-tight">
              <h1
                id="title"
                className="text-4xl xl:text-5xl text-gray-800 font-extrabold"
              >
                {title}
              </h1>
            </div>

            <div className="flex justify-center mt-12 items-center">
              {author.map((authors) => (
                <GatsbyImage
                  className="rounded-full mx-1 h-30px w-30px lg:h-40px lg:w-40px 2xl:h-50px 2xl:w-50px border-1 border-gray-100"
                  key={authors.name}
                  image={authors.avatar.childImageSharp.gatsbyImageData}
                />
              ))}
              <div className="inline-block px-2 text-left font-semibold text-gray-800">
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
            <div
              className="pb-2 border-b-1 border-gray-200 hidden md:block mx-auto mt-16"
              style={{ maxWidth: "1000px", minWidth: "400px" }}
            ></div>
          </div>
        </div>
      </Fade>

      {/* body */}
      <div
        className="flex flex-wrap relative pt-10 mx-auto"
        style={{ maxWidth: "1200px" }}
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
          } relative mx-auto pt-0 pb-32 px-5 text-lg lg:text-xl`}
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
        displayTags={false}
      />
      <Comment mdx={mdx} />
    </div>
  );
};

export default DocsTemplate;

DocsTemplate.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any
};

export const docsQuery = graphql`
  query docsQuery($id: String) {
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
