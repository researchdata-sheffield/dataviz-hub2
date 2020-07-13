import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { H1, H2, H3, H4, H5, H6, P, A, Ol, Li, Hr, Del, Pre, Ul, BlockQuote, Link, IMG, Table } from "../components_style/blogPostStyle"
import PaginationPost from "../components_blog/paginationPost"
import "katex/dist/katex.min.css"

const blogPostTemplate_custom = ({ data: { mdx }, pageContext }) => {
    const {prev, next} = pageContext  

    //const folderName = mdx.fields.slug.substring(mdx.fields.slug.lastIndexOf("/")+1,)
    //const githubLink = `https://github.com/researchdata-sheffield/dataviz-hub2/tree/development/content/blog/${folderName}/index.mdx`
    const shareLink = `https://${window.location.host}${mdx.fields.slug}`
    const shareMessage = `${mdx.frontmatter.title} - ${mdx.frontmatter.description}`

    return (
      <>
      <SEO 
      title={mdx.frontmatter.title} 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"]} 
      />
      <Header />
      
      <div className="justify-center mx-auto text-xl">
        <MDXProvider components={{ h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6, p: P, a: A, ol: Ol, li: Li, hr: Hr, del: Del, pre: Pre, ul: Ul, blockquote: BlockQuote, Link: Link, img: IMG, table: Table, }}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
      
      <PaginationPost mdx={mdx} prev={prev} next={next} share={[shareMessage, shareLink]} />
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
      fields {
        slug
      }
    }
  }
`