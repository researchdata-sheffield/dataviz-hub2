import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO 
      title="About" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
    />
    
    <h1>Hi from the About page</h1>
    <p>Welcome to page About</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
