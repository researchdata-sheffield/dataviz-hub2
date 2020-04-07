import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { H1, H2, H3, H4, H5, H6, P, A, Ol, Li } from "../components_style/blogPostStyle"
import PaginationPost from "../components_blog/paginationPost"

const blogPostTemplate_custom = ({ data: { mdx }, pageContext }) => {
    const {prev, next} = pageContext  

    return (
      <>
      <SEO 
      title={mdx.frontmatter.title} 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"]} 
      />
      <Header />
      
      <div className="justify-center mx-auto text-xl pb-24">
        <MDXProvider components={{h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6, p: P, a: A, ol: Ol, li: Li}}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
      
      <PaginationPost mdx={mdx} prev={prev} next={next} />
      <Footer />
      </>
    )
}

export default blogPostTemplate_custom


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
        author {
          name
          email
          avatar {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        date(formatString: "dddd Do MMMM YYYY")
        category
        tag
      }
    }
  }
`