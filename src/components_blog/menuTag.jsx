import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import { FaTags } from "react-icons/fa"

const menuTag = ({ pageContext }) => {

  return (
    /* TODO: Add number of articles next to tag/cat name */
		/* TODO: Add filter form */
		<div className="w-full xl:w-1/4 2xl:w-1/5 px-5 py-1 xl:py-3 text-gray-100 shadow-2xl bg-gray-900 text-sm" style={{fontFamily: "TUoS Blake"}}>
      <div className="sticky top-0 overflow-hidden lg:py-2">
        <h1 className="text-2xl pb-2 xl:pb-5 font-semibold"><FaTags style={{display: "inline-block"}} /> Tags</h1>
        {pageContext.tags.map((tag) => (
            <Link key={tag} activeStyle={{ color: "white", backgroundColor: "#00aeef" }} partiallyActive={true} to={`/blog/tag/${kebabCase(tag)}`} 
            className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 m-1 bg-gray-100 text-gray-700 rounded-full 2xl:text-sm font-sans font-semibold">{tag} ({pageContext.countTags[`${tag}`]})
          </Link>
        ))} 
      </div>
    </div>
  )

}

export default menuTag

menuTag.propTypes = {
  pageContext: PropTypes.any,

}