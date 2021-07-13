import React from 'react'
import PropTypes from "prop-types"
import { ResponsiveMarimekko } from '@nivo/marimekko'
import Snack from "./snacks.svg"
import AUFlag from "./australia.svg"
import UKFlag from "./united-kingdom.svg"

export const data = [
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

/**
 * This component uses tailwindcss (https://tailwindcss.com/) framework for styling of some elements. 
 * Visit the website for reference of className.
 * E.g. className="p-5 relative" translates to "padding: 1.25rem; position: relative"
 */ 
const marimekkoPlot = () => {
  const plotTitle = {
    color: 'white',
    lineHeight: 1.25,
    fontSize: '1.5rem',
    fontWeight: 700
  }

  const visWrapper = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 10,
    height: '350px'
  }

  const sourceInfo = {
    position: 'absolute',
    bottom: 0,
    margin: '1.25rem',
    fontSize: '0.75rem',
    color: 'rgb(55, 65, 81)'
  }


	return (
    <div 
      id="current-vis"
      style={{backgroundColor: '#FAD961', backgroundImage: 'linear-gradient(315deg, #FAD961 0%, #ff6e00 100%)', minHeight: '550px', height: '100%', maxWidth: '550px', borderRadius: '20px', backgroundSize: 'cover', padding: '1.25rem', position: 'relative'}}
    >
      <h1 style={plotTitle}>
        People turned to <span style={{background: 'linear-gradient(90deg, #7B3F00 31%, rgb(255, 37, 0) 100%)'}}>sweets, chocolate and salty snacks</span> during the Covid-19 lockdowns in the UK and Australia
      </h1>
      <h3 style={{color: 'white', marginTop: '0.5rem', fontSize: '0.875rem'}}>“Increased snack intake was associated with higher levels of perceived stress ...”</h3>
      
      <div style={visWrapper}>
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
      <img src={Snack} alt="Snack" style={{opacity: '0.07', maxWidth: '150px', position: 'absolute', bottom: 0, right: 0, margin: '1.5rem'}}  />
      <h1 style={{fontWeight: 800, left: 0, ...sourceInfo}}>Dataviz.Shef</h1>
      <h1 style={{right: 0, ...sourceInfo}}>Source: The University of Sheffield - News</h1>
    </div>
	)
}

export default marimekkoPlot

marimekkoPlot.propTypes = {
		data: PropTypes.any
	}