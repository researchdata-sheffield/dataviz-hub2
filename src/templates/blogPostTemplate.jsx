import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import Helmet from "react-helmet"
import { H1, H2, H3, H4, H5, H6, A, Ol, Li } from "../components_style/blogPost_style"

export default function blogPostTemplate({ data: { mdx }, pageContext }) {
    const { title, author, date } = mdx.frontmatter
    const {prev, next} = pageContext
    /* const tableOfContent = mdx.tableOfContents */
    
/*     const renderItem = item => (
      <li key={item.title}>
        {item.items ? (
          <ul>
            <a href={item.url}>{item.title}</a>
            {item.items.map(renderItem)}
          </ul>
        ) : (
          <a href={item.url}>{item.title}</a>
        )}
      </li>
    ); */
    

    return (
      <Layout>
        <SEO 
        title={title}
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"]} 
        />
        <Helmet >
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


        <div id="headElement" className="flex flex-wrap justify-center self-center content-center items-center m-auto shadow-xl border-b-2 border-white" style={{height: "45vh", fontFamily: "TUoS Blake"}}>
          <div className="text-center text-white">
            <div style={{textShadow: "black 0px 0px 3px"}}>
              <h1 className="text-3xl font-semibold" >{title}</h1>
              <h2 className="mt-6">{date}</h2>
              <h2 className="">{author}</h2>
            </div>
            <div className="mt-8 text-sm">
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
        
        {/* {tableOfContent && <ul>{tableOfContent.items.map(renderItem)}</ul>}  */}           
        {/* <img className="justify-center items-center m-auto -mt-10 shadow-2xl" src={mdx.frontmatter.thumbnail.childImageSharp.fluid.src} style={{minHeight: "20%", maxHeight: "20%", maxWidth: "40%", minWidth: "40%",  objectFit: "cover", objectPosition: "center"}}></img>  */}
                    

        <div className="justify-center container mx-auto py-16 px-10 leading-8 text-lg" markdown="1">
          <MDXProvider components={{h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6, a: A, ol: Ol, li: Li}}>
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
      tableOfContents
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
