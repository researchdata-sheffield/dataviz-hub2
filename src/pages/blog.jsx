import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO 
      title="Blog" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
    />
    
    <h1>Hi from the Blog page</h1>
    <p>Welcome to page Blog</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
