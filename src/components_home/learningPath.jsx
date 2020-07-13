import React from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

//import { ButtonWithArrow } from "../components_style/styled"



const LearningPath = () => {
  
  return (
    <div id="learning_path" className="ipadp:min-h-100 flex flex-wrap justify-center items-center bg-gray-900 relative pb-10">
      <Fade>
        <div className="container mx-auto justify-center flex flex-wrap text-center">
          <div className="text-6xl font-semibold text-highlight_2 w-full leading-tight" style={{fontFamily: "TUoS Stephenson"}}>Learning paths.</div>
          <p className="mt-3 text-gray-100 px-2">Discover how to get the most out of statistics, visualisation and tool sets.</p>
        </div>
      </Fade>
      
      <div className="flex flex-wrap text-gray-800 pt-24 pb-64 justify-center">
        <h1 className="w-full text-white text-center">We are working on it, please come back later. <br/> Why not share your suggestions on our <a className="text-gray-500 hover:text-highlight_2 a-inline" href="https://join.slack.com/t/shef-dataviz/signup" target="_blank" rel="noopener noreferrer">slack channel</a>.</h1>
        <div className="md:w-1/4 mx-5 p-3 mt-10 transform hover:-translate-y-6 transition duration-500 bg-highlight_2 shadow-xs hover:shadow-2xl rounded-lg">
          <Zoom bottom duration={700} delay={500}>
            
          </Zoom>
        </div>

        <div className="md:w-1/4 mx-5 p-3 mt-10 transform hover:-translate-y-6 transition duration-500 bg-gray-500 shadow-xs hover:shadow-2xl rounded-lg">
          <Zoom bottom duration={700} delay={750}>
            
          </Zoom>
        </div>
      
        <div className="md:w-1/4 mx-5 p-3 mt-10 transform hover:-translate-y-6 transition duration-500 bg-white shadow-xs hover:shadow-2xl rounded-lg">
          <Zoom bottom duration={700} delay={1000}>
           
          </Zoom>
        </div>
      </div>
      <div className="w-full absolute bottom-0 -mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,181.3C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
    
  )

}

export default LearningPath

