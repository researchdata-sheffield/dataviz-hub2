import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import BackgroundSection from "../components_images/about_background"
import SEO from "../components/seo"
import RSE from "../images/about/rse.png"
import ITS from "../images/about/its.png"
import ORDA from "../images/about/orda_logo.png"
import scroll_To from 'gatsby-plugin-smoothscroll'
import Bounce from 'react-reveal/Bounce'
import Roll from 'react-reveal/Roll'
import LightSpeed from 'react-reveal/LightSpeed'


const About = () => (
  <>
    <SEO 
      title="About" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "about dataviz"]} 
    />
    <Header />
    <BackgroundSection className="items-center justify-center text-center">
      <Bounce cascade delay={700} duration={2000}>
        <div className="text-white" style={{fontFamily: "TUoS Blake"}}>
          <h1 className="text-5xl font-bold " style={{textShadow: "#000000 0px 0px 10px"}}>Library · IT Services · RSE</h1>
          <p className="text-lg my-4 text-gray-100 font-semibold px-2" style={{textShadow: "#000000 0px 2px 10px"}}>Dataviz.Shef is a joint initiative between three partners.</p>
        </div>

        <div onClick={() => scroll_To('#more')}>
          <button className="mt-16 bg-gray-300 hover:bg-highlight_2 text-center hover:text-white text-gray-700 font-semibold py-2 px-6 border-2 border-transparent shadow">Learn more</button>
        </div>
      </Bounce>
    </BackgroundSection>

    <div id="more" className="container pt-12 pb-24 text-gray-800 mx-auto flex flex-wrap" style={{fontFamily: "TUoS Blake"}}>
      <div className="flex flex-wrap mx-auto justify-center content-center border-solid border-gray-100 border-b-2"> 
        <Roll>
          <a className="max-w-xs rounded overflow-hidden my-4 p-6 flex flex-wrap justify-center content-center w-full sm:w-1/3" href="https://www.sheffield.ac.uk/library/index" target="_blank" rel="noopener noreferrer">
            <p className="font-medium text-4xl leading-tight" style={{fontFamily: "TUoS Stephenson"}}>The<br />University<br />Library.</p>
          </a>
          <a className="max-w-xs rounded overflow-hidden my-4 p-6 flex flex-wrap justify-center content-center w-full sm:w-1/3" href="https://www.sheffield.ac.uk/it-services" target="_blank" rel="noopener noreferrer">
          <img src={ITS}/>
          </a>
          <a className="max-w-xs rounded overflow-hidden my-4 p-6 flex flex-wrap justify-center content-center w-full sm:w-1/3" href="https://rse.shef.ac.uk/" target="_blank" rel="noopener noreferrer">
            <img src={RSE} />
          </a>
        </Roll>
      </div>

      <div className="flex flex-wrap text-gray-600 text-xl px-3 lg:px-48 py-16">
        <LightSpeed>
          <p className="text-2xl"><b className="text-highlight_2">Dataviz.Shef</b> is a joint initiative between <b>The University Library</b>, <b>IT Services</b>, and <b>Research Software Engineering (RSE)</b>.
            This community website exists to provide research staff and students at the University of Sheffield with information and inspiration about the visual presentation of data.
          </p>
          
          <p className="pt-8 pb-16 text-gray-600">Visualisation has always been at the core of extracting understanding from data, but powerful, modern, open source, interactive and web-based visualisation tools have 
            revolutionised the potential for research data impact. We are here to help to unlock the potential of your data.
          </p>
          
          <div className="pb-16 text-xl">
            <p className="pb-16">In 2017, <b>ORDA (Online Research Data)</b> was launched, a free platform for all University of Sheffield research staff and students to share their datasets, code, presentations, 
              posters, grey literature and other non-traditional research outputs. As part of ORDA, we&apos;ve developed a data visualisation showcase site where researchers are able to host 
              interactive data visualisations and also link them to reposited data in ORDA. 
            </p>
            <a href="https://orda.shef.ac.uk/" target="_blank" rel="noopener noreferrer"><img src={ORDA} className="shadow-lg mx-auto" style={{maxWidth: "35vh"}} /></a>
          </div>
          
          <p className="text-highlight_2 text-4xl py-8">Contribute</p>  
          
          <p>From ideas to content for the ORDA showcase, our blog or Dataviz documentation, contributions are open to all. For the moment just get in touch with us through 
            the <a href="mailto:rdm@sheffield.ac.uk" target="_blank" rel="noopener noreferrer">email</a>, <Link to="/community/#joinus">google group</Link> or <Link to="/community/#joinus">slack team</Link>.
          </p>
        </LightSpeed>
      </div>
    
    </div>
    <Footer />
  </>
)

export default About
