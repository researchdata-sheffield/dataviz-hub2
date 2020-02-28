import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/post_background"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"

export default function blogPostTemplate({ data: { mdx }, pageContext }) {
    const { title, author, date } = mdx.frontmatter
    const {prev, next} = pageContext

    return (
      <Layout>
      <SEO 
      title={title}
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

blogPostTemplate.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any,
}

export const query = graphql`
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