import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from 'prop-types'
import BackgroundSection from "../components_images/blog_background";

function Blog({data}) {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <SEO 
        title="Blog" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
      />
      <BackgroundSection className="">
        <div className="mx-12 my-24">
          <p className="text-white text-2xl">Write something <br /> <br /> <br /> <br /> <br /></p>
        </div>
          
        <div className="text-white text-2xl">
        Blog
        </div>
      </BackgroundSection>

      {posts.map(({ node }) => {
        const { title, author } = node.frontmatter
        return (
          <div key={node.id}>
            <header>
              <div>{title}</div>
              <div>Posting By {author}</div>
            </header>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>View Article</Link>
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}

export default Blog

Blog.propTypes = {
  data: PropTypes.any,
}

export const pageQuery = graphql`
  query blog {
    allMdx {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            author
            date
            category
            tags
          }
        }
      }
    }
  }
`