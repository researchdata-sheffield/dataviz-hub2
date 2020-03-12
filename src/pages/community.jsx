import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/community_background"

const Community = () => (
  <Layout>
    <SEO 
      title="Community" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
    />
    
    <BackgroundSection className="items-center justify-center text-center">
      <div className="text-white" style={{fontFamily: "TUoS Blake"}}>
        <h1 className="text-5xl">Community</h1>
        <p className="text-lg mt-2">knowledge | connection | inspiration | resources | support</p>
      </div>
    </BackgroundSection>
  
  </Layout>
)

export default Community
