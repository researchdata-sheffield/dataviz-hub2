import React from "react"
import { Link } from "gatsby"
import BackgroundSection from "../components_images/about_background"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO 
      title="About" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
    />
    
    <BackgroundSection className="items-center justify-center text-center">
      <div className="text-white" style={{fontFamily: "TUoS Blake"}}>
        <h1 className="text-5xl font-bold" style={{textShadow: "#000000 0px 0px 20px"}}>Library · RSE · IT Services</h1>
        <p className="text-lg my-4 text-gray-100 font-semibold px-2" style={{textShadow: "#000000 0px 2px 20px"}}>Dataviz.Shef is a joint initiative between three groups.</p>
      </div>

      <button className="mt-16 bg-gray-300 hover:bg-highlight_2 text-center hover:text-white text-gray-700 font-semibold py-2 px-6 border border-gray-400 rounded shadow">
        <Link to="/community/#discover" >Learn more</Link>
      </button>
    </BackgroundSection>

    <div id="discover" className="container mx-auto py-32 text-gray-800 flex flex-wrap" style={{fontFamily: "TUoS Blake"}}>
      
      <div className="flex flex-wrap lg:mx-16">
        <div className="text-2xl w-full xs:w-full md:w-full lg:w-1/2 px-4">
          <p className="text-highlight_2 text-6xl text-center py-12">Stay tuned!</p>
          <p className="pb-12 text-gray-600">The most important part of the initiative is to build community around data visualisation, we hope to achieve this in a number of ways.</p>
          <p className="font-semibold pb-8">We’re working on developing a community communication framework, expanding and diversifying communication channels.</p>
   
        </div>

        <div className="w-full xs:w-full md:w-full lg:w-1/2 text-gray-600 text-xl px-4">
     
          <p className="pt-24"> We’ve started with a <Link ><b>TUoS google group</b></Link> which can be joined through a TUoS google account. <br />
            We have also added <Link ><b>slack channel</b></Link> for more informal communication and chat. Remember to say hello in our <i>#welcome channel</i>.</p>
          <p className="text-highlight_2 text-2xl py-12">Events: We’ll be hosting a variety of events including talks & symposia, workshops, vis-coding clubs and data visualisation hackathons!</p>
          <p className="text-gray-500">But just to give an idea, here&apos;s a selection of workshops in the pipeline: <br />
            <p className="pl-4"> <br />
            ~ Data visualisation in R <br />
            ~ R, htmlwidgets & Shiny  <br />
            ~ Dataviz using vegalite  <br /> </p>
          </p>
        </div>
      </div>
    </div>


  </Layout>
)

export default About
