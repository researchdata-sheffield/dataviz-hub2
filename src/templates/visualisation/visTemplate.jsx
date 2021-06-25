// BASE
import React from "react"
import { graphql, withPrefix } from "gatsby"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import SEO from "../../components/shared/seo"
import PostPagination from "../../components/blog/postPagination"
import Comment from "../../components/blog/comment"

// MDX component
import "katex/dist/katex.min.css"
import CommonMdxProvider from "../../components/shared/commonMdxProvider"

// Utils
import { useScript } from "../../utils/hooks/useScript"
import {  getShareLinks } from "../../utils/shared"




const visTemplate = ({ data: { mdx }, pageContext }) => {
  const { title, template } = mdx.frontmatter
  const {prev, next} = pageContext

  const shareLinks = getShareLinks(mdx);

  // include d3 scripts
  const d3 = mdx.frontmatter.d3 || null;

  {d3 && d3.map((d) => {
    if (d.includes("https://")) {
      useScript(d, "", false);  // external script
    } else {
      useScript(withPrefix(`d3/${d}`), "", false);   
    }
  })}


  return (
    <div className="relative" key={mdx.id}>
      <SEO title={title} keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"]} />
      <Helmet >
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" type = 'text/javascript' /> 
      </Helmet>
      
      {/* body */}
      {template === "custom" ? 
        <div className="justify-center mx-auto text-lg lg:text-xl">
          <CommonMdxProvider mdx={mdx} />
        </div>
        :
        <div className="flex flex-wrap relative mx-auto bg-gray-900">
          <div className="relative mx-auto container py-32 px-5 text-lg xl:text-xl" style={{color: '#24292e', maxWidth: '1200px'}}>
            <CommonMdxProvider mdx={mdx} className="text-gray-100" />
          </div>
        </div>   
      }    
 
      <PostPagination mdx={mdx} prev={prev} next={next} shareLinks={shareLinks} displayPagination={false} displayTags={false} displayShareButtons={false} />
      <Comment mdx={mdx} />
    </div>
  );
}

export default visTemplate

visTemplate.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any,
}

export const query = graphql`
  query visualisationItemQuery($id: String) {
    ...MdxNode
  }
`
