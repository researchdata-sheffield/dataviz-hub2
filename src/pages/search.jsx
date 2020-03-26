import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/search_background"
import PropTypes from "prop-types"
import Search from "../components/search"

const searchPage = () => {
  

  return (
    <Layout>
      <SEO 
        title="Events" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "events"]} 
      />
      
      <BackgroundSection className="flex flex-wrap">
        
        <Search />
  
      </BackgroundSection>

    </Layout>
  )
}

export default searchPage

searchPage.propTypes = {
		data: PropTypes.any
  }
  
  