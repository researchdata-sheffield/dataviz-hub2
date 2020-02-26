import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import BackgroundSection from "../components_images/post_background"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <BackgroundSection className="justify-center">
        <div className="mx-12 my-32 text-center">
          <h1 className="text-white text-2xl ">{frontmatter.title}</h1>
          <h2 className="text-white mt-16">{frontmatter.date}</h2>
          <h2 className="text-white">{frontmatter.author}</h2>
        </div>
      </BackgroundSection>
      
      <div className="container mx-auto my-16">
        <div className="blog-post">

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.any,
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`