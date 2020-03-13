import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/events_background"
import PropTypes from "prop-types"
import UpcomingEvents from "../components_events/upcomingEvents"

function events({data: {eventBrite}}) {
  

  return (
    <Layout>
      <SEO 
        title="Events" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "events"]} 
      />
      
      <BackgroundSection className="flex flex-wrap flex-grow-0 items-center justify-center content-center" style={{height: "100%", width: "100%"}}>
        
        <UpcomingEvents allEventbriteEvents={eventBrite} />
          
        <div className="w-full sm:w-full md:w-full lg:w-3/12 xl:w-3/12 text-gray-100 px-8 pt-8 pb-16 lg:py-16" style={{background: "rgba(0,0,0,.6)", }}>
          <h1 className="text-xl">Past Events</h1>
          <p className="text-center mt-32">Coming soon</p>
          
          
        </div>
      </BackgroundSection>

    </Layout>
  )
}

export default events

events.propTypes = {
		pageContext: PropTypes.any,
		data: PropTypes.any
  }
  
  
export const query = graphql`
  query {
    eventBrite: allEventbriteEvents(sort: {fields: start___local, order: ASC}, filter: {start: {local: {lt: "TODAY"}}}, limit: 3) {
      edges {
        node {
          id
          url
          name{
            text
          }
          description {
            text
          }
          logo {
            original {
              url
            }
          }
          venue {
            name
            address {
              address_1
              city
              postal_code
            }
          }
          online_event
          start {
            local(formatString: "ddd, DD MMMM YYYY @ hh:mm A", locale: "en-GB")
          }
        }
      }
    }

    pastEvent: 
  }
`