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
    
    <BackgroundSection className="">
      <div className="text-white md:p-32 px-4 py-10" style={{fontFamily: "TUoS Blake"}}>
        <h1 className="text-5xl">Data Visualisation Hub <br />The University of Sheffield</h1>
        <p className="text-lg mt-1 text-gray-100" style={{textShadow: "#000000 0px 0px 1px"}}>Promoting and building community around data visualisation at the University of Sheffield. </p>
      </div>
    </BackgroundSection>
      


  </Layout>
)

export default IndexPage



