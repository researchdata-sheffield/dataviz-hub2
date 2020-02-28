import React from "react"
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/post_background"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

export default function blogTemplate({ data: { mdx } }) {
    const { title, author, date } = mdx.frontmatter
    
    return (
      <Layout>
      <SEO 
      title="Home" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"]} 
      />
      <BackgroundSection className="flex flex-wrap justify-center self-center content-center items-center m-auto">
        <div className="text-center">
          <h1 className="text-white text-3xl mt-5">{title}</h1>
          <h2 className="text-white mt-10">{date}</h2>
          <h2 className="text-white">{author}</h2>
        </div>
      </BackgroundSection>
      
      <div className="justify-center container mx-auto py-16 px-8 text-lg">
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
  query BlogPostQuery($id: String) {
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