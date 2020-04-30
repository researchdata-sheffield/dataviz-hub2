import React, { useState, useEffect} from 'react'
import PropTypes from "prop-types"
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"
import moment from "moment"

const UpcomingEvents = ({allEventbriteEvents}) => {
  var eventLimit = 0

  const [currentDate, setDate] = useState(moment().format('ddd DD MMMM YYYY, hh:mm A'));
  useEffect(() => {
    setDate(moment().format('ddd DD MMMM YYYY, hh:mm A'))
  }, [])
  
  return (
    <div className="w-full lg:w-8/12 text-white px-12 lg:pt-6 pt-16 text-gray-800 lg:my-24 pb-16 overflow-auto border-t-8 border-red-700 min-h-70" style={{background: "rgba(255,255,255,.95)", }}>
      <h1 className="inline-block text-2xl font-semibold">Upcoming Events</h1>
      <div className="text-gray-500 mb-8" >Today: {currentDate}</div>


      {allEventbriteEvents.edges.map(({node}) => {
        //moment(node.start.local, "DD-MMMM-YYYY hh:mm") >= moment() && 
        // Check if event's date is later than today's date, restrict number of events to 3
        if(eventLimit < 4 ) {
          eventLimit = eventLimit + 1
          let description = node.description.text
          if(description.length >= 130) {
            description = description.substring(0, 130).concat(" ...")
          }

          return (
            <a className="flex flex-wrap w-full overflow-y-hidden max-h-80 md:max-h-25 xl:max-h-20 shadow-lg hover:shadow-2xl bg-white my-1 text-gray-700 group border-solid " style={{fontFamily: "TUoS Blake", transition: ".5s ease"}} href={node.url} key={node.id} target="_blank" rel="noopener noreferrer">
              <img className="w-full md:w-3/12 overflow-hidden self-center md:min-h-25 xl:min-h-15" src={node.logo.original.url} style={{objectFit: "cover", objectPosition: "center"}} />
              <div className="w-full md:w-9/12 py-4 px-4">
                <p className="font-semibold text-lg text-gray-900 group-hover:text-highlight_2">{node.name.text}</p>
                <p className="text-gray-500 hidden md:flex lg:flex xl:flex leading-tight text-sm">{description}</p>
                <p className="flex pt-4 text-sm"><FaClock className="mr-1" />{node.start.local}</p>
                
                <div className="flex flex-wrap">
                  <div className="w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6 text-sm">
                    <p className="flex">{node.online_event && (<FaMapMarkerAlt className="mr-1 mt-1" />)} {node.online_event && ("Online Event") }</p>
                    <p className="flex">
                      {node.venue && ( <FaMapMarkerAlt className="mr-1 mt-1" /> )} 
                      {node.venue && node.venue.name && (node.venue.name + ", ")} 
                      {node.venue && node.venue.address.address_1 && (node.venue.address.address_1 + ", ")} 
                      {node.venue && node.venue.address.city && (node.venue.address.city + ", ")}
                      {node.venue && node.venue.address.postal_code && (node.venue.address.postal_code)}
                    </p>
                  </div>
                  <div className="flex flex-wrap w-full sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 content-center justify-center">
                    <button href={node.url} target="_blank" rel="noopener noreferrer" className="hidden group-hover:flex shadow-sm -mt-4 py-1 px-3 text-md bg-gray-800 text-white hover:bg-highlight_2">
                      Register
                    </button>
                  </div>
                </div>

              </div>
            </a> 
          )
        }
      })}

    </div>
  )
  
}

export default UpcomingEvents

UpcomingEvents.propTypes = {
  allEventbriteEvents: PropTypes.any,
}

