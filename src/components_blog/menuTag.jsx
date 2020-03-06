import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import { FaTags } from "react-icons/fa"

function menuTag({ pageContext }) {

  return (
    <div>
      <h1 className="text-2xl pb-4 font-semibold"><FaTags style={{display: "inline-block"}} /> Tags</h1>
      {pageContext.tags.map((tag) => (
          <Link key={tag} activeStyle={{ color: "white", backgroundColor: "#00aeef" }} partiallyActive={true} to={`/blog/tag/${kebabCase(tag)}`} 
          className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-3 m-1 bg-gray-100 text-gray-700 rounded-md">{tag}
        </Link>
      ))} 
    </div>

  )

}

export default menuTag

menuTag.propTypes = {
  pageContext: PropTypes.any,

}