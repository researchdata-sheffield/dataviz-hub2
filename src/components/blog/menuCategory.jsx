import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import Flip from 'react-reveal/Flip'

const menuCategory = ({ pageContext }) => {

  return (
    <Flip cascade top delay={1000}>
      <div id="read" className="flex flex-wrap absolute bottom-0 p-1 mr-2 right-0">
        {pageContext.categories.map((cat) => (
          <Link key={cat} to={`/blog/category/${kebabCase(cat)}`} activeStyle={{ color: "white" }} partiallyActive={true}
            className="bg-transparent text-gray-300 font-semibold hover:text-white py-2 px-3 hover:border-transparent rounded text-sm xl:text-base transition duration-1300 ease-in-out">{cat}
          </Link>
        ))}
      </div>
    </Flip>
  )

}

export default menuCategory

menuCategory.propTypes = {
  pageContext: PropTypes.any,

}