import React from "react"
import SEO from "../components/shared/seo"
import PropTypes from "prop-types"
import SearchComponent from "../components/shared/search"


const Search = ({location}) => {

  return (
    <>
      <SEO 
        title="Search" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "dataviz.shef", "search dataviz"]} 
      />
      <div className="flex flex-wrap">
        <SearchComponent location={location} />
      </div>
    </>
  )
}

export default Search

Search.propTypes = {
    data: PropTypes.any,
    location: PropTypes.any
  }
  
  