import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import Helmet from "react-helmet"
import { H1, H2, H3, H4, H5, H6, P, A, Ol, Li, Hr, Del, Pre, Ul } from "../components_style/blogPostStyle"
import PaginationPost from "../components_blog/paginationPost"


const blogPostTemplate = ({ data: { mdx }, pageContext }) => {
    const { title, date } = mdx.frontmatter
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
      <>
        <SEO 
        title={title}
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"]} 
        />
        <Header />
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


        <div id="headElement" className="flex flex-wrap justify-center self-center content-center items-center m-auto shadow-md border-b-2 border-white" style={{minHeight: "50vh", }}>
          <div className="flex flex-wrap text-center text-white pt-24 pb-16">
            <div className="px-10 leading-tight w-full">
              <h1 className="text-3xl xl:text-5xl font-semibold lg:px-24" style={{textShadow: "black 0px 0px 3px"}}>{title}</h1>
              <div className="flex justify-center mt-10 items-center mx-auto px-8">
                {mdx.frontmatter.author.map((author) => (
                  <img className="rounded-full mx-1 h-30px w-30px lg:h-40px lg:w-40px 2xl:h-50px 2xl:w-50px" key={author.name} src={author.avatar.childImageSharp.fluid.src}  />
                ))}
                <div className="inline-block px-2 text-left font-bold" style={{textShadow: "black 0px 0px 2px"}}>
                  <h1 className="text-sm xl:text-base">
                    {mdx.frontmatter.author.map((author, idx) => (
                        (mdx.frontmatter.author.length == idx + 1) ? author.name : author.name + " · "      
                    ))}
                  </h1>
                  <h1 className="text-xs xl:text-sm">{date}</h1>
                </div>
              </div> 
            </div>

            <div className="mt-2 text-xs 2xl:text-sm mx-auto flex">
                {mdx.frontmatter.category.map((cat) => (
                  <Link key={cat} to={`/blog/category/${kebabCase(cat)}`} 
                    className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-800 text-gray-100 border-gray-800 border-1 hover:border-transparent">{cat}
                  </Link>
                ))}
                {mdx.frontmatter.tag.map((tag) => (
                  <Link key={tag} to={`/blog/tag/${kebabCase(tag)}`} 
                    className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-white text-gray-700 border-1 border-gray-300 hover:border-transparent">{tag}
                  </Link>
                ))}
              </div>

       

          </div>
        </div>
        
        {/* {tableOfContent && <ul>{tableOfContent.items.map(renderItem)}</ul>}  */}           
        {/* <img className="justify-center items-center m-auto -mt-10 shadow-2xl" src={mdx.frontmatter.thumbnail.childImageSharp.fluid.src} style={{minHeight: "20%", maxHeight: "20%", maxWidth: "40%", minWidth: "40%",  objectFit: "cover", objectPosition: "center"}}></img>  */}
                    

        <div className="justify-center container mx-auto py-8 px-4 lg:px-48 xl:px-70 leading-7 text-base">
          <MDXProvider components={{h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6, p: P, a: A, ol: Ol, li: Li, hr: Hr, del: Del, pre: Pre, ul: Ul, }}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
        
        <PaginationPost mdx={mdx} prev={prev} next={next} />
        
        <Footer />
      </>
    )
}

export default blogPostTemplate

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
        date(formatString: "ddd, D MMMM YYYY")
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
