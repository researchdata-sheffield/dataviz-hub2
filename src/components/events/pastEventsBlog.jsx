import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { shortenText } from "../../utils/shared"

const PastEventsBlog = ({pastEventBlog}) => {
  
  return (
    <div className="w-full md:w-11/12 2xl:w-10/12 px-6 lg:mt-6 lg:mb-16 pb-8 lg:py-6 border-t-8 border-gray-50 min-h-30 rounded-md bg-white">
      <h1 className="text-2xl pt-2 pb-6 font-semibold">Event articles</h1>
      
      {pastEventBlog.edges.map(({ node }) => {
        let description = shortenText(node.frontmatter.description, 20)

        return (
          <div className="flex flex-wrap transition duration-500 overflow-hidden p-3 md:w-1/2 lg:w-1/4 rounded-md bg-white group hover:border-1 hover:border-gray-600 border-1 border-white" key={node.id}>
            <Link to={node.fields.slug}>
            <p className="font-bold text-black leading-5">{node.frontmatter.title}</p>
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

