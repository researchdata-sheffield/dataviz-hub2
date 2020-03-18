import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo"
import BackgroundSection from "../components_images/home_background";

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Home" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
    />
    
    <BackgroundSection className="flex flex-wrap" style={{height: "100vh", width: "100%"}}>
    <div className="flex w-full lg:w-5/12 text-white text-gray-800 overflow-hidden" style={{background: "rgba(255,255,255,.90)", }}>
      <div className="p-48">
        asdasdsd
      </div>
    </div>

    <div className="flex flex-wrap w-full lg:w-7/12 text-gray-100">
      dfdf
    </div>
    </BackgroundSection>
      


  </Layout>
)

export default IndexPage



