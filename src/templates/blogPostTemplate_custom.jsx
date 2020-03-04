import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"

export default function blogPostTemplate_custom({ data: { mdx }, pageContext }) {
    const {prev, next} = pageContext  

    return (
      <Layout>
      <SEO 
      title={mdx.frontmatter.title} 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"]} 
      />

      
      <div className="justify-center mx-auto text-xl pb-24">
        <MDXProvider>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
      
      <div className="flex text-black">
        {prev && (
          <Link to={prev.node.fields.slug}>
            {'<'} {prev.node.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link to={next.node.fields.slug}>
            {next.node.frontmatter.title} {'>'}
          </Link>
        )}
      </div>

      </Layout>
    )
}

blogPostTemplate_custom.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any,
}

export const query = graphql`
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