import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"

function menuCategory({ pageContext }) {

  return (
    <div id="read" className="flex flex-wrap absolute bottom-0 p-1 mr-2 right-0" style={{fontFamily: "TUoS Blake"}}>
      {pageContext.categories.map((cat) => (
        <Link key={cat} to={`/blog/category/${kebabCase(cat)}`} activeStyle={{ color: "white" }} partiallyActive={true}
          className="bg-transparent text-gray-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded text-base transition duration-1300 ease-in-out">{cat}
        </Link>
      ))}
    </div>
  )

}

export default menuCategory

menuCategory.propTypes = {
  pageContext: PropTypes.any,

}