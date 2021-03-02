import React from "react"
import PropTypes from "prop-types"
import SEO from "../../components/shared/seo"
import Header from "../../components/shared/header"
import Footer from "../../components/shared/footer"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, withPrefix } from "gatsby"
import { H1, H2, H3, H4, H5, H6, P, A, Ol, Li, Hr, Del, Pre, Ul, BlockQuote, Link, IMG, EM, Table, LPWrap, LPItem } from "../../components/style/blogPostStyle"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'
import PaginationPost from "../../components/blog/paginationPost"
import "katex/dist/katex.min.css"
import Comment from "../../components/blog/comment"
import { useScript } from "../../utils/hooks/useScript"
import { useLocation } from "@reach/router"


const blogPostTemplateCustom = ({ data: { mdx }, pageContext }) => {
  const location = useLocation();

  const {prev, next} = pageContext
  const folderName = mdx.fields.slug.substring(mdx.fields.slug.lastIndexOf("/")+1,)
  const githubLink = `https://github.com/researchdata-sheffield/dataviz-hub2/tree/development/content/blog/${folderName}/index.mdx`
  const shareLink = `https://${location.host}${mdx.fields.slug}`
  const shareMessage = `${mdx.frontmatter.title} - ${mdx.frontmatter.description}`
  const d3 = mdx.frontmatter.d3 ? mdx.frontmatter.d3 : null;
  
  // include d3 scripts
  useScript("https://unpkg.com/topojson@3", "", false)
  {d3 && d3.map((d) => {
    useScript(withPrefix(`d3/${d}`), "", false)
  })}

  return (
    <>
    <SEO 
    title={mdx.frontmatter.title} 
    keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"]} 
    />
    <Header />
    <Helmet>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" type='text/javascript' /> 
    </Helmet>

    <div className="justify-center mx-auto text-lg 2xl:text-xl">
      <MDXProvider 
        components={{ h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6, p: P, a: A, ol: Ol, li: Li, 
                      hr: Hr, del: Del, pre: Pre, ul: Ul, blockquote: BlockQuote, Link: Link, em: EM,
                      img: IMG, table: Table, LPWrap: LPWrap, LPItem: LPItem, Accordion: Accordion, 
                      AccordionItem: AccordionItem, AccordionItemHeading: AccordionItemHeading, 
                      AccordionItemButton: AccordionItemButton, AccordionItemPanel: AccordionItemPanel,
                    }}
      >
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
    
    <PaginationPost mdx={mdx} type={mdx.frontmatter.type || 'blog'} prev={prev} next={next} share={[shareMessage, shareLink]} github={githubLink} />
    <Comment mdx={mdx} />
    
    <Footer />
    </>
  )
}

export default blogPostTemplateCustom


blogPostTemplateCustom.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any,
}



export const query = graphql`
  query BlogPostQuery_custom($id: String) {
    ...MdxNode
  }
`