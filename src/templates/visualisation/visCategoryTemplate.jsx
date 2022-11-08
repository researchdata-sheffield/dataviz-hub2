import React, { useRef } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { useLoadMoreVisualisation } from "../../utils/hooks/loadMoreVisualisation";
import VisLayout from "../../components/visualisation/visLayout";

const VisCategoryTemplate = ({ data: { allMdx }, pageContext }) => {
  const nextPageRef = useRef();
  const currentMDXs = useLoadMoreVisualisation(allMdx.edges, nextPageRef);

  return (
    <VisLayout
      currentMDXs={currentMDXs}
      nextPageRef={nextPageRef}
      pageContext={pageContext}
      title={pageContext.category}
    />
  );
};

export default VisCategoryTemplate;

VisCategoryTemplate.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any
};

export const query = graphql`
  query visCategory($category: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          category: { in: [$category] }
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
