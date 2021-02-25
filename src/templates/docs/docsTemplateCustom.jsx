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
import GitalkComponent from "gitalk/dist/gitalk-component"
import { useScript } from "../../utils/hooks/useScript"
import { useLocation } from "@reach/router"


const docsTemplateCustom = ({ data: { mdx }, pageContext }) => {
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
    
    <PaginationPost mdx={mdx} type="docs" prev={prev} next={next} share={[shareMessage, shareLink]} github={githubLink} />

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
    </>
  )
}

export default docsTemplateCustom


docsTemplateCustom.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any,
}



export const docsCustomQuery = graphql`
  query docsQuery_custom($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
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
        template
        date(formatString: "dddd Do MMMM YYYY")
        d3
      }
      fields {
        slug
      }
      
    }
  }
`