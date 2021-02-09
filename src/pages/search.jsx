import React from "react"
import SEO from "../components/shared/seo"
import Header from "../components/shared/header"
import Footer from "../components/shared/footer"
//import BackgroundSection from "../components/images/searchBackground"
import PropTypes from "prop-types"
import Search from "../components/shared/search"


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
  
  