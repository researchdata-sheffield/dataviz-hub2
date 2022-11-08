import React, { useRef } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { useLoadMoreVisualisation } from "../../utils/hooks/loadMoreVisualisation";
import VisLayout from "../../components/visualisation/visLayout";

const VisTemplate = ({ data: { allMdx }, pageContext }) => {
  const nextPageRef = useRef();
  const currentMDXs = useLoadMoreVisualisation(allMdx.edges, nextPageRef);

  return (
    <VisLayout
      currentMDXs={currentMDXs}
      nextPageRef={nextPageRef}
      pageContext={pageContext}
    />
  );
};

export default VisTemplate;

VisTemplate.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any
};

export const query = graphql`
  query visualisationList {
    allMdx(
      filter: {
        frontmatter: { type: { eq: "visualisation" }, published: { ne: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
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
