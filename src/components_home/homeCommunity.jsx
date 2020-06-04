import React from 'react'
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import { MdKeyboardArrowRight, MdPeople } from "react-icons/md"
import { RiCalendarEventLine, RiBookReadLine, RiMenuAddLine } from "react-icons/ri"
import { ButtonWithArrow } from "../components_style/styled"
import ReactTooltip from 'react-tooltip'


const HomeCommunity = () => {
  
  return (
    <div id="home_community" className="ipadp:min-h-100 flex flex-wrap justify-center items-center py-10">
      <Fade>
        <div className="container mx-auto justify-center flex flex-wrap">
          <div className="text-6xl font-semibold text-gray-800 text-box w-full text-center" style={{fontFamily: "TUoS Stephenson"}}>Your community.</div>
          <Link to="/community" className="text-box mt-2 text-gray-500 hover:underline">Learn more <MdKeyboardArrowRight className="inline-block" />&#127881;</Link>
          {/* <p className="border-t-6 border-highlight_2 w-1/12 text-box"></p> */}
        </div>
      </Fade>
      <div className="flex flex-wrap text-gray-800 pt-10 pb-20 justify-center">
        
        <div className="md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 group">
          <Zoom bottom duration={700} delay={500}>
            <RiCalendarEventLine className="text-5xl" />
            <p className="text-xl font-bold py-3">Events</p>
            <div className="border-t-4 border-gray-700 py-3 text-gray-600 group-hover:text-gray-900">
              Discover a variety of events including talks and symposia, workshops, vis-coding clubs and data visualisation hackathons!
            </div>
            <Link to="/events">
              <ButtonWithArrow type="BlackButton">Upcoming events</ButtonWithArrow>
            </Link>
          </Zoom>
        </div>

        <div className="md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 group">
          <Zoom bottom duration={700} delay={750}>
            <RiBookReadLine className="text-5xl" />
            <p className="text-xl font-bold py-3">Training</p>
            <div className="border-t-4 border-gray-700 py-3 text-gray-600 group-hover:text-gray-900">
              Discover different training courses organised by the dedicated dataviz team to help you make the most of your data.
            </div>
            <ButtonWithArrow type="BlackButton" data-tip="" data-for="ReactTooltip1">Coming soon</ButtonWithArrow>
           
          </Zoom>
        </div>
      
        <div className="md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 group">
          <Zoom bottom duration={700} delay={1000}>
            <MdPeople className="text-5xl" />
            <p className="text-xl font-bold py-3">Support</p>
            <div className="border-t-4 border-gray-700 py-3 text-gray-600 group-hover:text-gray-900">
              Get in touch with us. It is natural that you have found something diffcult to understand or need more specific guidance and direction.
            </div>
            <ButtonWithArrow type="BlackButton" data-tip="" data-for="ReactTooltip1">Coming soon</ButtonWithArrow>
            <ReactTooltip id="ReactTooltip1" delayShow={500} delayHide={1000} effect="float">
              Why not join our slack channel and get live updates?
            </ReactTooltip>
          </Zoom>
        </div>
        
        <div className="md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 group">
          <Zoom bottom duration={700} delay={1250}>
            <div>
              <RiMenuAddLine className="text-5xl" />
              <p className="text-xl font-bold py-3">Contribution</p>
              <div className="border-t-4 border-gray-700 py-3 text-gray-600 group-hover:text-gray-900">
                We love to see people actively sharing their thought and creativity. We have prepared a tutorial for you to upload your own blog posts.
              </div>
            </div>
            <a href="https://github.com/researchdata-sheffield/dataviz-hub2/blob/master/README.md" target="_blank" rel="noopener noreferrer">
              <ButtonWithArrow type="BlackButton">Our repository</ButtonWithArrow>
            </a>
          </Zoom>
        </div>
      </div>
    </div>
    
  )

}

export default HomeCommunity

