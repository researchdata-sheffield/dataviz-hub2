import React, { useState } from "react";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import { MdKeyboardArrowRight, MdPeople } from "react-icons/md";
import {
  RiCalendarEventLine,
  RiBookReadLine,
  RiMenuAddLine
} from "react-icons/ri";
import { ArrowButton, BlackButton } from "../style/styleComponent";
import { GrGroup, GrContactInfo } from "react-icons/gr";

const HomeCommunity = () => {
  const cardClasses =
    "w-4/5 md:w-1/3 lg:w-1/5 p-3 2xl:p-12 mt-10 hover:-translate-y-3 transition duration-500 group relative";
  const cardTextClasses =
    "text-sm xl:text-base border-t-1 border-gray-300 py-3 text-gray-600 group-hover:text-gray-900";
  const buttonClasses = "rounded-md text-xs lg:text-sm mt-5 lg:mt-10";
  const [bgColour, setColour] = useState("#fff");
  const [getHelp, setHelp] = useState(false);
  const supportLinks = [
    "mailto:rdm@sheffield.ac.uk",
    "https://shef-dataviz.slack.com/archives/DRF6V81L0",
    "https://shef-dataviz.slack.com/archives/D01CANTQN2F",
    "https://shef-dataviz.slack.com/archives/D014SQAFRGT",
    "https://shef-dataviz.slack.com/archives/D01CARHVAJF"
  ];

  return (
    <div
      id="home-community"
      className="flex flex-wrap justify-center items-center relative"
      style={{
        transition: ".5s ease",
        background: `linear-gradient(180deg, ${bgColour} 0%, #fff 60%)`,
        backgroundColor: `${bgColour}`,
        minHeight: "700px"
      }}
    >
      <Fade>
        <div className="container mx-auto justify-center flex flex-wrap pt-36">
          <div className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 w-full text-center px-4">
            <h1 style={{ fontFamily: "Source Serif Pro, serif" }}>
              YOUR COMMUNITY.{" "}
            </h1>
          </div>
          <Link
            to="/community"
            className="mt-1 text-med xl:text-lg text-gray-600 hover:underline"
          >
            Learn more <MdKeyboardArrowRight className="inline-block" /> 😃
          </Link>
        </div>
      </Fade>

      <div className="flex flex-wrap text-black pt-24 pb-36 justify-center">
        <div
          data-section="events"
          className={cardClasses}
          onMouseEnter={() => setColour("#fed7d7")}
          onMouseLeave={() => setColour("#fff")}
        >
          <Slide bottom duration={200}>
            <RiCalendarEventLine className="text-3xl" />
            <p className="font-bold py-3">Events</p>
            <div className={cardTextClasses}>
              Discover a variety of events including talks and symposia,
              workshops, vis-coding clubs and data visualisation hackathons!
            </div>
            <Link to="/events">
              <ArrowButton
                className={`${buttonClasses} group-hover:bg-red-500`}
              >
                Upcoming events
              </ArrowButton>
            </Link>
          </Slide>
        </div>

        <div
          data-section="training"
          className={cardClasses}
          onMouseEnter={() => setColour("#d3f3ff")}
          onMouseLeave={() => setColour("#fff")}
        >
          <Slide bottom duration={300}>
            <RiBookReadLine className="text-3xl" />
            <p className="font-bold py-3">Training</p>
            <div className={cardTextClasses}>
              Explore different training courses organised by the dedicated
              dataviz team to help you make the most of your data.
            </div>
            <ArrowButton
              className={`${buttonClasses} group-hover:bg-brand-blue group-hover:text-brand-black`}
            >
              Coming soon
            </ArrowButton>
          </Slide>
        </div>

        <div
          data-section="support"
          className={cardClasses}
          onMouseEnter={() => setColour("#A7F3D0")}
          onMouseLeave={() => setColour("#fff")}
        >
          <Slide bottom duration={400}>
            <div className={`${getHelp ? "hidden" : ""}`}>
              <MdPeople className="text-3xl" />
              <p className="font-bold py-3">Support</p>
              <div className={cardTextClasses}>
                Get in touch with us. It is natural that you have found
                something difficult to understand or need more specific guidance
                and direction.
              </div>
              <ArrowButton
                className={`${buttonClasses} group-hover:bg-green-500`}
                href="#"
                onClick={() => setHelp(!getHelp)}
              >
                I want support
              </ArrowButton>
            </div>
          </Slide>
          {/* Support contact info */}
          <Slide top duration={300}>
            <div
              className={`${
                getHelp ? "flex flex-wrap bg-green-100 p-4 z-10" : "hidden"
              }`}
            >
              <div className="p-2 text-center">
                <GrGroup className="mx-auto text-4xl mb-2" />
                <p className="text-left text-sm xl:text-base">
                  We have a diverse community where everyone is passionate about
                  data visualisation.
                </p>
                <a
                  href="https://join.slack.com/t/shef-dataviz/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BlackButton
                    className={`${buttonClasses} hover:bg-green-500 py-1 px-2`}
                    href="#"
                    style={{ marginTop: "18px" }}
                  >
                    Ask community
                  </BlackButton>
                </a>
              </div>
              <div className="p-2 mt-5 text-center">
                <GrContactInfo className="mx-auto text-4xl mb-2" />
                <div className="text-left text-sm xl:text-base">
                  If you would like to speak to members of Dataviz Team, please
                  get in touch with us through email or direct messages (Slack).
                </div>
                <div className="mt-2">
                  {supportLinks.map((link, i) => (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={link}
                    >
                      <BlackButton
                        className={`${buttonClasses} hover:bg-green-500 py-1 px-2 mr-2`}
                        href="#"
                        style={{ marginTop: "10px" }}
                      >
                        {i === 0 ? "Email" : `DM ${i}`}
                      </BlackButton>
                    </a>
                  ))}
                </div>
              </div>
              <ArrowButton
                className={`${buttonClasses} bg-green-500 py-1 px-2`}
                href="#"
                onClick={() => setHelp(!getHelp)}
              >
                Go back
              </ArrowButton>
            </div>
          </Slide>
        </div>

        <div
          data-section="collaboration"
          className={cardClasses}
          onMouseEnter={() => setColour("#fed7e2")}
          onMouseLeave={() => setColour("#fff")}
        >
          <Slide bottom duration={500}>
            <div>
              <RiMenuAddLine className="text-3xl" />
              <p className="font-bold py-3">Collaboration</p>
              <div className={cardTextClasses}>
                We love to see people actively sharing their thought and
                creativity. We have prepared a tutorial for you to upload your
                own blog posts.
              </div>
            </div>
            <a
              href="https://github.com/researchdata-sheffield/dataviz-hub2/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowButton
                className={`${buttonClasses} group-hover:bg-pink-500`}
              >
                Our repository
              </ArrowButton>
            </a>
          </Slide>
        </div>
      </div>
      {/* <div className="w-full absolute bottom-0">
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#000" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,181.3C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}
    </div>
  );
};

export default HomeCommunity;
