import React from 'react'
import PropTypes from "prop-types"
import flowChartImg from "./flowChart.png"

/**
 * This component uses tailwindcss (https://tailwindcss.com/) framework for styling of some elements. 
 * Visit the website for reference of className.
 * E.g. className="p-5 relative" translates to "padding: 1.25rem; position: relative"
 */ 
const thumbnail = () => {
	return (
    <div 
        id="visualisation"
        style={{background: `url(${flowChartImg})`, maxWidth: '550px', maxHeight: '550px', minHeight: '550px', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', padding: '1.25rem'}}
      >
        <h1 className="mt-0 font-bold" style={{fontSize: '2.2rem', lineHeight: '1.2', color: 'white', textShadow: '0px 1px 10px #2f2f2f'}}>An interactive flowchart helps you choose a <span style={{background: 'linear-gradient(45deg, rgba(0, 171, 255, 0.64) 10%, rgba(56, 255, 0, 0.6) 100%)', padding: '0 .1rem', textShadow: 'none', fontWeight: '800'}}>statistical test</span> for two variables</h1>
        <div className="absolute right-0 m-5 text-xs text-right" style={{bottom: '25%', color: '#686868'}}>
          <p>ANOVA</p> 
          <p>T-Test</p>
          <p>Chi-squared Test</p>
          <p>Kruskal-Wallis</p>
          <p>Mann- Whitney</p>
          <p>Pearsons Correlation</p>
          <p>Spearmans correlation</p>
          <p>Median test</p>
          <p>...</p>
        </div>
        <h1 className="absolute bottom-0 left-0 m-5 text-gray-500 font-extrabold text-xs">Dataviz.Shef</h1>
        <h1 className="absolute bottom-0 right-0 m-5 text-gray-500 text-xs">Source: Statistical modelling learning path</h1>
      </div>
	)
}

export default thumbnail

thumbnail.propTypes = {
		data: PropTypes.any
	}