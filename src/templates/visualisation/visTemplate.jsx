import React, { useRef } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { loadMoreVisualisation } from "../../utils/hooks/loadMoreVisualisation"
import VisLayout from "../../components/visualisation/visLayout"

const visTemplate = ({data: {allMdx}, pageContext }) => {
  const nextPageRef = useRef();
  const currentMDXs = loadMoreVisualisation(allMdx.edges, nextPageRef);

  return(
    <VisLayout currentMDXs={currentMDXs} nextPageRef={nextPageRef} pageContext={pageContext} />
  )
}

export default visTemplate

visTemplate.propTypes = {
  data: PropTypes.any,
}


export const query = graphql`
	query visualisationList {
		allMdx(
			filter: { frontmatter: { type: { eq: "visualisation" } } }
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
`