import React from "react"
import PropTypes from "prop-types"
import SEO from "../../components/shared/seo"
import Helmet from "react-helmet"
import { graphql, withPrefix } from "gatsby"
import PostPagination from "../../components/blog/postPagination"
import "katex/dist/katex.min.css"
import Comment from "../../components/blog/comment"
import { useScript } from "../../utils/hooks/useScript"
import { getShareLinks } from "../../utils/shared"
import CommonMdxProvider from "../../components/shared/commonMdxProvider"


const docsTemplateCustom = ({ data: { mdx }, pageContext }) => {
  const {prev, next} = pageContext
  const shareLinks = getShareLinks(mdx);
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
      <Helmet>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" type='text/javascript' /> 
      </Helmet>

      <div className="justify-center mx-auto text-lg lg:text-xl">
        <CommonMdxProvider mdx={mdx} />
      </div>
      
      <PostPagination mdx={mdx} prev={prev} next={next} shareLinks={shareLinks} displayTags={false} />
      <Comment mdx={mdx} />
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
    ...MdxNode
  }
`