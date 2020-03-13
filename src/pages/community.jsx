import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/community_background"
// import { Link } from "gatsby"

const Community = () => (
  <Layout>
    <SEO 
      title="Community" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
    />
    
    <BackgroundSection className="items-center justify-center text-center">
      <div className="text-white" style={{fontFamily: "TUoS Blake"}}>
        <h1 className="text-5xl">Community</h1>
        <p className="text-lg mt-1 text-gray-100" style={{textShadow: "#ffffff 0px 0px 1px"}}>knowledge | connection | inspiration | resources | support</p>
      </div>

      <button className="mt-16 bg-gray-300 hover:bg-highlight_2 text-center hover:text-white text-gray-700 font-semibold py-2 px-6 border border-gray-400 rounded shadow">
        Discover
      </button>
     
      
    </BackgroundSection>
  
  </Layout>
)

export default Community
