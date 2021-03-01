import React from 'react'
import PropTypes from "prop-types"
import GitalkComponent from "gitalk/dist/gitalk-component"

const comment = ({ mdx }) => {

  return (
    (typeof window !== `undefined`) &&
    <div className="relative z-10 pt-5 pb-16 px-5 lg:px-10 bg-white mx-auto" style={{maxWidth: '1200px'}}>
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
  )

}

export default comment

comment.propTypes = {
  mdx: PropTypes.any,
}