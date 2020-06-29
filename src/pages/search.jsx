import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
//import BackgroundSection from "../components_images/search_background"
import PropTypes from "prop-types"
import Search from "../components/search"


const searchPage = ({location}) => {

  return (
    
    <>
      <SEO 
        title="Search" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "dataviz.shef", "search dataviz"]} 
      />
      <Header />
      <div className="flex flex-wrap">
        
        <Search location={location} />
  
      </div>
      <Footer />
    </>
  )
}

export default searchPage

searchPage.propTypes = {
    data: PropTypes.any,
    location: PropTypes.any
  }
  
  