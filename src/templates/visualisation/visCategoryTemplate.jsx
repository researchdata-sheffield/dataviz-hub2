import React, { useRef } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { loadMoreVisualisation } from "../../utils/hooks/loadMoreVisualisation"
import VisLayout from "../../components/visualisation/visLayout"

const visCategoryTemplate = ({ data: {allMdx}, pageContext }) => {
  const nextPageRef = useRef();
  const currentMDXs = loadMoreVisualisation(allMdx, nextPageRef);

  return(
    <VisLayout currentMDXs={currentMDXs} nextPageRef={nextPageRef} pageContext={pageContext} />
  )
}

export default visCategoryTemplate

visCategoryTemplate.propTypes = {
  data: PropTypes.any,
}


export const query = graphql`
	query visCategory($category: String) {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { 
        frontmatter: { 
          category: { in: [$category] }, 
          isPublished: {ne: false },
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
`