import React from "react"

import Layout from "../components/layout";
import Home_main from "../components_images/home_main_background"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Home" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
    />
    
    <div className="bg-local" style={{ width: "100%", height: "auto", display: "fixed" }}>
      <Home_main />
    </div>


    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>

  </Layout>
)

export default IndexPage



