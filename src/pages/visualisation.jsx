import React from "react"
import SEO from "../components/shared/seo"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
//import { shortenText } from "../utils/shared"
import { getImageSource } from "../utils/shared"
//import { GatsbyImage } from "gatsby-plugin-image"

const Visualisation = ({data: {allMdx} }) => {
  console.log(allMdx)
  return(
    <>
      <SEO 
        title="Visualisation" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "about dataviz"]} 
      />
      <div className="min-h-100 flex flex-wrap justify-center py-32 bg-gray-900 px-5">
        <div 
          className="max-w-8xl w-full md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1"
          style={{gridAutoFlow: 'dense'}}
        >
          {allMdx.edges.map(({ node }) => {
            //let description = shortenText(node.frontmatter.description, 20)
            let imagesrc = getImageSource(node,true);
            let rowSpan = node.frontmatter.rowSpan ?? 1;
            let columnSpan = node.frontmatter.columnSpan ?? 1;

            return (
              <Link 
                to={node.fields.slug} 
                key={node.id} 
                style={{gridRow: `span ${rowSpan}`, gridColumn: `span ${columnSpan}`}}
                className="relative block rounded-xl visualisationColourBorder"
              >
                <div className="h-full w-full relative md:pb-full">
                  <div 
                    className="rounded-xl md:absolute md:top-0 md:left-0"  
                    style={{height: '100%', width: '100%', backgroundImage: 'linear-gradient(135deg, #141e30 0%,#152033 6%,#20344c 65%,#243b55 100%)', backgroundRepeat: 'no-repeat'}}
                  >
                    <img 
                      style={{height: '100%', width: '100%', transition: '.2s ease-out'}} 
                      className="rounded-xl" 
                      src={imagesrc} 
                      alt={"Visualisation: " + node.frontmatter.title} 
                    />
                  </div>
                </div>
              </Link>
            )

          })} 
        </div>
      </div>
    </>
  )
}

export default Visualisation

Visualisation.propTypes = {
  data: PropTypes.any,
}


export const query = graphql`
	query visualisationList {
		allMdx(
			filter: { frontmatter: { type: { eq: "visualisation" }} }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
      edges {
        node {
          id
          frontmatter {
            description
            tag
            thumbnail {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            d3
            date(formatString: "DD MMMM YYYY")
            author {
              name
              avatar {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                }
              }
            }
            category
            title
            featured
            type
            rowSpan
            columnSpan
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
		}
	}
`