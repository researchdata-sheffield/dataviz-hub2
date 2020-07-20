import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const BackgroundSection = ({className, children,}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "home/dataviz.jpg" }) {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2800) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
        className={className}
        fluid={imageData}
        style={{
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          width: `100%`,
        }}
        >
        <div>{children}</div>

        </BackgroundImage>
      )
    }}
  />
)

BackgroundSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.any,
}

export default BackgroundSection