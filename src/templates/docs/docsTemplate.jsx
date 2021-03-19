import React, { useEffect } from "react"
import { graphql, withPrefix } from "gatsby"
import PropTypes from "prop-types"
import SEO from "../../components/shared/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Helmet from "react-helmet"
import "katex/dist/katex.min.css"
import { useLocation } from "@reach/router"
import { useScript } from "../../utils/hooks/useScript"
import { trackTableOfContent } from "../../utils/hooks/trackTableOfContent"

import Header from "../../components/shared/header"
import Footer from "../../components/shared/footer"
import PaginationPost from "../../components/blog/paginationPost"
import { H1, H2, H3, H4, H5, H6, P, A, Ol, Li, Hr, Del, Pre, Ul, BlockQuote, Link, EM, Table, LPItem, LPWrap, IMG, TwitterBtn } from "../../components/style/blogPostStyle"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import Comment from "../../components/blog/comment"
import Fade from "react-reveal/Fade"
import { Twitter, Facebook, Mail, Linkedin } from "react-social-sharing"
import { RiEditBoxLine } from "react-icons/ri"
import ReactTooltip from "react-tooltip";



const docsTemplate = ({ data: { mdx }, pageContext }) => {
  const location = useLocation();
  const { title, date, author, disableTOC, type } = mdx.frontmatter
  const {prev, next} = pageContext

  const folderName = mdx.fields.slugOrigin
  const githubLink = `https://github.com/researchdata-sheffield/dataviz-hub2/tree/development/content/${type}${folderName}index.mdx`
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

  // produce trianglify image
  useEffect(() => {  
    // var element = document.getElementById("headElement");
    // var dimensions = element.getClientRects()[0];
    // var pattern = trianglify({
    //   width: dimensions.width, 
    //   height: dimensions.height,
    //   cellSize: 60 + Math.ceil(randomNumber() * 100),
    //   variance: randomNumber(),
    //   strokeWidth: randomNumber() * 5,
    //   seed: randomNumber().toString(5)
    // }).toCanvas();

    // var img = pattern.toDataURL("image/png")
    // element.style['background-image'] = 'linear-gradient(0deg, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0.60) 100%), url('+ img +')';
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
      <div id="headElement" className="flex flex-wrap justify-center self-center content-center items-center m-auto" style={{minHeight: "500px"}}>
        <div className="flex flex-col flex-wrap text-center text-white pt-24 pb-10">
          <div className="px-3 lg:px-48 2xl:px-78 leading-tight">
            <h1 id="title" className="text-4xl xl:text-5xl text-gray-800 font-extrabold">{title}</h1>
          </div>
          
          <div className="flex justify-center mt-12 items-center">
            {author.map((authors) => (
              <img className="rounded-full mx-1 h-30px w-30px lg:h-40px lg:w-40px 2xl:h-50px 2xl:w-50px border-1 border-gray-100" key={authors.name} src={authors.avatar.childImageSharp.fluid.src}  />
            ))}
            <div className="inline-block px-2 text-left font-semibold text-gray-800">
              <h1 className="text-sm xl:text-base">
                {author.map((authors, idx) => ( (author.length === idx + 1) ? authors.name : authors.name + " · " ))}
              </h1>
              <h1 className="text-xs xl:text-sm">{date} · {mdx.fields.readingTime.text}</h1>
            </div>
          </div> 
          <div className="pb-2 border-b-1 border-gray-200 hidden md:block mx-auto mt-16" style={{maxWidth: '1000px', minWidth: '400px'}}></div>

          {/* <div className="mt-4 text-xs 2xl:text-sm mx-auto flex flex-wrap px-2">
            {category.map((cat) => ( <CatBtn key={cat} to={`/blog/category/${kebabCase(cat)}`}>{cat}</CatBtn> ))}
            {tag.map((currentTag) => ( <TagBtn key={currentTag} to={`/blog/tag/${kebabCase(currentTag)}`}>{currentTag}</TagBtn> ))}
          </div> */}
        </div>
      </div>
      </Fade>

      {/* body */}
      <div className="flex flex-wrap relative pt-10 mx-auto" style={{maxWidth: '1200px'}}>
        {/* desktop share buttons */}
        <div className="left-0 top-0 sticky hidden lg:block z-10">
          <Fade left cascade delay={1000} duration={1300}>   
            <div className="flex flex-col text-xs" style={{maxWidth: "40px", height: "0", overflow: "visible"}}>
              <Twitter className="greyScale-100 hover:greyScale-0 mt-28 transition duration-500" solid small message={shareMessage} link={shareLink} />
              <Facebook className="greyScale-100 hover:greyScale-0 transition duration-500" solid small link={shareLink} />
              <Mail className="hover:bg-red-600 transition duration-500" solid small subject={shareMessage} link={shareLink} />
              <Linkedin className="greyScale-100 hover:greyScale-0 transition duration-500" solid small message={shareMessage} link={shareLink} />
              <hr className="my-3" />
              <a href={githubLink} target="_blank" rel="noopener noreferrer" data-tip="" data-for="share_editpost" offset={{top: 100, left: 100}}>
                <div className="m-2 mt-1 bg-transparent text-black flex justify-center rounded-md text-xl transition duration-500"><RiEditBoxLine /></div>
              </a>

              <ReactTooltip id="share_editpost">Edit this {type || 'post'} on GitHub</ReactTooltip>
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
              <div className="m-2 py-1 px-2 bg-gray-800 hover:bg-brand-blue text-white flex justify-center rounded-md text-xl"><RiEditBoxLine /></div>
            </a>
          </div>    
          <div className={` ${ tableOfContent && tableOfContent.items ? `pt-8 pb-5`: `hidden`} mx-auto overflow-auto text-black lg:hidden px-2`}>
              {tableOfContent && tableOfContent.items && <p className="font-bold mb-3 pb-2 border-b-1 border-gray-300">TABLE OF CONTENTS</p>}
              { tableOfContent && tableOfContent.items && tableOfContent.items.map(renderItem) }      
          </div>       
        </div>   
   
        {/******** main mdx content  ***********/}
        <div className={` ${ tableOfContent && tableOfContent.items ? `mdxBody`: ``} relative mx-auto pt-0 pb-16 px-5 text-lg lg:text-xl`} style={{color: '#24292e', maxWidth: '700px'}}>
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
 

      <PaginationPost mdx={mdx} type={type} prev={prev} next={next} share={[shareMessage, shareLink]} github={githubLink} />
      <Comment mdx={mdx} />
      
      <Footer />
    </div>
    
  )
}

export default docsTemplate

docsTemplate.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any,
}

export const docsQuery = graphql`
  query docsQuery($id: String) {
    ...MdxNode
  }
`
