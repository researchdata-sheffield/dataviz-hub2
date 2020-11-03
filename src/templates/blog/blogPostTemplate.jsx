import React, { useEffect } from "react"
import { graphql, withPrefix } from "gatsby"
import PropTypes from "prop-types"
import SEO from "../../components/shared/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Helmet from "react-helmet"
import kebabCase from "lodash.kebabcase"
import "katex/dist/katex.min.css"
import { useLocation } from "@reach/router"
import { useScript } from "../../utils/hooks/useScript"
import { trackTableOfContent } from "../../utils/hooks/trackTableOfContent"

import Header from "../../components/shared/header"
import Footer from "../../components/shared/footer"
import PaginationPost from "../../components/blog/paginationPost"
import {CatBtn, TagBtn} from "../../components/style/styled"
import { H1, H2, H3, H4, H5, H6, P, A, Ol, Li, Hr, Del, Pre, Ul, BlockQuote, Link, EM, Table, LPItem, LPWrap, IMG, TwitterBtn } from "../../components/style/blogPostStyle"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import GitalkComponent from "gitalk/dist/gitalk-component";
import Fade from "react-reveal/Fade"
import Pulse from 'react-reveal/Pulse';
import { Twitter, Facebook, Mail, Linkedin } from "react-social-sharing"
import { RiEditBoxLine } from "react-icons/ri"
import ReactTooltip from "react-tooltip";
//import trianglify from 'trianglify'

const blogPostTemplate = ({ data: { mdx }, pageContext }) => {
  const location = useLocation();
  const { title, date, author, category, tag, disableTOC } = mdx.frontmatter
  const {prev, next} = pageContext
  
  const folderName = mdx.fields.slug.substring(mdx.fields.slug.lastIndexOf("/")+1,)
  const githubLink = `https://github.com/researchdata-sheffield/dataviz-hub2/tree/development/content/blog/${folderName}/index.mdx`
  const shareLink = `https://${location.host}${mdx.fields.slug}`
  const shareMessage = `${mdx.frontmatter.title} - ${mdx.frontmatter.description}`

  // include d3 scripts
  const d3 = mdx.frontmatter.d3 ? mdx.frontmatter.d3 : null
  {d3 && d3.map((d) => {
    if(d.includes("https://")) useScript(d, "", false);  // external script
    else useScript(withPrefix(`d3/${d}`), "", false);   
  })}

  // enable/disable table of content
  var tableOfContent
  if(disableTOC === "true") {
    tableOfContent = null
  } else {
    tableOfContent = mdx.tableOfContents
    trackTableOfContent(`.TOC li a`, `.mdxBody`)
  }

  //Rendering table of content
  const renderItem = (item) => (
    <li key={item.title} className="pb-1 list-none">
      {/* Heading */}
      <a href={item.url} className="inline-block"><p>{item.title}</p></a>
      {/* Sub-heading */}
      { item.items ? (<ul className="pl-3">{item.items.map(renderSubItem)}</ul>) : <></> }
    </li>
  ); 
  const renderSubItem = (item) => (
    <li key={item.title} className="pt-1 list-none">
      { item.url ? <a href={item.url}> {item.title}</a> : <></> }
      { item.items ? ( <ul className="pl-3">{item.items.map(renderSubItem)}</ul>) : <></> }
    </li>
  ); 


  if (typeof window !== `undefined`) {
    //const list = document.querySelector('.gatsby-code-title')
    // selector all code block titles
    // add copy to clipboard button for every title
    // add copy function to button 
  }

  useEffect(() => {  
    // var element = document.getElementById("headElement");
    // var postTitle = document.getElementById("title").textContent;
    // var dimensions = element.getClientRects()[0];
    // var pattern = trianglify({
    //   width: dimensions.width, 
    //   height: dimensions.height,
    //   cellSize: 60 + Math.ceil(Math.random() * 100),
    //   variance: Math.random(),
    //   strokeWidth: Math.random() * 5,
    //   seed: postTitle
    // }).toCanvas();
    // var img = pattern.toDataURL("image/png")
    // element.style['background-image'] = 'url('+ img +')';
  });




  return (
    <div className="relative" key={mdx.id}>
      <SEO title={title} keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"]} />
      <Header />
      <Helmet >
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" type = 'text/javascript' /> 
      </Helmet>
      
      {/* Top background, title and author etc. */}
      <Fade top delay={300}>
      <div id="headElement" className="flex flex-wrap justify-center self-center content-center items-center m-auto shadow-c1" style={{minHeight: "50vh", }}>
        <Pulse cascade delay={2000} duration={500}>
        <div className="flex flex-col flex-wrap text-center text-white pt-24 pb-16">
          <div className="px-3 lg:px-48 2xl:px-78 leading-tight">
            <h1 id="title" className="text-4xl xl:text-5xl font-semibold" style={{textShadow: "black 0px 0px 45px"}}>{title}</h1>
          </div>
          
          <div className="flex justify-center mt-12 items-center">
            {author.map((authors) => (
              <img className="rounded-full mx-1 h-30px w-30px lg:h-40px lg:w-40px 2xl:h-50px 2xl:w-50px" key={authors.name} src={authors.avatar.childImageSharp.fluid.src}  />
            ))}
            <div className="inline-block px-2 text-left font-semibold" style={{textShadow: "black 0px 0px 15px"}}>
              <h1 className="text-sm xl:text-base">
                {author.map((authors, idx) => ( (author.length === idx + 1) ? authors.name : authors.name + " · " ))}
              </h1>
              <h1 className="text-xs xl:text-sm">{date} · {mdx.fields.readingTime.text}</h1>
            </div>
          </div> 

          <div className="mt-4 text-xs 2xl:text-sm mx-auto flex flex-wrap px-2">
            {category.map((cat) => ( <CatBtn key={cat} to={`/blog/category/${kebabCase(cat)}`}>{cat}</CatBtn> ))}
            {tag.map((tag) => ( <TagBtn key={tag} to={`/blog/tag/${kebabCase(tag)}`}>{tag}</TagBtn> ))}
          </div>
        </div>
        </Pulse>
      </div>
      </Fade>

      {/* body */}
      <div className="flex flex-wrap relative lg:px-10 2xl:px-40 pt-10">
        {/* desktop share buttons */}
        <div className="left-0 top-0 sticky hidden lg:block z-10">
          <Fade left cascade delay={1000} duration={1300}>   
            <div className="flex flex-col text-xs" style={{maxWidth: "40px", height: "0", overflow: "visible"}}>
              <Twitter className="greyScale-100 hover:greyScale-0 mt-28 transition duration-500" solid small message={shareMessage} link={shareLink} />
              <Facebook className="greyScale-100 hover:greyScale-0 transition duration-500" solid small link={shareLink} />
              <Mail className="hover:bg-red-600 transition duration-500" solid small subject={shareMessage} link={shareLink} />
              <Linkedin className="greyScale-100 hover:greyScale-0 transition duration-500" solid small message={shareMessage} link={shareLink} />
              <hr className="my-3" />
              <a href={githubLink} target="_blank" rel="noopener noreferrer" data-tip="" data-for="share_editpost" offset={{top: 100, left: 100}} title="share on github">
                <div className="m-2 mt-1 bg-transparent text-black flex justify-center rounded-md text-xl transition duration-500"><RiEditBoxLine /></div>
              </a>

              <ReactTooltip id="share_editpost">Edit this post on GitHub</ReactTooltip>
            </div>
          </Fade> 
        </div>   

        {/* mobile: table of content & share buttons */}
        <div className="w-full shadow-md flex flex-wrap justify-center -mt-12 lg:mt-0" style={{backgroundColor: '#f3f3f3'}}>
          <div className={`${ tableOfContent && Object.keys(tableOfContent).length === 0 ? 'flex-row' : 'flex-col w-1/4'} flex text-sm justify-center items-center py-2 lg:hidden ml-10`} style={{maxWidth: '50px'}}>
            <Twitter solid small message={shareMessage} link={shareLink} />
            <Facebook solid small link={shareLink} />
            <Mail solid small className="bg-red-600" subject={shareMessage} link={shareLink} />
            <Linkedin solid small message={shareMessage} link={shareLink} />
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <div className="m-2 py-1 px-2 bg-gray-800 hover:bg-highlight_2 text-white flex justify-center rounded-md text-xl"><RiEditBoxLine /></div>
            </a>
          </div>    
          <div className={` ${ tableOfContent && tableOfContent.items ? `pt-8 pb-5`: `hidden`} mx-auto overflow-auto text-black lg:hidden px-2`}>
              {tableOfContent && tableOfContent.items && <p className="font-bold mb-3 pb-2 border-b-1 border-gray-300">TABLE OF CONTENTS</p>}
              { tableOfContent && tableOfContent.items && tableOfContent.items.map(renderItem) }      
          </div>       
        </div>   
   
        {/******** main mdx content  ***********/}
        <div className={` ${ tableOfContent && tableOfContent.items ? `mx-auto md:max-w-70 lg:max-w-xs xl:max-w-sm 2xl:max-w-40 mdxBody`: `md:max-w-70 lg:max-w-xs xl:max-w-sm 2xl:max-w-40`} relative mx-auto container pt-6 pb-16 px-3 leading-8 text-lg`} style={{color: '#24292e'}}>
          <MDXProvider 
            components={{ h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6, p: P, a: A, ol: Ol, li: Li, hr: Hr, del: Del, 
                          pre: Pre, ul: Ul, blockquote: BlockQuote, Link: Link, em: EM, img: IMG, table: Table, 
                          Accordion: Accordion, AccordionItem: AccordionItem, AccordionItemHeading: AccordionItemHeading, 
                          AccordionItemButton: AccordionItemButton, AccordionItemPanel: AccordionItemPanel, 
                          LPWrap: LPWrap, LPItem: LPItem, TwitterBtn: TwitterBtn
                        }}
            >
            <MDXRenderer className="text-gray-100">{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>

        {/* sidebar toc: hidden in mobile */}
        <div className={` ${ tableOfContent && tableOfContent.items ? `lg:w-2/12 lg:block`: ``} hidden noScrollBar lg:sticky lg:top-0 lg:right-0 pt-10 pb-10 max-h-100 overflow-auto`}>
          <p className="font-bold mb-4 pb-2 text-gray-800 text-lg" style={{borderBottom: '1px solid #eaeaea'}}>TABLE OF CONTENTS</p>
          <div className="px-1 text-base TOC lg:pb-10">
          { tableOfContent && tableOfContent.items && tableOfContent.items.map(renderItem) }
          </div>      
        </div>  
      </div>       
 

      <PaginationPost mdx={mdx} prev={prev} next={next} share={[shareMessage, shareLink]} github={githubLink} />

      {/* comment */}
      {
        (typeof window !== `undefined`) &&
        <div className="relative z-10 pt-5 pb-16 px-5 lg:px-48 2xl:px-64 bg-white">
          <GitalkComponent options={{
            clientID: process.env.GATSBY_GH_APP_GITALK_ID,
            clientSecret: process.env.GATSBY_GH_APP_GITALK_SECRET,
            repo: 'dataviz-hub2-comments',   
            owner: 'researchdata-sheffield',
            admin: ['ajtag', 'annakrystalli', 'GemmaRIT', 'rosiehigman', 'yld-weng'],
            id: mdx.fields.slug.substr(0,50),
            title: mdx.frontmatter.title,
            body: location.href + " | " + mdx.frontmatter.description,
            distractionFreeMode: false
          }} /> 
        </div>    
      }
      
      <Footer />
    </div>
    
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
        disableTOC
        d3
      }
    }
  }
`
