import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"

const PastEvents = ({pastEvent}) => {
  
  return (
    <div className="flex flex-wrap w-full sm:w-full md:w-full lg:w-3/12 xl:w-3/12 text-gray-100 px-6 lg:mt-16 pb-16 lg:py-6 border-t-4 border-gray-800" style={{background: "rgba(0,0,0,.6)", }}>
      <h1 className="text-xl pb-6 font-semibold">Past Events</h1>
      
      {pastEvent.edges.map(({ node }) => {

        let description = node.frontmatter.description ? node.frontmatter.description : ""
        if(description.length >= 85){
          description = description.substring(0, 85).concat(" ...")
        }

        return (
          <div className="flex flex-wrap bg-gray-100 p-3 w-full rounded overflow-auto shadow-md hover:shadow-xl bg-white my-1 text-gray-700 group border-solid border-r-8 border-gray-700 hover:border-r-8 hover:border-highlight_2" style={{ fontFamily: "TUoS Blake"}} key={node.id}>
            <Link to={node.fields.slug}>
            <p className="font-semibold text-sm text-gray-700 group-hover:text-highlight_2">{node.frontmatter.title}</p>
            <p className="text-gray-500 mt-1 hidden md:flex lg:flex xl:flex text-sm leading-4">{description}</p>
            <p className="mt-1 text-sm text-gray-700 group-hover:font-semibold">{node.frontmatter.date}</p>
            </Link>
          </div>
        )

      })} 
      
    </div>
  )


  
}

export default PastEvents

PastEvents.propTypes = {
  pastEvent: PropTypes.any,
}

