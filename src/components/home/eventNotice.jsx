import React, {useEffect, useState} from 'react'
import PropTypes from "prop-types"
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"
import moment from "moment"
import Fade from 'react-reveal/Fade';
import { shortenText } from "../../utils/shared"


const eventNotice = ({ eventBrite }) => {

  const [currentDate, setDate] = useState(moment().format('ddd DD MMMM YYYY, hh:mm A'));
  useEffect(() => {
    setDate(moment().format('ddd DD MMMM YYYY, hh:mm A'))
  }, [])
  
  return (
    <div className="bg-black w-full">
      <Fade duration={1000}>
      <div id="eventNotice" className="w-full text-gray-800 flex-col flex-wrap overflow-auto shadow-lg z-10 relative" style={{backgroundColor: '#f8f8f8'}}>
        {eventBrite.edges.map(({node}) => {

          let summary = node.summary ? shortenText(node.summary, 30) : ""
            
            return (
              <div key={node.id}>
                <div className="text-gray-700 text-sm w-full font-bold px-2 py-3">Today: {currentDate}</div>
                
                <a className="flex flex-wrap w-full overflow-hidden max-h-80 text-gray-700 group pb-2 px-2" style={{fontFamily: "TUoS Blake"}} href={node.url} target="_blank" rel="noopener noreferrer">
                  <img className="w-full md:w-3/12 overflow-hidden self-center" src={node.logo.original.url} alt={`Thumbnail: ${summary}`} style={{objectFit: "cover", objectPosition: "center", minHeight: "180px"}} />
                  <div className="w-full md:w-9/12 pb-2 px-4">
                    <h1 className="inline-block font-semibold xl:text-xl"><p className="text-highlight_2 text-2xl xl:text-3xl inline-block">
                      NEXT</p> event: &nbsp;
                      <p className="inline-block text-lg xl:text-xl font-bold">{node.name.text ? node.name.text : "No next event"}</p>
                    </h1>
                    <p className="text-gray-500 hidden md:flex lg:flex xl:flex leading-tight text-sm xl:text-base">{summary}</p>
                    <p className="flex pt-2 group-hover:text-highlight_2 text-sm xl:text-base"><FaClock className="mr-1" />{node.start.local}</p>
                    <div className="flex flex-wrap">
                      <div className="w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6 text-sm xl:text-base">
                        <p className="flex group-hover:text-highlight_2">{node.online_event && (<FaMapMarkerAlt className="mr-1 mt-1" />)} {node.online_event && ("Online Event") }</p>
                        <p className="flex group-hover:text-highlight_2">
                          {node.venue && ( <FaMapMarkerAlt className="mr-1 mt-1" /> )} 
                          {node.venue && node.venue.name && (node.venue.name + ", ")} 
                          {node.venue && node.venue.address.address_1 && (node.venue.address.address_1 + ", ")} 
                          {node.venue && node.venue.address.city && (node.venue.address.city + ", ")}
                          {node.venue && node.venue.address.postal_code && (node.venue.address.postal_code)}
                        </p>
                      </div>
                      <div className="flex flex-wrap w-full sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 content-center justify-center hidden-xs hidden-md">
                        <button href={node.url} target="_blank" rel="noopener noreferrer" className="hidden group-hover:flex shadow-sm -mt-4 py-2 px-5 text-lg bg-gray-800 text-white hover:bg-blue-800">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </a> 
              </div>
            )
        })}
      </div>
      </Fade>
    </div>
  )

}

export default eventNotice

eventNotice.propTypes = {
  eventBrite: PropTypes.any,

}