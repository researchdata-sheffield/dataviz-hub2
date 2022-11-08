import React, { useState } from "react";
import PropTypes from "prop-types";
import SEO from "../shared/seo";
import { Link } from "gatsby";
import { getImageSource } from "../../utils/shared";
import { VisGrid, VisItem } from "../style/visStyle";
import Fade from "react-reveal/Fade";
import UniversityIcon from "../../images/UOSLogo_Primary_White_RGB.svg";
import WordCloud from "./wordCloud";
import VisUtils from "./visUtils";

/**
 *
 * @param {object} allMdx All visualisation items
 * @param {*} nextPageRef React useRef - referencing load-more div.
 * @param {string} title Element id for load-more div.
 * @param {Object} pageContext Other page related information
 * @returns
 */
const VisLayout = ({ currentMDXs, nextPageRef, title, pageContext }) => {
  const [tagMenu, setTagMenu] = useState(false);

  // category & tag will pass a title
  const pageTitle = title ? `${title} |` : "";
  const pageSubtitle = title ? (
    <p>
      Viewing items in{" "}
      <span className="text-gray-400 font-semibold">{title}</span>.
    </p>
  ) : (
    <p>The latest from the University of Sheffield.</p>
  );

  // Show top N tags
  const topVisCatTag =
    (pageContext.allVisCatTag &&
      pageContext.allVisCatTag.length > 1 &&
      pageContext.allVisCatTag
        .sort((a, b) =>
          b.count
            .toString()
            .localeCompare(a.count.toString(), "en", { numeric: true })
        )
        .slice(0, 20)) ||
    [];

  // save current path as go back URL in visualisation items
  if (typeof window !== "undefined") {
    localStorage.setItem("VisGoBackURL", pageContext.pagePath);
  }

  function handleTagMenu() {
    setTagMenu(!tagMenu);
  }

  return (
    <div className="bg-brand-black">
      <SEO
        title={`${pageTitle} Visualisation`}
        keywords={[
          "the university of sheffield",
          "data visualisation",
          "data visualisation hub",
          "research",
          "about dataviz",
          title ?? ""
        ]}
        description="Browse the latest visualisations from the Data Visualisation Hub at The University of Sheffield."
      />

      <VisUtils
        handleTagMenu={handleTagMenu}
        tagMenu={tagMenu}
        tags={pageContext.allVisCatTag}
      />

      <div className="w-full pt-24 pb-8 text-center">
        <h1
          className="w-full py-3 text-7xl font-extrabold"
          style={{
            background:
              "-webkit-linear-gradient(135deg, rgba(255,121,180,1) 50%, rgba(255,134,250,1) 36%, rgba(41,197,255,1) 35%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            MozBackgroundClip: "text",
            MozTextFillColor: "transparent"
          }}
        >
          <Link to="/visualisation">InfoVis</Link>
        </h1>
        <h3 className="text-gray-500">{pageSubtitle}</h3>
      </div>

      <div className="flex flex-wrap justify-center group">
        <div className="flex w-full h-full justify-center">
          <WordCloud
            id="main-word-cloud"
            words={topVisCatTag}
            colours={["#ececec"]}
            backgroundColour={["#1f2937"]}
            padding="8px 13px"
            order="random"
          />
        </div>
        <button
          onClick={() => handleTagMenu()}
          title="Browse all tags"
          className="text-center mt-3 lg:opacity-0 group-hover:opacity-100 text-brand-blue bg-black rounded-md transition duration-300 text-md px-3 py-2"
        >
          Browse all tags
        </button>
      </div>

      <div className="min-h-80 flex flex-wrap justify-center pt-24 pb-32 bg-brand-black px-5">
        <VisGrid>
          {currentMDXs.length > 0 &&
            currentMDXs.map(({ node }) => {
              let imagesrc = getImageSource(node, true);
              let rowSpan = node.frontmatter.rowSpan ?? 1;
              let columnSpan = node.frontmatter.columnSpan ?? 1;

              return (
                <Link
                  className="__outer shadow-xl visualisationColourBorder"
                  to={node.fields.slug}
                  key={node.id}
                  style={{
                    gridRow: `span ${rowSpan}`,
                    gridColumn: `span ${columnSpan}`
                  }}
                >
                  {/* university logo on loading */}
                  <img src={UniversityIcon} className="__loading-image" />
                  {/* visualisation */}
                  <Fade delay={1000}>
                    <VisItem row={rowSpan} col={columnSpan}>
                      <div className="__inner">
                        <img
                          src={imagesrc}
                          alt={"Visualisation: " + node.frontmatter.title}
                        />
                      </div>
                    </VisItem>
                  </Fade>
                </Link>
              );
            })}

          <div id="visualisation-invite">
            <Fade delay={1000}>
              <VisItem row={1} col={1}>
                <div className="__wrap">
                  <h1 className="text-gray-300 font-bold m-auto">
                    Add your visualisations here
                  </h1>
                  <Link
                    to="/docs/21/07/2021/Contribute-visualisation"
                    className="text text-gray-200 bg-gray-600"
                  >
                    Learn how
                  </Link>
                </div>
              </VisItem>
            </Fade>
          </div>
        </VisGrid>
        <div ref={nextPageRef} style={{ height: "100px", width: "100%" }}></div>
      </div>
      <div className="text-center text-gray-600 pb-5 text-sm">
        This page is inspired by{" "}
        <a
          href="https://informationisbeautiful.net/beautifulnews"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-brand-blue"
        >
          Beautiful News
        </a>
        .
      </div>
    </div>
  );
};

export default VisLayout;

VisLayout.propTypes = {
  currentMDXs: PropTypes.any,
  nextPageRef: PropTypes.any,
  title: PropTypes.string,
  pageContext: PropTypes.object
};
