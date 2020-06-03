import React from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

//import { ButtonWithArrow } from "../components_style/styled"



const LearningPath = () => {
  
  return (
    <div id="learningPath" className="ipadp:min-h-100 flex flex-wrap justify-center items-center py-10 bg-gray-900">
      <Fade>
        <div className="container mx-auto justify-center flex flex-wrap">
          <div className="text-6xl font-semibold text-white text-box w-full text-center" style={{fontFamily: "TUoS Stephenson"}}>Learning paths.</div>
          <p className="text-box mt-1 text-gray-500 px-2">Discover how to get the most out of statistics, visualisation and tool sets.</p>
        </div>
      </Fade>
      
      <div className="flex flex-wrap text-gray-800 pt-10 pb-20 justify-center">
        <h1 className="w-full text-white text-center">We are working on it, please come back later. <br/> Share your suggestions on our <a className="text-gray-500 hover:text-highlight_2" href="https://join.slack.com/t/shef-dataviz/signup" target="_blank" rel="noopener noreferrer">slack channel</a>.</h1>
        <div className="md:w-1/4 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 bg-highlight_2 shadow-xs hover:shadow-2xl rounded-lg">
          <Zoom bottom duration={700} delay={500}>
            
          </Zoom>
        </div>

        <div className="md:w-1/4 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 bg-gray-500 shadow-xs hover:shadow-2xl rounded-lg">
          <Zoom bottom duration={700} delay={750}>
            
          </Zoom>
        </div>
      
        <div className="md:w-1/4 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 bg-white shadow-xs hover:shadow-2xl rounded-lg">
          <Zoom bottom duration={700} delay={1000}>
           
          </Zoom>
        </div>

      </div>
    </div>
    
  )

}

export default LearningPath

