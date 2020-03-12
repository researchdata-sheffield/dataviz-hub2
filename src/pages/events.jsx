import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/events_background"

function events() {

  return (
    <Layout>
      <SEO 
        title="Events" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "events"]} 
      />
      
      <BackgroundSection className="flex flex-wrap items-center justify-center content-center" style={{height: "100vh", width: "100%"}}>
        
        <div className="w-7/12 text-white p-8" style={{background: "rgba(255,255,255,.8)", height: "80vh"}}>
          <h1 className="text-gray-800 text-3xl">Upcoming Events</h1>

          <p className="text-center mt-32 text-gray-700">Coming soon</p>
        </div>
          
        <div className="w-3/12 text-gray-100 p-8" style={{background: "rgba(0,0,0,.6)", height: "80vh"}}>
          <h1 className="text-xl">Past Events</h1>
          <p className="text-center mt-32">Coming soon</p>
          
          
        </div>
      </BackgroundSection>

    </Layout>
  )
}

export default events


