import React, { useRef } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { useLoadMoreVisualisation } from "../../utils/hooks/loadMoreVisualisation";
import VisLayout from "../../components/visualisation/visLayout";

const VisTagTemplate = ({ data: { allMdx }, pageContext }) => {
  const nextPageRef = useRef();
  const currentMDXs = useLoadMoreVisualisation(allMdx.edges, nextPageRef);

  return (
    <VisLayout
      currentMDXs={currentMDXs}
      nextPageRef={nextPageRef}
      pageContext={pageContext}
      title={pageContext.tag}
    />
  );
};

export default VisTagTemplate;

VisTagTemplate.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any
};

export const query = graphql`
  query visTag($tag: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          tag: { in: [$tag] }
          published: { ne: false }
          type: { eq: "visualisation" }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            ...MdxFrontmatter
            rowSpan
            columnSpan
          }
          fields {
            ...MdxFields
          }
        }
      }
    }
  }
`;
