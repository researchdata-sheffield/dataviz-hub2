import React from "react"
import SEO from "../components/shared/seo"
//import conflict from "../images/visualisation/conflict.svg"
//import Depression from "../images/visualisation/depression.svg"
//import Bg from "../images/visualisation/conflict.jpg"
import { ResponsiveWaffle } from '@nivo/waffle'
import UkPercent from "../images/visualisation/depression.png"

const Visualisation = () => {
  
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

  const THEME = {
    legends: {
      text: {
        fontSize: 14
      }
    }
  };



  return(
    <>
      <SEO 
        title="Visualisation" 
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
          className="p-5 relative"
        >
          <h1 className="text-6xl font-bold mb-10 pb-2 font-stephenson" style={{color: '#fff', lineHeight: 1.3}}>
            Workplace conflict costs employers <br/> <span style={{ background: 'linear-gradient(90deg, rgba(255,85,28,1) 31%, rgba(244,117,96,1) 100%)'}}>£28 billion</span> a year
          </h1>

          <img className="my-5" src={UkPercent} style={{}} />
          <h1 className="text-white text-sm text-right">
            <span style={{ background: 'linear-gradient(90deg, rgba(255,85,28,1) 31%, rgba(244,117,96,1) 100%)'}}>9.7 million</span>  
            &nbsp;employees <br/> (out of 31 million) experienced <br/>
            conflict in 2018/2019.<br/>
          </h1>
          
          <div className="mt-12 mx-auto h-full" style={{minHeight: '400px', maxHeight: '600px', maxWidth: '550px'}}>
            <h1 className="text-gray-300 text-center font-bold text-xl">Distribution of costs</h1>
            <h3 className="text-gray-400 text-center -mb-24 md:-mb-10">One square = 1 billion</h3>
            <ResponsiveWaffle
              data={COSTDATA}
              theme={THEME}
              total={28}
              rows={6}
              columns={5}
              fillDirection="top"
              padding={0}
              height={560}
              margin={{ top: 10, right: 10, bottom: 10, left: 200 }}
              //colors={{ scheme: 'blues' }}
              //colors={d => d.color}
              borderWidth={0.5}
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
                  translateX: -200,
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
      </div>
    </>
  )
}

export default Visualisation
