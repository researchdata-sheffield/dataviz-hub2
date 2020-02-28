import React from "react"
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

export default function blogTemplate({ data: { mdx } }) {
    
    return (
      <Layout>
      <SEO 
      title="Home" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"]} 
      />

      
      <div className="justify-center mx-auto text-2xl pb-24">
        <MDXProvider>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
      


      </Layout>
    )
}

blogTemplate.propTypes = {
  data: PropTypes.any,

}

export const pageQuery = graphql`
  query BlogPostQuery_custom($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        author
        date(formatString: "dddd Do MMMM YYYY")
      }
    }
  }
`