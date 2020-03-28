import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import BackgroundSection from "../components_images/events_background"
import PropTypes from "prop-types"
import UpcomingEvents from "../components_events/upcomingEvents"
import PastEvents from "../components_events/pastEvents"

const events = ({data: {eventBrite, pastEvent}}) => {
  

  return (
    <>
      <SEO 
        title="Events" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "dataviz events", "dataviz.shef"]} 
      />
      <Header />
      <BackgroundSection className="flex flex-wrap flex-grow-0 items-center justify-center content-center" style={{height: "100%", width: "100%"}}>
        
        <UpcomingEvents allEventbriteEvents={eventBrite} />
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
    allEventbriteEvents(sort: {fields: start___local, order: ASC}, filter: {end: {local: {gt: "2020-03-14"}}},) {
      edges {
        node {
          id
          url
          name{
            text
          }
          description {
            text
            html
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
          summary
          start {
            local(formatString: "ddd DD MMMM YYYY, hh:mm A", locale: "en-GB")
          }
        }
      }
    }

    pastEvent: 
    allMdx(limit: 5, filter: {frontmatter: {category: {in: "Events"}}}, sort: {order: DESC, fields: frontmatter___date}) {
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
            date(formatString: "ddd, DD MMMM YYYY")
            title
            description
          }
        }
      }
    }
  
  }
`;




