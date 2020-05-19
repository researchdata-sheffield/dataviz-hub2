import React from 'react'
import BackgroundTwo from "../components_images/home/home_2"
import user_distribution from "../images/home/user1.png"
import Zoom from 'react-reveal/Zoom'
import Pulse from "react-reveal/Pulse"
import Fade from 'react-reveal/Fade'
import { MdKeyboardArrowRight } from "react-icons/md"

const HomeShowcase = () => {

  return (
    <>
      <div id="home_showcase" />      
      <BackgroundTwo className="ipadp:min-h-40 flex flex-wrap items-center justify-end py-5">
        <Fade duration={1300} right>
        <div className="flex flex-wrap justify-end">
          <div className="lg:w-1/2 py-10 flex flex-wrap px-3 ipadp:pr-20 ipadp:pl-6">
            <div className="text-5xl 2xl:text-6xl font-semibold text-white" style={{textShadow: "#000000 0px 0px 0px", fontFamily: "TUoS Stephenson"}}>Showcase</div>
            <div className="2xl:text-lg my-4 text-white font-semibold" style={{textShadow: "#8d8d8d 0px 0px 3px"}}>
              ORDA (Online Research Data) is the University of Sheffield&apos;s hub for sharing data, code, and other non-traditional research artefacts. ORDA includes a showcase of visual 
              representations of data built by staff and students at the University of Sheffield.
            </div>
            <button onClick={() => window.open("https://orda.shef.ac.uk/visualisations", "_blank", "noopener")} className="mt-4 bg-gray-100 hover:bg-highlight_2 text-center hover:text-white text-gray-700 font-semibold py-2 px-6 border-2 border-transparent shadow">
              Discover <MdKeyboardArrowRight className="inline-block" />
            </button>
          </div>
        </div>
        </Fade>
      </BackgroundTwo>
      
      <div className="ipadp:min-h-40 flex flex-wrap py-6 ipadp:py-12 items-center justify-center bg-gray-100">
        <Pulse delay={2200}>
          <div className="md:w-6/12 px-3 md:pl-8"><img src={user_distribution} className="max-h-50 hover:scale-105" /></div>
        </Pulse>
        <Zoom cascade duration={1300}>
        <div className="md:w-5/12 px-3 lg:px-5 2xl:px-24 flex flex-wrap justify-center">
          <h1 className="text-2xl ipadp:text-4xl text-gray-700 text-center py-5" style={{fontFamily: "TUoS Stephenson"}}>ORDA User Regions</h1>
          <p className="text- gray-600">ORDA has welcomed visitors from over 148 countries and regions worldwide, providing a research data repository for storing and publishing 
            research data in the long term, and enabled university research data to be preseved, discovered, and accessed. 
          </p>
          <button onClick={() => window.open("https://orda.shef.ac.uk", "_blank", "noopener")} className="mt-10 bg-gray-800 hover:bg-gray-100 hover:shadow-2xl text-center hover:text-highlight_2 text-white font-semibold py-2 px-6 border-2 border-transparent shadow transition duration-500 ease-in-out">
            Go to ORDA <MdKeyboardArrowRight className="inline-block" />
          </button>
        </div>
        </Zoom>
      </div>
    </>
  )
}

export default HomeShowcase