import React from 'react'
import PropTypes from "prop-types"
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"

const UpcomingEvents = ({allEventbriteEvents}) => {
  
  function todayDate() {
    var options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      timeZoneName: 'short'
    };
    
    var today = new Date();
    today = new Intl.DateTimeFormat('en-UK', options).format(today);
    return today;
  }
  
  return (
    <div className="w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 text-white px-8 pt-8 text-gray-800 lg:my-24 pb-16 flex-col flex-wrap overflow-auto" style={{background: "rgba(255,255,255,.95)", }}>
    <h1 className="inline-block text-3xl">Upcoming Events</h1>
    <div className="text-gray-500 mb-8" >Today: {todayDate()}</div>


    {allEventbriteEvents.edges.map(({node}) => {
      let description = node.description.text
      if(description.length >= 140) {
        description = description.substring(0,140).concat(" ...")
      }

      return (
        <a className="flex flex-wrap w-full rounded overflow-auto shadow-md hover:shadow-xl bg-white my-4 text-gray-700 group border-solid hover:border-l-8 hover:border-highlight_2" style={{ fontFamily: "TUoS Blake"}} href={node.url} key={node.id} target="_blank" rel="noopener noreferrer">
          <img className="w-full sm:w-full md:w-3/12 lg:w-3/12 xl:w-3/12" src={node.logo.original.url} style={{minHeight: "20vh", maxHeight: "30vh", objectFit: "cover", objectPosition: "center"}} ></img>
          <div className="w-full sm:w-full md:w-9/12 lg:w-9/12 xl:w-9/12 p-4">
            <p className="font-semibold text-lg text-gray-900 group-hover:text-highlight_2">{node.name.text}</p>
            <p className="text-gray-500 mt-1 hidden md:flex lg:flex xl:flex">{description}</p>
            <p className="flex mt-4 group-hover:text-highlight_2"><FaClock className="mr-1 mt-1" />{node.start.local}</p>
            <p className="flex group-hover:text-highlight_2">{node.online_event && (<FaMapMarkerAlt className="mr-1 mt-1" />)} {node.online_event && ("Online Event") }</p>
            <p className="flex group-hover:text-highlight_2">
              {node.venue && ( <FaMapMarkerAlt className="mr-1 mt-1" /> )} 
              {node.venue && node.venue.name && (node.venue.name + ", ")} 
              {node.venue && node.venue.address.address_1 && (node.venue.address.address_1 + ", ")} 
              {node.venue && node.venue.address.city && (node.venue.address.city + ", ")}
              {node.venue && node.venue.address.postal_code && (node.venue.address.postal_code)}
            </p>

          </div>
        </a>
      
        
      )
  
    })}

  </div>
  )


  
}

export default UpcomingEvents

UpcomingEvents.propTypes = {
  allEventbriteEvents: PropTypes.any,
}

