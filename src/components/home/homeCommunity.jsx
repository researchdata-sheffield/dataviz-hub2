import React, { useState } from 'react'
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import { MdKeyboardArrowRight, MdPeople } from "react-icons/md"
import { RiCalendarEventLine, RiBookReadLine, RiMenuAddLine } from "react-icons/ri"
import { ButtonWithArrow } from "../style/styled"
//import ReactTooltip from 'react-tooltip'


const HomeCommunity = () => {
  const cardClasses = "w-4/5 md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-3 transition duration-500 group relative"
  const cardTextClasses = "text-sm xl:text-base border-t-1 border-gray-300 py-3 text-gray-600 group-hover:text-gray-900"
  const buttonClasses = "rounded-full text-xs lg:text-sm mt-5 lg:mt-10"
  const [bgColour, setColour] = useState('#fff');
  const [getHelp, setHelp] = useState(false);


  return (
    <div id="home_community" className="ipadp:min-h-110 flex flex-wrap justify-center items-center relative" style={{transition: '.5s ease', background: `linear-gradient(180deg, ${bgColour} 0%, #fff 60%)`, backgroundColor: `${bgColour}`}}>
      <Fade>
        <div className="container mx-auto justify-center flex flex-wrap mt-24">
          <div className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 w-full text-center px-4">
            {/* <h1 style={{background: 'linear-gradient(to right, #30CFD0 0%, #330867 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: "TUoS Stephenson"}}>YOUR COMMUNITY.</h1> */}
            <h1 style={{fontFamily: "TUoS Stephenson"}}>YOUR COMMUNITY. </h1>
          </div>
          <Link to="/community" className="mt-1 text-med xl:text-lg text-gray-600 hover:underline">Learn more <MdKeyboardArrowRight className="inline-block" /> 😃</Link>
          {/* <p className="border-t-6 border-highlight_2 w-1/12"></p>*/}
        </div>
      </Fade>
      
      <div className="flex flex-wrap text-black md:-mt-16 pb-20 justify-center">
        <div className={cardClasses} onMouseEnter={() => setColour('#fed7d7')} onMouseLeave={() => setColour('#fff')}>
          <Slide bottom duration={200}>
            <RiCalendarEventLine className="text-3xl" />
            <p className="font-bold py-3">Events</p>
            <div className={cardTextClasses}>
              Discover a variety of events including talks and symposia, workshops, vis-coding clubs and data visualisation hackathons!
            </div>
            <Link to="/events">
              <ButtonWithArrow className={`${buttonClasses} group-hover:bg-red-500`} type="BlackButton">Upcoming events</ButtonWithArrow>
            </Link>
          </Slide>
        </div>

        <div className={cardClasses} onMouseEnter={() => setColour('#d3f3ff')} onMouseLeave={() => setColour('#fff')}>
          <Slide bottom duration={300}>
            <RiBookReadLine className="text-3xl" />
            <p className="font-bold py-3">Training</p>
            <div className={cardTextClasses}>
              Discover different training courses organised by the dedicated dataviz team to help you make the most of your data.
            </div>
            <ButtonWithArrow className={`${buttonClasses} group-hover:bg-highlight_2`} type="BlackButton" >Coming soon</ButtonWithArrow>
          </Slide>
        </div>
      
        <div className={cardClasses} onMouseEnter={() => setColour('#b2f5ea')} onMouseLeave={() => setColour('#fff')}>
          <Slide bottom duration={400}>
          <div className={`${getHelp ? 'hidden' : ''}`}>
            <MdPeople className="text-3xl" />
            <p className="font-bold py-3">Support</p>
            <div className={cardTextClasses}>
              Get in touch with us. It is natural that you have found something diffcult to understand or need more specific guidance and direction.
            </div>
            <ButtonWithArrow className={`${buttonClasses} group-hover:bg-teal-500`} type="BlackButton" href="javascript:void(0)" onClick={() => setHelp(!getHelp)}>I need support</ButtonWithArrow>
          </div>
          </Slide>
          <Slide top duration={300}>
          <div className={`${getHelp ? 'flex flex-wrap bg-teal-100 p-5' : 'hidden'}`}>
            <div>Get support from the community</div>
            <div>Support from a member of dataviz team</div>
            <ButtonWithArrow className={`${buttonClasses} group-hover:bg-teal-500`} type="BlackButton" href="javascript:void(0)" onClick={() => setHelp(!getHelp)}>Go back</ButtonWithArrow>
          </div>
          </Slide>
        </div>
        
        <div className={cardClasses} onMouseEnter={() => setColour('#fed7e2')} onMouseLeave={() => setColour('#fff')}>
          <Slide bottom duration={500}>
            <div>
              <RiMenuAddLine className="text-3xl" />
              <p className="font-bold py-3">Contribution</p>
              <div className={cardTextClasses}>
                We love to see people actively sharing their thought and creativity. We have prepared a tutorial for you to upload your own blog posts.
              </div>
            </div>
            <a href="https://github.com/researchdata-sheffield/dataviz-hub2/blob/master/README.md" target="_blank" rel="noopener noreferrer">
              <ButtonWithArrow className={`${buttonClasses} group-hover:bg-pink-500`} type="BlackButton">Our repository</ButtonWithArrow>
            </a>
          </Slide>
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

