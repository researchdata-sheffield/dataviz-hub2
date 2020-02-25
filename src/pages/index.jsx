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
        <p className="text-white text-2xl">Write something <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /></p>
      <div className="text-white text-2xl">
       Data Visualisation Hub
      </div>
    </BackgroundSection>


    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>

  </Layout>
)

export default IndexPage



