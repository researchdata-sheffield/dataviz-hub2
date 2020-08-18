import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { shortenText } from "../../utils/shared"

const PastEventsBlog = ({pastEventBlog}) => {
  
  return (
    <div className="w-full md:w-4/5 text-gray-100 px-6 lg:mt-6 lg:mb-16 pb-8 lg:py-6 border-t-4 border-gray-800 min-h-50 rounded-3xl" style={{background: "rgba(0,0,0,.8)", }}>
      <h1 className="text-xl pt-2 pb-6 font-semibold">Event: articles</h1>
      
      {pastEventBlog.edges.map(({ node }) => {
        let description = shortenText(node.frontmatter.description, 20)

        return (
          <div className="flex flex-wrap transition duration-500 overflow-hidden p-3 md:w-1/2 lg:w-1/3 rounded-md bg-white group hover:bg-gray-100" key={node.id}>
            <Link to={node.fields.slug}>
            <p style={{ fontFamily: "TUoS Blake",}} className="font-bold text-black leading-5">{node.frontmatter.title}</p>
            <p className="text-gray-700 mt-1 text-sm leading-4">{description}</p>
            <p className="mt-2 text-sm text-black">{node.frontmatter.date}</p>
            </Link>
          </div>
        )

      })} 
    </div>
  )
}

export default PastEventsBlog

PastEventsBlog.propTypes = {
  pastEventBlog: PropTypes.any,
}

