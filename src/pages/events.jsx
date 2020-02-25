import React from "react"
import { Link } from "gatsby"

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
        <p className="text-white text-2xl">Write something <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /></p>
      <div className="text-white text-2xl">
       Data Visualisation Hub - EVENTS
      </div>
    </BackgroundSection>

    <h1>Hi from the Events page</h1>
    <p>Welcome to page Events</p>
    <Link to="/">Go back to the homepage</Link>


  </Layout>
)

export default Events
