import React from "react"
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/post_background"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

export default function Template({ data: { mdx } }) {
    const { title, author, date } = mdx.frontmatter
    
    return (
      <Layout>
      <SEO 
      title="Home" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"]} 
      />
      <BackgroundSection className="justify-center">
        <div className="mx-12 my-32 text-center">
          <h1 className="text-white text-2xl ">{title}</h1>
          <h2 className="text-white mt-16">{date}</h2>
          <h2 className="text-white">{author}</h2>
        </div>
      </BackgroundSection>
        <article>
        <MDXProvider>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>

        </article>
      </Layout>
    )
}

Template.propTypes = {
  data: PropTypes.any,

}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        author
        date
      }
    }
  }
`