import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/search_background"
import PropTypes from "prop-types"
import Search from "../components/search"

const searchPage = ({location}) => {

  return (
    <Layout>
      <SEO 
        title="Search" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "dataviz.shef", "search dataviz"]} 
      />
      
      <BackgroundSection className="flex flex-wrap">
        
        <Search location={location} />
  
      </BackgroundSection>

    </Layout>
  )
}

export default searchPage

searchPage.propTypes = {
    data: PropTypes.any,
    location: PropTypes.any
  }
  
  