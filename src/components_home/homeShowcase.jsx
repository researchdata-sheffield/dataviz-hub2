import React from 'react'
import BackgroundTwo from "../components_images/home/home_2"
import user_distribution from "../images/home/user1.png"
import Zoom from 'react-reveal/Zoom'
import Pulse from "react-reveal/Pulse"
import Fade from 'react-reveal/Fade'
import { ButtonWithArrow } from "../components_style/styled"

const HomeShowcase = () => {

  return (
    <div className="relative overflow-x-hidden bg-gray-800">
      <h1 className="absolute left-0 text-white text-2xl font-semibold transform -rotate-90 -ml-8 mt-44">Showcase</h1>
      <div id="home_showcase" />      
      <BackgroundTwo className="ipadp:min-h-40 flex flex-wrap items-center justify-end py-5 transform hover:translate-x-12 transition duration-500">
        <div className="flex flex-wrap justify-end">
          <div className="lg:w-1/2 py-10 flex flex-wrap px-3 ipadp:pr-20 ipadp:pl-6">
            <Fade duration={1300} right>
            <div className="text-5xl 2xl:text-6xl font-semibold text-white" style={{textShadow: "#000000 0px 0px 0px", fontFamily: "TUoS Stephenson"}}>SHOWCASE</div>
            <div className="2xl:text-lg my-4 text-white font-semibold" style={{textShadow: "#8d8d8d 0px 0px 3px"}}>
              ORDA (Online Research Data) is the University of Sheffield&apos;s hub for sharing data, code, and other non-traditional research artefacts. ORDA includes a showcase of visual 
              representations of data built by staff and students at the University of Sheffield.
            </div>
            <a href="https://orda.shef.ac.uk/visualisations" target="_blank" rel="noopener noreferrer">
              <ButtonWithArrow type="GreyButton">Discover</ButtonWithArrow>
            </a>
            </Fade>
          </div>
        </div>
        
      </BackgroundTwo>
      
      <div className="ipadp:min-h-40 flex flex-wrap py-6 ipadp:py-12 items-center justify-center bg-gray-100">
        <div className="md:w-6/12 px-3 md:pl-8 transform hover:scale-110 transition duration-500">
          <Pulse delay={2200}><img src={user_distribution} className="max-h-50" /></Pulse>
        </div>
        <Zoom cascade duration={1300}>
        <div className="md:w-5/12 px-3 lg:px-5 2xl:px-24 flex flex-wrap justify-center">
          <h1 className="text-2xl ipadp:text-4xl text-gray-700 text-center py-5" style={{fontFamily: "TUoS Stephenson"}}>ORDA User Regions</h1>
          <p className="text- gray-600">ORDA has welcomed visitors from over 148 countries and regions worldwide, providing a research data repository for storing and publishing 
            research data in the long term, and enabled university research data to be preseved, discovered, and accessed. 
          </p>
          <a href="https://orda.shef.ac.uk" target="_blank" rel="noopener noreferrer">
            <ButtonWithArrow className="mt-10 hover:bg-gray-100 hover:shadow-2xl hover:text-highlight_2 transition duration-500 ease-in-out">Go to ORDA</ButtonWithArrow>
          </a>
        </div>
        </Zoom>
      </div>
    </div>
  )
}

export default HomeShowcase