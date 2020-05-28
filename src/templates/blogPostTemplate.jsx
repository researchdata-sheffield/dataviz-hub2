import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import kebabCase from "lodash.kebabcase"
import Helmet from "react-helmet"
import { H1, H2, H3, H4, H5, H6, P, A, Ol, Li, Hr, Del, Pre, Ul, BlockQuote, Link, } from "../components_style/blogPostStyle"
import PaginationPost from "../components_blog/paginationPost"
import {CatBtn, TagBtn} from "../components_style/styled"
import Scrollspy from 'react-scrollspy'
import "katex/dist/katex.min.css"
import { Twitter, Facebook, Mail, Linkedin } from "react-social-sharing"
import Fade from "react-reveal/Fade"


const blogPostTemplate = ({ data: { mdx }, pageContext }) => {

  const { title, date } = mdx.frontmatter
  const {prev, next} = pageContext
  const tableOfContent = mdx.tableOfContents 
  
  const renderItem = (item) => (
    <li key={item.title} className="pb-2">
      <a href={item.url}><p>{item.title}</p></a>
      {item.items ? (
        <ul className="pl-4">
          {item.items.map(renderSubItem)}
        </ul>
      ) : (
        <a></a>
      )}
    </li>
  ); 

  const renderSubItem = (item) => (
    <li key={item.title} className="pt-2">
      <a href={item.url}><p>{item.title}</p></a>
      {item.items ? (
        <ul className="pl-4">
          {item.items.map(renderSubItem)}
        </ul>
      ) : (
        <a></a>
      )}
    </li>
  ); 

  const tocHighlight = (toc) => {
    const itemList = [];

    const scrollItem = (item) => (
      item.items ? (
        item.items.map(scrollItem)
      ) : (
        itemList.push(`${item.url.substring(1,)}`)
      )
    );
    toc.items.map(scrollItem)
    return itemList
  };
    

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
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" /> 
        
      </Helmet>
      
      <div id="headElement" className="flex flex-wrap justify-center self-center content-center items-center m-auto shadow-lg" style={{minHeight: "50vh", }}>
        <div className="flex flex-col flex-wrap text-center text-white pt-24 pb-16">
          <div className="px-5 leading-tight">
            <h1 className="text-3xl xl:text-5xl font-semibold" style={{textShadow: "black 0px 0px 45px"}}>{title}</h1>
            <div className="flex justify-center mt-10 items-center">
              {mdx.frontmatter.author.map((author) => (
                <img className="rounded-full mx-1 h-30px w-30px lg:h-40px lg:w-40px 2xl:h-50px 2xl:w-50px" key={author.name} src={author.avatar.childImageSharp.fluid.src}  />
              ))}
              <div className="inline-block px-2 text-left font-bold" style={{textShadow: "#000 0px 0px 5px"}}>
                <h1 className="text-sm xl:text-base pb-1">
                  {mdx.frontmatter.author.map((author, idx) => (
                      (mdx.frontmatter.author.length == idx + 1) ? author.name : author.name + " · "      
                  ))}
                </h1>
                <h1 className="text-xs xl:text-sm">{date} · {mdx.fields.readingTime.text}</h1>
              </div>
            </div> 
          </div>

          <div className="mt-2 text-xs 2xl:text-sm mx-auto flex">
            {mdx.frontmatter.category.map((cat) => (
              <CatBtn key={cat} to={`/blog/category/${kebabCase(cat)}`}>{cat}</CatBtn>
            ))}
            {mdx.frontmatter.tag.map((tag) => (
              <TagBtn key={tag} to={`/blog/tag/${kebabCase(tag)}`}>{tag}</TagBtn>
            ))}
          </div>
        </div>
      </div>


      <div className="flex flex-wrap relative lg:px-10 2xl:px-48">
        <div className="absolute left-0 top-0 sticky hidden lg:block mt-10">
          <Fade left cascade delay={2000} duration={1500}>
            <div className="flex flex-col text-sm" style={{maxWidth: "50px", height: "0", overflow: "visible"}}>
              <Twitter className="bg-gray-400 hover:bg-highlight_2 mt-32" solid small message={`${mdx.frontmatter.title} - ${mdx.frontmatter.description}`} link={`https://${window.location.host}${mdx.fields.slug}`} />
              <Facebook className="bg-gray-400 hover:bg-highlight_2" solid small link={`https://${window.location.host}${mdx.fields.slug}`} />
              <Mail className="bg-gray-400 hover:bg-highlight_2" solid small subject={`${mdx.frontmatter.title} - ${mdx.frontmatter.description}`} link={`https://${window.location.host}${mdx.fields.slug}`} />
              <Linkedin className="bg-gray-400 hover:bg-highlight_2" solid small message={`${mdx.frontmatter.title} - ${mdx.frontmatter.description}`} link={`https://${window.location.host}${mdx.fields.slug}`} />
            </div>
          </Fade>
        </div>   

        {/* mobile toc & share buttons */}
        <div className="w-full bg-gray-900 rounded-lg shadow-xl flex flex-wrap justify-center px-4">
          <div className="flex flex-wrap text-sm lg:hidden justify-center w-full py-2">
            <Twitter className="bg-gray-500 hover:bg-highlight_2" solid small message={`${mdx.frontmatter.title} - ${mdx.frontmatter.description}`} link={`https://${window.location.host}${mdx.fields.slug}`} />
            <Facebook className="bg-gray-500 hover:bg-highlight_2" solid small link={`https://${window.location.host}${mdx.fields.slug}`} />
            <Mail className="bg-gray-500 hover:bg-highlight_2" solid small subject={`${mdx.frontmatter.title} - ${mdx.frontmatter.description}`} link={`https://${window.location.host}${mdx.fields.slug}`} />
            <Linkedin className="bg-gray-500 hover:bg-highlight_2" solid small message={`${mdx.frontmatter.title} - ${mdx.frontmatter.description}`} link={`https://${window.location.host}${mdx.fields.slug}`} />
          </div>    
          <div className={` ${ tableOfContent.items ? `pt-10 pb-5`: ``} lg:hidden mx-auto overflow-auto text-white`}>
              {tableOfContent && tableOfContent.items && <p className="font-bold mb-5">TABLE OF CONTENTS</p>}
              { tableOfContent && 
                tableOfContent.items && 
                <Scrollspy className="text-gray-300" currentClassName="" scrolledPastClassName="" items={tocHighlight(tableOfContent)}>
                  {tableOfContent.items.map(renderItem)}
                </Scrollspy>
              }      
          </div>       
        </div>   
        {/* mobile toc */}   


        <div className={` ${ tableOfContent && tableOfContent.items ? `lg:w-10/12`: ``} mx-auto container py-6 px-3 lg:px-32 2xl:px-52 leading-7 text-xl`}>
          <MDXProvider components={{h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6, p: P, a: A, ol: Ol, li: Li, hr: Hr, del: Del, pre: Pre, ul: Ul, blockquote: BlockQuote, Link: Link, }}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>

        {/* toc hidden in mobile */}
        <div className={` ${ tableOfContent.items ? `lg:w-2/12 lg:block`: ``} hidden noScrollBar lg:sticky lg:top-0 lg:right-0 pt-12 pb-10 mx-auto max-h-100 overflow-auto`}>
          { tableOfContent && tableOfContent.items && <p className="font-bold mb-5">TABLE OF CONTENTS</p>}
          { tableOfContent && 
            tableOfContent.items && 
            <Scrollspy className="text-gray-700" currentClassName="underline" scrolledPastClassName="" items={tocHighlight(tableOfContent)}>
              {tableOfContent.items.map(renderItem)}
            </Scrollspy>
          }      
        </div>  
        {/* toc hidden in mobile */}
        

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
      fields {
        slug
        readingTime {
          text
        }
      }
      body
      tableOfContents
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
        date(formatString: "D MMMM YYYY")
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
