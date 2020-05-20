import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import BackgroundSection from "../components_images/events_background"
import PropTypes from "prop-types"
import UpcomingEvents from "../components_events/upcomingEvents"
import PastEvents from "../components_events/pastEvents"
import moment from "moment"


const events = ({data: {eventBrite, pastEvent}}) => {

  const [currentDate, setDate] = useState(moment().format('ddd DD MMMM YYYY, hh:mm A'));
  useEffect(() => {
    setDate(moment().format('ddd DD MMMM YYYY, hh:mm A'))
  }, [])

  return (
    <>
      <SEO 
        title="Events" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "dataviz events", "dataviz.shef"]} 
      />
      <Header />
     

      <BackgroundSection className="flex flex-wrap flex-grow-0 items-center justify-center content-center min-h-100" style={{backgroundAttachment: "fixed", }}>
        <div className="w-full lg:w-8/12 text-white px-12 lg:pt-6 pt-16 text-gray-800 lg:my-24 pb-16 overflow-auto border-t-8 border-red-700 min-h-70" style={{background: "rgba(255,255,255,.95)", }}>
          <h1 className="inline-block text-2xl font-semibold">Upcoming Events</h1>
          <div className="text-gray-500 mb-8" >Today: {currentDate}</div>
          <UpcomingEvents allEventbriteEvents={eventBrite} />
        </div>
        
        <PastEvents pastEvent={pastEvent} />    
  
      </BackgroundSection>
      
      <Footer />
    </>
  )
}

export default events

events.propTypes = {
		data: PropTypes.any
  }
  
  

export const query = graphql`
  query {
    eventBrite: 
    allEventbriteEvents(sort: {fields: start___local, order: ASC}, filter: {organization_id: {ne: "777"}}) {
      ...EventbriteEventsEdge
    }

    pastEvent: 
    allMdx(limit: 5, filter: {frontmatter: {category: {in: "Events"}, hide: {ne: "true"} }}, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          id
          frontmatter {
            date(formatString: "dddd, DD MMMM YYYY")
            title
            description
          }
        }
      }
    }
  
  }
`;




