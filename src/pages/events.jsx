import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/events_background"
import PropTypes from "prop-types"
import { FaMapMarkerAlt } from "react-icons/fa"

function events({data: {allEventbriteEvents}}) {

  
  function todayDate() {
    var options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      timeZoneName: 'short'
    };
    
    var today = new Date();
    today = new Intl.DateTimeFormat('en-UK', options).format(today);
    return today;
  }

  return (
    <Layout>
      <SEO 
        title="Events" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "events"]} 
      />
      
      <BackgroundSection className="flex flex-wrap flex-grow-0 items-center justify-center content-center" style={{height: "100%", width: "100%"}}>
        
        <div className="w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 text-white p-8 text-gray-800 my-16 flex-column flex-wrap" style={{background: "rgba(255,255,255,.9)", height: "90vh"}}>
          <h1 className="inline-block text-3xl">Upcoming Events</h1>
          <div className="text-gray-500 mb-8" >Today: {todayDate()}</div>


          {allEventbriteEvents.edges.map(({node}) => {
            let description = node.description.text
            if(description.length >= 140) {
              description = description.substring(0,140).concat(" ...")
            }

            return (
              <a className="flex w-full rounded overflow-hidden shadow-md hover:shadow-xl bg-gray-100 my-4 text-gray-700 group" style={{minHeight: "20vh", maxHeight: "30vh", fontFamily: "TUoS Blake"}} href={node.url} key={node.id} target="_blank" rel="noopener noreferrer">
                <img className="w-3/12 group-hover:border-r-highlight_2 group-hover:border-r-4" src={node.logo.original.url} ></img>
                <div className="w-9/12 p-4">
                  <p className="font-semibold text-lg text-gray-900 group-hover:text-highlight_2">{node.name.text}</p>
                  <p className="text-gray-500 mt-1">{description}</p>
                  <p className="mt-4 group-hover:text-highlight_2">{node.start.local}</p>
                  <p className="flex items-center group-hover:text-highlight_2">{node.online_event && (<FaMapMarkerAlt className="mr-1" />)} {node.online_event && ("Online Event") }</p>
                  <p className="flex items-center group-hover:text-highlight_2">
                    {node.venue && ( <FaMapMarkerAlt className="mr-1" /> )} 
                    {node.venue && node.venue.name && (node.venue.name + ", ")} 
                    {node.venue && node.venue.address.address_1 && (node.venue.address.address_1 + ", ")} 
                    {node.venue && node.venue.address.city && (node.venue.address.city + ", ")}
                    {node.venue && node.venue.address.postal_code && (node.venue.address.postal_code)}
                  </p>

                </div>
              </a>
            
              
            )
        
          })}

        </div>
          
        <div className="w-full sm:w-full md:w-full lg:w-3/12 xl:w-3/12  text-gray-100 p-8 lg:my-16" style={{background: "rgba(0,0,0,.6)", height: "90vh"}}>
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
  query eventBrite {
    allEventbriteEvents(sort: {fields: start___local, order: ASC}, filter: {start: {local: {lt: "TODAY"}}}, limit: 3) {
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
            local(formatString: "dddd, DD MMMM YYYY @ hh:mm A", locale: "en-GB")
          }
        }
      }
    }
  }
`

