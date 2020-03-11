import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { H1, H2, H3, H4, H5, H6, P, A, Ol, Li } from "../components_style/blogPost_style"
import PaginationPost from "../components_blog/pagination_post"

export default function blogPostTemplate_custom({ data: { mdx }, pageContext }) {
    const {prev, next} = pageContext  

    return (
      <Layout>
      <SEO 
      title={mdx.frontmatter.title} 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"]} 
      />

      
      <div className="justify-center mx-auto text-xl pb-24">
        <MDXProvider components={{h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6, p: P, a: A, ol: Ol, li: Li}}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
      
      <PaginationPost mdx={mdx} prev={prev} next={next} />

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
        category
        tag
      }
    }
  }
`