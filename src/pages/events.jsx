import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/events_background"

const Events = () => (
  <Layout>
    <SEO 
      title="Events" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "events"]} 
    />
    
    <BackgroundSection className="">
      <div className="mx-12 my-24">
        <p className="text-white text-2xl">Write something <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /></p>
      </div>
        
      <div className="text-white text-2xl">
       Data Visualisation Hub - EVENTS
      </div>
    </BackgroundSection>


  </Layout>
)

export default Events
