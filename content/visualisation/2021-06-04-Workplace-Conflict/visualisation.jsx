import React from 'react'
import PropTypes from "prop-types"
import { ResponsiveWaffle } from '@nivo/waffle'
import depression from "./depression.png"

const THEME = {
  legends: {
    text: {
      fontSize: 18
    }
  }
};

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

const visualisation = () => {

	return (
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

      <img className="my-5" src={depression} />
      <h1 className="text-white text-base text-right">
        <span style={{ background: 'linear-gradient(90deg, rgba(255,85,28,1) 31%, rgba(244,117,96,1) 100%)'}}>9.7 million</span>  
        &nbsp;employees <br/> (out of 31 million) experienced <br/>
        conflict in 2018/2019.<br/>
      </h1>
      
      <div className="mt-14 mx-auto h-full" style={{minHeight: '400px', maxHeight: '600px', maxWidth: '560px'}}>
        <h1 className="text-gray-300 text-center font-bold text-3xl">How do these costs break down?</h1>
        <h3 className="text-gray-400 text-center -mb-10 md:-mb-5 text-lg">One square = £1 billion</h3>
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
        <h1 className="font-extrabold text-lg">Dataviz.Shef</h1>
        <h1>Source: The University of Sheffield - News</h1>
      </div>
    </div>
	)
}

export default visualisation

visualisation.propTypes = {
		data: PropTypes.any
	}