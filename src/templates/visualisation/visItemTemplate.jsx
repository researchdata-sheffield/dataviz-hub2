// BASE
import React from "react";
import { graphql, withPrefix, navigate } from "gatsby";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import SEO from "../../components/shared/seo";
import PostPagination from "../../components/blog/postPagination";
import Comment from "../../components/blog/comment";

// MDX component
import "katex/dist/katex.min.css";
import CommonMdxProvider from "../../components/shared/commonMdxProvider";

// Utils
import { useScript } from "../../utils/hooks/useScript";
import { getShareLinks } from "../../utils/shared";
import VisPagination from "../../components/visualisation/visPagination";
import VisDetail from "../../components/visualisation/visDetail";
import { VisDiv, VisBackBtn, EmbedCode } from "../../components/style/visStyle";
import { AiOutlineRollback, AiOutlineHome } from "react-icons/ai";

const visItemTemplate = ({ data: { mdx }, pageContext }) => {
  const components = { VisPagination, VisDetail, VisDiv, EmbedCode };

  const shareLinks = getShareLinks(mdx);
  const { title, template } = mdx.frontmatter;
  const { prev, next } = pageContext;

  mdx.shareLinks = shareLinks;
  mdx.pageContext = pageContext;

  // include d3 scripts
  const d3 = mdx.frontmatter.d3 || null;
  if (d3) {
    d3.forEach((d) => {
      if (d.includes("https://")) {
        useScript(d, "", false); // external script
      } else {
        useScript(withPrefix(`d3/${d}`), "", false);
      }
    });
  }

  return (
    <div className="relative" key={mdx.id}>
      <SEO
        title={`${title} | Visualisation`}
        keywords={[
          "the university of sheffield",
          "data visualisation",
          "data visualisation hub",
          "research",
          "visualisation",
          title,
          ...(mdx.frontmatter?.tag || []),
          ...(mdx.frontmatter?.category || [])
        ]}
        author={mdx.frontmatter.author.map((a) => a.name).join(", ")}
        description={mdx.frontmatter?.description}
        twitterImage={
          mdx.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData
        }
        twitterImageAlt={`Thumbnail image for the visualisation - ${mdx.frontmatter?.title}`}
      />
      <Helmet>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
          type="text/javascript"
        />
      </Helmet>

      {/* body */}
      {template === "custom" ? (
        <div className="justify-center mx-auto text-lg lg:text-xl">
          <CommonMdxProvider mdx={mdx} components={components} />
        </div>
      ) : (
        <div className="flex flex-wrap relative mx-auto bg-gray-900">
          <div
            className="relative mx-auto container py-32 px-3 text-lg xl:text-xl text-gray-200"
            style={{ maxWidth: "1200px" }}
          >
            <CommonMdxProvider mdx={mdx} components={components} />
          </div>
          <VisBackBtn
            onClick={() =>
              navigate(localStorage.getItem("VisGoBackURL") || "/visualisation")
            }
            className="text-xl bg-gray-800 text-gray-100 hover:bg-gray-700 hover:text-brand-blue group overflow-hidden"
            title="Back to visualisation page"
          >
            <AiOutlineRollback className="transform group-hover:translate-x-24" />
            <AiOutlineHome className="absolute transform translate-x-24 group-hover:translate-x-0" />
          </VisBackBtn>
        </div>
      )}

      <PostPagination
        mdx={mdx}
        prev={prev}
        next={next}
        shareLinks={shareLinks}
        displayPagination={false}
        displayTags={false}
        displayShareButtons={false}
      />
      <Comment mdx={mdx} />
    </div>
  );
};

export default visItemTemplate;

visItemTemplate.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any
};

export const query = graphql`
  query visualisationItemQuery($id: String) {
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
        pngImagePath {
          relativePath
        }
        svgImagePath {
          relativePath
        }
        pngExternalImagePath
        svgExternalImagePath
      }
    }
  }
`;
