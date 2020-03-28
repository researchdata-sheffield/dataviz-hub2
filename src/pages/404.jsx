import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import BackgroundSection from "../components_images/404_background"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <> 
    <SEO 
      title="404 Not found" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "404 - Not found"]} 
    />
    <Header />
    <BackgroundSection className="items-center justify-center text-center">
      <div className="text-white px-4" style={{fontFamily: "TUoS Blake"}}>
        <h1 className="text-5xl font-bold leading-tight">Page Not Found</h1>
        <p className="text-xl mt-3 text-gray-100" style={{textShadow: "#000000 0px 0px 1px"}}>Oops! The page you are looking for has been removed or relocated.</p>
        <Link to="/search" >
        <button className="mt-16 mr-10 bg-gray-300 hover:bg-highlight_2 text-center hover:text-white text-gray-700 font-semibold py-2 px-5 border border-transparent shadow">Try search</button>
        </Link>
      </div>
    </BackgroundSection>
    <Footer />
  </>
)

export default NotFoundPage
