import React, {useEffect, useState} from 'react'
import PropTypes from "prop-types"
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"
import moment from "moment"
import Fade from 'react-reveal/Fade';


const eventNotice = ({ eventBrite }) => {

  const [currentDate, setDate] = useState(moment().format('ddd DD MMMM YYYY, hh:mm A'));
  useEffect(() => {
    setDate(moment().format('ddd DD MMMM YYYY, hh:mm A'))
  }, [])
  
  return (
    <div className="bg-black w-full">
      <Fade duration={1000}>
      <div id="eventNotice" className="w-full text-white text-gray-800 flex-col flex-wrap overflow-auto  bg-white">
        {eventBrite.edges.map(({node}) => {

            let description = node.description.text.split(" ").splice(0, 15)
            if(description.length < 15){
              description = description.join(" ");
            } else {
              description = description.join(" ").concat(" ...");
            }
            
            return (
              <div key={node.id} className="border-white border-t-4 border-l-6 border-r-6 border-b-8">
                <div className="text-gray-700 text-sm w-full bg-white font-bold px-2 py-2" >Today: {currentDate}</div>
                
                <a className="flex flex-wrap w-full overflow-hidden max-h-80 md:max-h-25 xl:max-h-20 bg-white text-gray-700 group" style={{fontFamily: "TUoS Blake"}} href={node.url} target="_blank" rel="noopener noreferrer">
                  <img className="w-full md:w-3/12 overflow-hidden self-center md:min-h-25 xl:min-h-15" src={node.logo.original.url} style={{objectFit: "cover", objectPosition: "center"}} />
                  <div className="w-full md:w-9/12 py-1 px-4">
                    <h1 className="inline-block font-semibold xl:text-xl"><p className="text-highlight_2 text-2xl xl:text-4xl inline-block">NEXT</p> event: &nbsp;<p className="inline-block text-lg xl:text-2xl font-bold">{node.name.text ? node.name.text : "No next event"}</p></h1>
                    <p className="text-gray-500 hidden md:flex lg:flex xl:flex leading-tight text-sm xl:text-lg">{description}</p>
                    <p className="flex pt-2 group-hover:text-highlight_2 text-sm xl:text-lg"><FaClock className="mr-1" />{node.start.local}</p>
                    <div className="flex flex-wrap">
                      <div className="w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6 text-sm xl:text-lg">
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
                        <button href={node.url} target="_blank" rel="noopener noreferrer" className="hidden group-hover:flex shadow-sm -mt-4 py-1 px-3 text-md bg-gray-800 text-white hover:bg-highlight_2">
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