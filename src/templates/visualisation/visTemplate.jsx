import React, { useRef } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { loadMoreVisualisation } from "../../utils/hooks/loadMoreVisualisation"
import VisLayout from "../../components/visualisation/visLayout"

const visTemplate = ({data: {allMdx} }) => {
  const allMDX = [];
  const nextPageRef = useRef();

  for(let i = 0; i < allMdx.edges.length; ++i){
    allMDX.push(allMdx.edges[i]);
    allMDX.push(allMdx.edges[Math.floor(Math.random() *allMdx.edges.length)]);
    allMDX.push(allMdx.edges[Math.floor(Math.random() *allMdx.edges.length)]);
    allMDX.push(allMdx.edges[Math.floor(Math.random() *allMdx.edges.length)]);
    allMDX.push(allMdx.edges[Math.floor(Math.random() *allMdx.edges.length)]);
  }

  const currentMDXs = loadMoreVisualisation(allMDX, nextPageRef);

  return(
    <VisLayout currentMDXs={currentMDXs} nextPageRef={nextPageRef} />
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