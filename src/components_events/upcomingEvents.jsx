import React from 'react'
import PropTypes from "prop-types"
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"
import moment from "moment"

const UpcomingEvents = ({allEventbriteEvents}) => {
  var eventLimit = 0

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
    <div className="w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 text-white px-8 lg:pt-6 pt-16 text-gray-800 lg:my-24 pb-16 flex-col flex-wrap overflow-auto border-t-8 border-red-700" style={{background: "rgba(255,255,255,.90)", }}>
    <h1 className="inline-block text-3xl font-semibold">Upcoming Events</h1>
    <div className="text-gray-500 mb-8" >Today: {todayDate()}</div>


    {allEventbriteEvents.edges.map(({node}) => {
      console.log( moment(node.start.local))
      console.log(moment(todayDate()))

      // Check if event's date is later than today's date
      if(moment(node.start.local) >= moment(todayDate()) && eventLimit < 3 ) {
        eventLimit = eventLimit + 1
        let description = node.description.text
        if(description.length >= 140) {
          description = description.substring(0, 140).concat(" ...")
        }

        return (
          <a className="flex flex-wrap w-full rounded overflow-auto shadow-md hover:shadow-xl bg-white my-4 text-gray-700 group border-solid hover:border-l-5 hover:border-highlight_2" style={{ fontFamily: "TUoS Blake"}} href={node.url} key={node.id} target="_blank" rel="noopener noreferrer">
            <img className="w-full sm:w-full md:w-3/12 lg:w-3/12 xl:w-3/12" src={node.logo.original.url} style={{minHeight: "15vh", maxHeight: "25vh", objectFit: "cover", objectPosition: "center"}} ></img>
            <div className="w-full sm:w-full md:w-9/12 lg:w-9/12 xl:w-9/12 p-4">
              <p className="font-semibold text-lg text-gray-900 group-hover:text-highlight_2">{node.name.text}</p>
              <p className="text-gray-500 mt-1 hidden md:flex lg:flex xl:flex leading-tight">{description}</p>
              <p className="flex mt-4 group-hover:text-highlight_2"><FaClock className="mr-1 mt-1" />{node.start.local}</p>
              
              <div className="flex flex-wrap">
                <div className="w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6">
                  <p className="flex group-hover:text-highlight_2">{node.online_event && (<FaMapMarkerAlt className="mr-1 mt-1" />)} {node.online_event && ("Online Event") }</p>
                  <p className="flex group-hover:text-highlight_2">
                    {node.venue && ( <FaMapMarkerAlt className="mr-1 mt-1" /> )} 
                    {node.venue && node.venue.name && (node.venue.name + ", ")} 
                    {node.venue && node.venue.address.address_1 && (node.venue.address.address_1 + ", ")} 
                    {node.venue && node.venue.address.city && (node.venue.address.city + ", ")}
                    {node.venue && node.venue.address.postal_code && (node.venue.address.postal_code)}
                  </p>
                </div>
                <div className="flex flex-wrap w-full sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 content-center justify-center">
                  <button href={node.url} target="_blank" rel="noopener noreferrer" className="hidden group-hover:flex rounded shadow-sm -mt-4 py-1 px-3 text-md bg-gray-600 text-white hover:bg-highlight_2">
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

