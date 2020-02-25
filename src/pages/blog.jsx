import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/blog_background";

const Blog = () => (
  <Layout>
    <SEO 
      title="Blog" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
    />
    
    <BackgroundSection className="">
      <div className="mx-12 my-24">
        <p className="text-white text-2xl">Write something <br /> <br /> <br /> <br /> <br /></p>
      </div>
        
      <div className="text-white text-2xl">
       Blog
      </div>
    </BackgroundSection>
  </Layout>
)

export default Blog
