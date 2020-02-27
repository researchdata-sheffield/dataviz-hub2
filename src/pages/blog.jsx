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

      <BackgroundSection className="flex flex-wrap justify-center self-center content-center items-center m-auto">
        <div className="text-white text-center">
          <h1 className="text-6xl">Blog <br /></h1>
          <p className="text-sm">scientia potentia est.</p>
          
        </div>
      </BackgroundSection>

      <div className="flex flex-wrap-reverse">
        
        {/* List of posts FIXME: beautify  */}
        <div className="sm:w-3/4 px-10 py-8">
          <p>There are {data.allMdx.totalCount} posts</p>
          {posts.map(({ node }) => {
            const { title, author, date,} = node.frontmatter
            
            const imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src
           
            return (
              <div key={node.id}>
                <header>
                  <img src={imagesrc}></img>
                  <div>{title}</div>
                  <div>Posting By {author} on {date} </div>
                </header>
                <p>{node.excerpt}</p>
                <p>Time to read: {node.timeToRead} {node.timeToRead===1 ? "min" : "mins"}</p>
                <Link to={node.fields.slug}>View Article</Link>
                <hr />
              </div>
            )
          })}
        </div>

        {/* TODO: Add category & tags */}
        <div className="w-full sm:w-1/4 px-10 py-8 bg-gray-300">

        </div>
      </div>

    </Layout>
  )
}

export default Blog

Blog.propTypes = {
  data: PropTypes.any,
}

export const pageQuery = graphql`
  query blog {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
            date(formatString: "dddd Do MMMM YYYY")
            category
            tag
            thumbnail {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          } 
          timeToRead
        }
      }
      totalCount
    }
  }
`