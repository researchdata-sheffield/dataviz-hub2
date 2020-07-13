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
    <div id="home_community" className="ipadp:min-h-100 flex flex-wrap justify-center items-center relative pb-20">
      <Fade>
        <div className="container mx-auto justify-center flex flex-wrap">
          <div className="text-5xl font-semibold text-gray-800 w-full text-center" style={{fontFamily: "TUoS Stephenson"}}>Your community.</div>
          <Link to="/community" className=" mt-2 text-gray-500 hover:underline">Learn more <MdKeyboardArrowRight className="inline-block" />&#127881;</Link>
          {/* <p className="border-t-6 border-highlight_2 w-1/12"></p> */}
        </div>
      </Fade>
      <div className="flex flex-wrap text-gray-800 pt-10 pb-20 justify-center">
        
        <div className="md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 group">
          <Zoom bottom duration={700} delay={500}>
            <RiCalendarEventLine className="text-3xl" />
            <p className="font-bold py-3">Events</p>
            <div className="text-sm border-t-2 border-gray-700 py-3 text-gray-600 group-hover:text-gray-900">
              Discover a variety of events including talks and symposia, workshops, vis-coding clubs and data visualisation hackathons!
            </div>
            <Link to="/events">
              <ButtonWithArrow className="rounded-full text-sm" type="BlackButton">Upcoming events</ButtonWithArrow>
            </Link>
          </Zoom>
        </div>

        <div className="md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 group">
          <Zoom bottom duration={700} delay={750}>
            <RiBookReadLine className="text-3xl" />
            <p className="font-bold py-3">Training</p>
            <div className="text-sm border-t-2 border-gray-700 py-3 text-gray-600 group-hover:text-gray-900">
              Discover different training courses organised by the dedicated dataviz team to help you make the most of your data.
            </div>
            <ButtonWithArrow className="rounded-full text-sm" type="BlackButton" data-tip="" data-for="ReactTooltip1">Coming soon</ButtonWithArrow>
           
          </Zoom>
        </div>
      
        <div className="md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 group">
          <Zoom bottom duration={700} delay={1000}>
            <MdPeople className="text-3xl" />
            <p className="font-bold py-3">Support</p>
            <div className="text-sm border-t-2 border-gray-700 py-3 text-gray-600 group-hover:text-gray-900">
              Get in touch with us. It is natural that you have found something diffcult to understand or need more specific guidance and direction.
            </div>
            <ButtonWithArrow className="rounded-full text-sm" type="BlackButton" data-tip="" data-for="ReactTooltip1">Coming soon</ButtonWithArrow>
            <ReactTooltip id="ReactTooltip1" delayShow={500} delayHide={1000} effect="float">
              Why not join our slack channel and get live updates?
            </ReactTooltip>
          </Zoom>
        </div>
        
        <div className="md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 group">
          <Zoom bottom duration={700} delay={1250}>
            <div>
              <RiMenuAddLine className="text-3xl" />
              <p className="font-bold py-3">Contribution</p>
              <div className="text-sm border-t-2 border-gray-700 py-3 text-gray-600 group-hover:text-gray-900">
                We love to see people actively sharing their thought and creativity. We have prepared a tutorial for you to upload your own blog posts.
              </div>
            </div>
            <a href="https://github.com/researchdata-sheffield/dataviz-hub2/blob/master/README.md" target="_blank" rel="noopener noreferrer">
              <ButtonWithArrow className="rounded-full text-sm" type="BlackButton">Our repository</ButtonWithArrow>
            </a>
          </Zoom>
        </div>
      </div>
      {/* <div className="w-full absolute bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#000" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,181.3C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}
    </div>
    
  )

}

export default HomeCommunity
