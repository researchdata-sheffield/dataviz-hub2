import React from 'react'
import PropTypes from "prop-types"
import { BlackWhiteButton } from "../style/styled"
import { shortenText } from "../../utils/shared"

const PastEvents = ({pastEvent}) => {
  
  return (
    <div className="w-full md:w-4/5 lg:w-4/12 2xl:w-3/12 lg:rounded-r-3xl md:mt-10 lg:mt-0 p-6 pb-8 text-gray-100 border-t-8 border-gray-800 min-h-50" style={{background: "rgba(0,0,0,.8)", }}>
      <h1 className="text-xl pt-2 pb-6 font-semibold">Past Events</h1>
      
      {pastEvent.edges.map(({ node }) => {
        let description = shortenText(node.description.text, 15)

        return (
          <div className="flex flex-wrap p-3 w-full overflow-hidden bg-white group pastEvent" key={node.id}>
            <a href={node.url} target="_blank" rel="noopener noreferrer">
            <p style={{ fontFamily: "TUoS Blake",}} className="font-bold text-sm text-black leading-4">{node.name.text}</p>
            <p className="text-gray-700 text-xs leading-4 mt-1">{description}</p>
            <p className="mt-2 text-xs text-black">{node.start.local}</p>
            </a>
          </div>
        )
      })} 
      <div className="flex justify-center w-full">
          <BlackWhiteButton onClick={()=>window.open("https://www.eventbrite.co.uk/o/scholarly-communications-team-the-university-of-sheffield-library-7528476001", "_blank", "noopener, noreferrer")} 
            className="w-full mt-0 hover:bg-blue-800 hover:text-white"
          >
            More events
          </BlackWhiteButton>
      </div>
    </div>
  )


  
}

export default PastEvents

PastEvents.propTypes = {
  pastEvent: PropTypes.any,
}

