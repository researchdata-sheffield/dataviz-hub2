import React, { useState, useEffect } from "react"
import SEO from "../components/shared/seo"
import Bg from "../images/visualisation/nuclear-power-station.jpg"
import { ResponsiveWaffle } from '@nivo/waffle'
import UkPercent from "../images/visualisation/depression.png"

const VizWorkshop = () => {
  const [authenticated, setAuth] = useState(process.env.NODE_ENV === "development" ?? false); 

  useEffect(() => {
    authentication();

    return () => {
    }
  }, [authenticated])


  const COSTDATA = [
    {
      "id": "Resignations",
      "label": "Resignations",
      "value": 11.9,
      "color": "#468df3"
    },
    {
      "id": "Disciplinary dismissals",
      "label": "Disciplinary dismissals",
      "value": 10.5,
      "color": "#ba72ff"
    },
    {
      "id": "Sickness",
      "label": "Sickness absences",
      "value": 2.2,
      "color": "#a1cfff"
    }
  ];

  function authentication() {
    if (typeof window == "undefined") {
      return;
    }

    if (!authenticated) {
      let userInput = window.prompt("This route is password protected, please enter the password.");
      console.log("user input:", userInput)
      if (userInput == process.env.GATSBY_ENV) {
        setAuth(true);
      } else {
        authentication();
      }
    }
  }

  const THEME = {
    legends: {
      text: {
        fontSize: 18
      }
    }
  };

  return(
    authenticated &&
    <>
      <SEO 
        title="Craft visualisations" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "about dataviz"]} 
      />
      <div className="min-h-100 flex flex-wrap justify-center py-32">
        <div 
        // linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)
          style={{
            backgroundImage: `linear-gradient(145deg, #1f2124 0%, #323537 100%)`, 
            minWidth: '400px',
            minHeight: '600px',
            maxWidth: '700px', 
            maxHeight: '1400px',
            borderRadius: '20px', 
            backgroundSize: 'cover'
          }}
          className="p-5 relative m-5"
        >
          <h1 className="text-6xl font-bold mb-10 pb-2 font-stephenson" style={{color: '#fff', lineHeight: 1.3}}>
            Workplace conflict costs employers <br/> <span style={{ background: 'linear-gradient(90deg, rgba(255,85,28,1) 31%, rgba(244,117,96,1) 100%)'}}>£28 billion</span> a year
          </h1>

          <img className="my-5" src={UkPercent} style={{}} />
          <h1 className="text-white text-base text-right">
            <span style={{ background: 'linear-gradient(90deg, rgba(255,85,28,1) 31%, rgba(244,117,96,1) 100%)'}}>9.7 million</span>  
            &nbsp;employees <br/> (out of 31 million) experienced <br/>
            conflict in 2018/2019.<br/>
          </h1>
          
          <div className="mt-14 mx-auto h-full" style={{minHeight: '400px', maxHeight: '600px', maxWidth: '560px'}}>
            <h1 className="text-gray-300 text-center font-bold text-3xl">How do these costs break down?</h1>
            <h3 className="text-gray-400 text-center -mb-24 md:-mb-10 text-lg">One square = £1 billion</h3>
            <ResponsiveWaffle
              data={COSTDATA}
              theme={THEME}
              total={28}
              rows={6}
              columns={5}
              fillDirection="top"
              padding={0}
              height={560}
              margin={{ top: 10, right: 10, bottom: 10, left: 240 }}
              //colors={{ scheme: 'blues' }}
              //colors={d => d.color}
              borderWidth={0.2}
              borderColor="#fff"
              animate={true}
              emptyColor="#e8e8e8"
              motionStiffness={90}
              motionDamping={11}
              legends={[
                {
                  anchor: 'left',
                  direction: 'column',
                  justify: false,
                  translateX: -240,
                  translateY: 0,
                  itemsSpacing: 5,
                  itemWidth: 70,
                  itemHeight: 20,
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  itemTextColor: '#e8e8e8',
                  symbolSize: 20
                }
              ]}
            />
          </div>
          
          <div className="absolute bottom-0 right-0 m-5 text-gray-500 text-xs text-right">
            <h1 className="font-extrabold">Dataviz.Shef</h1>
            <h1 className="">Source: The University of Sheffield - News</h1>
          </div>
        </div>

        <div 
          style={{backgroundImage: `linear-gradient(45deg, rgba(100,100,100,.7) 5%, rgba(30,30,60,.85) 96%), url(${Bg})`, maxWidth: '650px', maxHeight: '650px', height: '60vh', width: '60vh', borderRadius: '20px', backgroundSize: 'cover'}}
          className="p-5 relative"
        >
          <h1 className="text-5xl font-extrabold" style={{color: 'transparent', background: 'linear-gradient(315deg, rgba(47,255,43,1) 4%, rgba(0,160,255,1) 96%)', backgroundClip: 'text', WebkitBackgroundClip: 'text'}}>University of Sheffield researchers to help bring Green Industrial Revolution</h1>
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

export default VizWorkshop
