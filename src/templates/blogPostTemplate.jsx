import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import Helmet from "react-helmet"

export default function blogPostTemplate({ data: { mdx }, pageContext }) {
    const { title, author, date } = mdx.frontmatter
    const {prev, next} = pageContext
    /* const myExtScript = require('https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js') */

    return (
      <Layout>
      <SEO 
      title={title}
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"].concat({title})} 
      />
      <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js" type="text/javascript" />
        <script >{`
          
          var element = document.getElementById("headElement");
          var dimensions = element.getClientRects()[0];
          var pattern = Trianglify({
            width: dimensions.width, 
            height: dimensions.height
          });

          element.style['background-image'] = 'url(' + pattern.png() + ')';

        `}</script>
      </Helmet>


      <div id="headElement" className="flex flex-wrap justify-center self-center content-center items-center m-auto shadow-xl border-b-4 border-white" style={{height: "45vh", fontFamily: "TUoS Blake"}}>
        <div className="text-center text-white">
          <div style={{textShadow: "black 0px 0px 3px"}}>
            <h1 className="text-3xl font-semibold" >{title}</h1>
            <h2 className="mt-8">{date}</h2>
            <h2 className="">{author}</h2>
          </div>
          <div className="mt-10 text-sm">
                {mdx.frontmatter.category.map((cat) => (
                  <Link key={cat} to={`/blog/category/${kebabCase(cat)}`} 
                    className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-500 text-gray-200 rounded-md">{cat}
                  </Link>
                ))}
                {mdx.frontmatter.tag.map((tag) => (
                  <Link key={tag} to={`/blog/tag/${kebabCase(tag)}`} 
                    className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-300 text-gray-500 rounded-md">{tag}
                  </Link>
                ))}
          </div>
        </div>
      </div>


      {/* <img className="justify-center items-center m-auto -mt-10 shadow-2xl" src={mdx.frontmatter.thumbnail.childImageSharp.fluid.src} style={{minHeight: "20%", maxHeight: "20%", maxWidth: "40%", minWidth: "40%",  objectFit: "cover", objectPosition: "center"}}></img>  */}


      <div className="justify-center container mx-auto py-16 px-10 text-lg leading-8">
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
        description
        tag
        category
        thumbnail {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`