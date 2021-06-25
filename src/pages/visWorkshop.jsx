/* eslint-disable no-undef */
import React, { useState, useEffect } from "react"
import SEO from "../components/shared/seo"
import Bg from "../images/visualisation/nuclear-power-station.jpg"

const VisWorkshop = () => {
  const [authenticated, setAuth] = useState(process.env.NODE_ENV === "development" ?? false); 

  useEffect(() => {
    authentication();

  }, [authenticated])


  function authentication() {
    if (typeof window == "undefined") {
      return;
    }

    if (!authenticated) {
      let userInput = window.prompt("This route is password protected, please enter the password.");

      if (userInput == process.env.GATSBY_ENV) {
        setAuth(true);
      } else {
        authentication();
      }
    }
  }


  return(
    authenticated &&
    <>
      <SEO 
        title="Craft visualisations" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "about dataviz"]} 
      />
      <div className="min-h-100 flex flex-wrap space-y-10 space-x-10 justify-center py-32">
      <div 
        style={{backgroundImage: `linear-gradient(45deg, rgba(100,100,100,.7) 5%, rgba(30,30,60,.85) 96%), url(${Bg})`, maxWidth: '650px', maxHeight: '650px', height: '60vh', width: '60vh', borderRadius: '0px', backgroundSize: 'cover'}}
        className="p-5 relative"
      >
        <h1 className="text-4xl font-extrabold" style={{color: 'transparent', background: 'linear-gradient(315deg, rgba(47,255,43,1) 4%, rgba(0,160,255,1) 96%)', backgroundClip: 'text'}}>University of Sheffield researchers to help bring Green Industrial Revolution</h1>
        <div className="mt-20 w-full flex space-x-8">
          <div className="text-right">
            <h1 className="text-6xl font-bold text-white">£20m</h1>
            <h3 className="text-gray-300">project</h3>
          </div>
          <div className="relative text-right">
            <span className="text-sm text-gray-400 inline-block text-right absolute top-0 right-0 -mt-4">over</span>
            <h1 className="text-6xl font-bold text-white">140</h1>
            <h3 className="text-gray-300">partners</h3>
          </div>
          <div className="text-right">
            <h1 className="text-6xl font-bold text-green-300">2030</h1>
            <h3 className="text-gray-300">four low-carbon clusters</h3>
          </div>
        </div>
        <div className="mt-16 text-gray-400 text-center">
          + world’s first net-zero emissions industrial cluster by <span className="text-green-400 text-lg">2040</span>
        </div>

        <h1 className="absolute bottom-0 left-0 m-5 text-gray-500 font-extrabold text-xs">Dataviz.Shef</h1>
        <h1 className="absolute bottom-0 right-0 m-5 text-gray-500 text-xs">Source: The University of Sheffield - News</h1>
      </div>


      </div>
    </>
  )
}

export default VisWorkshop
