import React from "react"
import SEO from "../components/shared/seo"
import Header from "../components/shared/header"
import Footer from "../components/shared/footer"
//import BackgroundSection from "../components/images/searchBackground"
import PropTypes from "prop-types"
import SearchComponent from "../components/shared/search"


const Search = ({location}) => {

  return (
    <>
      <SEO 
        title="Search" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "dataviz.shef", "search dataviz"]} 
      />
      <Header />
      <div className="flex flex-wrap">
        <SearchComponent location={location} />
      </div>
      <Footer />
    </>
  )
}

export default Search

Search.propTypes = {
    data: PropTypes.any,
    location: PropTypes.any
  }
  
  