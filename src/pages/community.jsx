import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/community_background"
import { Link } from "gatsby"
import com_1 from "../images/community/com_1.jpg"
import com_2 from "../images/community/com_2.jpg"
import google from "../images/community/google.png"

const Community = () => (
  <Layout>
    <SEO 
      title="Community" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
    />
    
    <BackgroundSection className="items-center justify-center text-center">
      <div className="text-white" style={{fontFamily: "TUoS Blake"}}>
        <h1 className="text-5xl font-bold leading-tight">Community at Dataviz.Shef</h1>
        <p className="text-xl mt-3 text-gray-100" style={{textShadow: "#000000 0px 0px 1px"}}>knowledge | connection | inspiration | resources | support</p>
      </div>

      <Link to="/community/#discover" >
        <button className="mt-16 mr-10 bg-gray-300 hover:bg-highlight_2 text-center hover:text-white text-gray-700 font-semibold py-2 px-5 border border-transparent shadow">Discover</button>
      </Link>
      <Link to="/community/#joinus">
        <button className="mt-16 bg-gray-300 hover:bg-highlight_2 text-center hover:text-white text-gray-700 font-semibold py-2 px-5 border border-transparent shadow">Join community</button>
      </Link>
    </BackgroundSection>

    <div id="discover" className="container mx-auto py-32 text-gray-800 flex flex-wrap" style={{fontFamily: "TUoS Blake"}}>
      
      <div className="flex flex-wrap lg:mx-16">
        <div className="text-2xl w-full xs:w-full md:w-full lg:w-1/2 px-4">
          <p className="text-highlight_2 text-6xl text-center py-12">Stay tuned!</p>
          <p className="pb-12 text-gray-600">The most important part of the initiative is to build community around data visualisation, we hope to achieve this in a number of ways.</p>
          <p className="font-semibold pb-8">We’re working on developing a community communication framework, expanding and diversifying communication channels.</p>
          <img className="my-24" src={com_2} style={{borderRadius: "50%", minHeight: "45vh", maxHeight: "55vh", objectFit: "cover", objectPosition: "center",}} />
        </div>

        <div className="w-full xs:w-full md:w-full lg:w-1/2 text-gray-600 text-xl px-4">
          <img src={com_1} style={{borderRadius: "20%", minHeight: "45vh", maxHeight: "55vh", objectFit: "cover", objectPosition: "center",}} />
          <p className="pt-24"> We’ve started with a <Link to="/community/#joinus"><b>TUoS google group</b></Link> which can be joined through a TUoS google account. <br />
            We have also added <Link to="/community/#joinus"><b>slack channel</b></Link> for more informal communication and chat. Remember to say hello in our <i>#welcome channel</i>.</p>
          <p className="text-highlight_2 text-2xl py-12">Events: We’ll be hosting a variety of events including talks & symposia, workshops, vis-coding clubs and data visualisation hackathons!</p>
          <p className="text-gray-500">But just to give an idea, here&apos;s a selection of workshops in the pipeline: <br />
            <p className="pl-4"> <br />
            ~ Data visualisation in R <br />
            ~ R, htmlwidgets & Shiny  <br />
            ~ Dataviz using vegalite  <br /> </p>
          </p>
        </div>
      </div>
      

      <div id="joinus" className="lg:p-16 flex flex-wrap justify-center content-center mx-auto transition ease-in-out duration-2000">
        <div className="text-highlight_2 text-6xl w-full p-12 lg:px-16">Join us.</div>
  
        <div className="max-w-md rounded overflow-hidden shadow-lg mx-6 lg:mx-16 my-4 hover:shadow-2xl group flex relative">
          <a href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group" target="_blank" rel="noopener noreferrer" className="hover:opacity-25">
          <img className="w-full" src={google} alt="Google Group" />
            <div className="px-6 pt-8">
              <div className="font-semibold text-xl mb-2 text-center text-gray-500">Google group</div>
              <p className="text-gray-700 text-base px-4 lg:px-10 py-4 text-center">Sign in use your Sheffield Google account, Join the TUoS google group.</p>
            </div>
          </a>

          <a href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group" target="_blank" rel="noopener noreferrer" 
            className="hidden group-hover:block absolute justify-center content-center text-center py-1 px-10 shadow-sm text-xl text-white bg-black hover:bg-highlight_2"
            style={{ position: "absolute", top: "74%", left: "50%", transform: "translateX(-50%) translateY(-50%)"}}
          >
          Join group  
          </a>
        </div>

        <div className="max-w-md rounded overflow-hidden shadow-lg mx-6 lg:mx-16 my-4 hover:shadow-2xl group flex relative">
          <a href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group" target="_blank" rel="noopener noreferrer" className="hover:opacity-25">
            <img className="w-full py-24 px-12" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="Slack" />
            <div className="px-6">
              <div className="font-semibold text-xl text-center text-gray-500 mb-2">shef-dataviz.slack</div>
                <p className="text-gray-700 text-base p-4 text-center">Sign in use your Sheffield University email, Say hello in our <b>#welcome channel</b>.</p>
            </div>
          </a>

          <a href="https://shef-dataviz.slack.com/join/signup" target="_blank" rel="noopener noreferrer" 
            className="hidden group-hover:block absolute justify-center content-center text-center py-1 px-16 shadow-sm text-xl text-white bg-black hover:bg-highlight_2"
            style={{ position: "absolute", top: "74%", left: "50%", transform: "translateX(-50%) translateY(-50%)"}}
          >
          Sign up
          </a>

        </div>
      </div>

      <div className="lg:px-16 pt-24 pb-16 text-gray-600 text-2xl">
          <p className="text-highlight_2 text-5xl px-2">Contributing!</p>
          <p className="p-6">We are constantly looking for new ideas and suggestions for events, workshops or tutorials. 
            Feel free to get in touch with us through the google group or slack team with any suggestions. 
            We will also be putting together more formal contributing guidance should you wish to contribute to our online resources
            directly through <a className="text-highlight_2 font-semibold" href="https://github.com/researchdata-sheffield/dataviz-hub2" target="_blank" rel="noopener noreferrer">github</a> including blogposts and turtorials.</p>
      </div>


    </div>

  </Layout>
)

export default Community