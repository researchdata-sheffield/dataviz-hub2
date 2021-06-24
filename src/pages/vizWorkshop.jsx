/* eslint-disable no-undef */
import React, { useState, useEffect } from "react"
import SEO from "../components/shared/seo"
import { ResponsiveMarimekko } from '@nivo/marimekko'
import Snack from "../images/visualisation/snacks.svg"
import AUFlag from "../images/visualisation/australia.svg"
import UKFlag from "../images/visualisation/united-kingdom.svg"

const VizWorkshop = () => {
  const [authenticated, setAuth] = useState(process.env.NODE_ENV === "development" ?? false); 

  useEffect(() => {
    authentication();

    return () => {
    }
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

  const data = [
    {
      "country": 'United Kingdom',
      "Increased": 53,
      "Decreased": 26,
      "NoChanges": 20,
      "population": 66.65
    },
    {
      "country": 'Australia',
      "Increased": 49,
      "Decreased": 25,
      "NoChanges": 26,
      "population": 25.36
    }
  ]



  return(
    authenticated &&
    <>
      <SEO 
        title="Craft visualisations" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "about dataviz"]} 
      />
      <div className="min-h-100 flex flex-wrap space-y-10 space-x-10 justify-center py-32">

        <div 
          style={{backgroundColor: '#FAD961', backgroundImage: 'linear-gradient(315deg, #FAD961 0%, #ff6e00 100%)', maxWidth: '650px', maxHeight: '650px', height: '60vh', width: '60vh', borderRadius: '0px', backgroundSize: 'cover'}}
          className="p-5 relative"
        >
          <h1 className="text-2xl font-bold" style={{color: 'white', lineHeight: '1.25'}}>
            People turned to <span style={{background: 'linear-gradient(90deg, #7B3F00 31%, rgb(255, 37, 0) 100%)'}}>sweets, chocolate and salty snacks</span> during the Covid-19 lockdowns in the UK and Australia
          </h1>
          <h3 className="text-white mt-2 text-sm">“Increased snack intake was associated with higher levels of perceived stress ...”</h3>
          
          <div className="w-full flex flex-wrap relative z-10" style={{height: '350px'}}>
            <ResponsiveMarimekko
              data={data}
              id="country"
              value="population"
              dimensions={[
                {
                  id: 'Increased intake',
                  value: 'Increased'
                },
                {
                  id: 'Decreased intake',
                  value: 'Decreased'
                },
                {
                  id: 'No changes',
                  value: 'NoChanges'
                }
              ]}
              enableGridY={false}
              innerPadding={9}
              axisTop={null}
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 10,
                legend: 'Country population (million)',
                legendOffset: 36,
                legendPosition: 'middle'
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Respondent %',
                legendOffset: -40,
                legendPosition: 'middle'
              }}
              margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
              colors={{ scheme: 'yellow_green_blue' }}
              borderWidth={0}
              borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
              defs={[
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'rgba(255, 255, 255, 1)',
                  color: '#7fcdbb',
                  rotation: -45,
                  lineWidth: 4,
                  spacing: 8
                }
              ]}
              fill={[
                {
                  match: {
                    id: 'Increased intake'
                  },
                  id: 'lines'
                }
              ]}
              tooltip={function(e){
                let country = e.bar.datum.data.country;
                let flag = country == "United Kingdom" ? UKFlag : AUFlag;

                return React.createElement(
                  'div',
                  {className: 'bg-white p-2 rounded-md text-gray-800'},
                  React.createElement('img', {src: flag, style: {maxWidth: '20px'}}),
                  ` ${e.bar.id}: ${e.bar.value}%`
                )
              }}
              motionConfig="wobbly"
              legends={[
                  {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 80,
                    itemsSpacing: 0,
                    itemWidth: 140,
                    itemHeight: 18,
                    itemTextColor: '#555',
                    itemDirection: 'right-to-left',
                    itemOpacity: 1,
                    symbolSize: 20,
                    symbolShape: 'square',
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemTextColor: '#000'
                        }
                      }
                    ]
                  }
              ]}
            />
          </div>
          
          <img src={Snack} alt="Snack" className="absolute bottom-0 right-0 m-6" style={{opacity: '0.07', maxWidth: '150px'}} />
          <h1 className="absolute bottom-0 left-0 m-5 text-gray-700 font-extrabold text-xs">Dataviz.Shef</h1>
          <h1 className="absolute bottom-0 right-0 m-5 text-gray-700 text-xs">Source: The University of Sheffield - News</h1>
        </div>

      </div>
    </>
  )
}

export default VizWorkshop
