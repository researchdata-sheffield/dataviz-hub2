import React from 'react'
import PropTypes from "prop-types"
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"
import { shortenText, calculateUserLocalTime } from "../../utils/shared"


const UpcomingEvents = ({allEventbriteEvents}) => {
  let size = allEventbriteEvents.edges.length
  
  if(allEventbriteEvents && (size > 0)) {
    return (
      <> 
      {allEventbriteEvents.edges.map(({node}) => {
        //moment(node.start.local, "DD-MMMM-YYYY hh:mm") >= moment() && 
        let summary = shortenText(node.summary, 20);
        let userLocalTime = calculateUserLocalTime(node.start.local);

        return (
          <a className="flex flex-col-reverse md:flex-row flex-wrap w-full hover:shadow-xl overflow-y-hidden bg-white my-3 lg:my-1 text-gray-700 group border-2 border-gray-50" 
            style={{transition: ".5s ease"}} href={node.url} key={node.id} target="_blank" rel="noopener noreferrer"
          >
            <div className="w-full md:w-9/12 py-4 px-4">
              <p className="font-semibold text-lg text-black group-hover:text-brand-blue leading-5">{node.name.text}</p>
              <p className="text-gray-700 mt-1 leading-tight text-sm group-hover:text-black">{summary}</p>
              <p className="flex pt-4 text-sm"><FaClock className="mr-1" />{userLocalTime.time}</p>
              
              <div className="flex flex-wrap text-sm">
                  <p className="flex">{node.online_event && (<FaMapMarkerAlt className="mr-1 mt-1" />)} {node.online_event && ("Online Event") }</p>
                  <p className="flex">
                    {node.venue && ( <FaMapMarkerAlt className="mr-1 mt-1" /> )} 
                    {node.venue && node.venue.name && (node.venue.name + ", ")} 
                    {node.venue && node.venue.address.address_1 && (node.venue.address.address_1 + ", ")} 
                    {node.venue && node.venue.address.city && (node.venue.address.city + ", ")}
                    {node.venue && node.venue.address.postal_code && (node.venue.address.postal_code)}
                  </p>
              </div>
            </div>
            <div className="w-full md:w-3/12 overflow-hidden relative min-h-15 2xl:min-h-15" style={{backgroundImage: `url(${node.logo.original.url})`, backgroundPosition: 'center', backgroundSize: 'cover', transition: '.5s ease'}}>
              <button href={node.url} target="_blank" rel="noopener noreferrer" className="hidden group-hover:flex py-1 px-3 font-semibold text-md bg-black text-white hover:bg-blue-900 absolute" style={{bottom: '0%', right: '0%', }}>
                Register
              </button>
            </div>
          </a> 
        )
        
      })}
      </>
    )
  } else {
    return (
      <span className="mt-10 text-gray-900">No upcoming events at the moment, please come back later.</span>
    )
  }
}

export default UpcomingEvents

UpcomingEvents.propTypes = {
  allEventbriteEvents: PropTypes.any,
}

