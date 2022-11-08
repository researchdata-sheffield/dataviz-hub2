import React, { useEffect } from "react";
import SEO from "../components/shared/seo";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import EventNotice from "../components/home/eventNotice";
import FeaturedItem from "../components/home/featuredItem";
import LatestPost from "../components/home/latestPost";
import LearningPath from "../components/home/learningPath";
import HomeCommunity from "../components/home/homeCommunity";
import HomeShowcase from "../components/home/homeShowcase";
import moment from "moment";
import SearchHome from "../components/home/searchHome";
import Fade from "react-reveal/Fade";
import Covid from "../images/home/COVIDDeathPropMSOA.png";
import Bg from "../images/home/lineBackground.png";
import { ArrowButton, AnimateButton } from "../components/style/styleComponent";
import { randomInteger } from "../utils/shared";
import { useBackgroundMovement } from "../utils/hooks/backgroundMovement";

const IndexPage = ({ data: { featuredItem, latestPost, eventBrite } }) => {
  let datePrev = moment();
  let words = [
    "Colour",
    "What are you looking for?",
    "blog post",
    "Dash",
    "dataset",
    "Shiny",
    "Chart",
    "visualisation",
    "Python",
    "DD/MM/YYYY"
  ];

  useEffect(() => {
    let input = document.getElementById("homeSearch");
    const interval = setInterval(() => {
      let dateNow = moment();
      let dateDiff = dateNow - datePrev;
      if (dateDiff > 5000) {
        datePrev = moment();
        let index = randomInteger(words.length);
        input.setAttribute("placeholder", words[index]);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [words]);

  useBackgroundMovement("dynamicBg");

  return (
    <div className="bg-white">
      <SEO
        title="Home"
        keywords={[
          "The University of Sheffield",
          "Data Visualisation",
          "Data Visualisation Hub",
          "Research",
          "Data Analytics",
          "Data Visualisation UK",
          "Dataviz"
        ]}
      />

      {/* Top part of the page */}
      <div>
        <div className="flex flex-wrap relative">
          {/* Left component */}
          <div
            id="homeBar"
            className="min-h-100 md:min-h-60 lg:min-h-100 lg:max-h-100 content-evenly md:content-around shadow-md z-20 2lg:sticky 2lg:top-0 2lg:left-0 2lg:w-4/12 flex flex-wrap w-full  text-black overflow-hidden justify-center"
            style={{
              transition: ".4s ease",
              background: "rgba(255,255,255, 1)",
              zIndex: "1"
            }}
          >
            <div className="px-8 text-center font-sans">
              <p
                className="text-2xl lg:text-3xl 2xl:text-4xl font-extrabold"
                style={{
                  background:
                    "linear-gradient(225deg, rgba(255,121,180,1) 20%, rgba(255,134,250,1) 50%, rgba(41,197,255,1) 82%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Data Visualisation Hub
              </p>
              <p className="text-base 2xl:text-lg mt-3 px-2 md:px-6 lg:px-8 2xl:px-12">
                Building community around data visualisation at the University
                of Sheffield.
              </p>
            </div>

            <SearchHome />

            <Link to="#explore">
              <Fade bottom delay={700}>
                <ArrowButton
                  type="BlackWhiteButton"
                  className="group py-2 px-4 text-sm 2xl:text-lg xl:py-3 xl:px-8 shadow-none bg-white text-brand-black border-1 border-gray-500 hover:text-white hover:bg-brand-black"
                >
                  What is data visualisation
                </ArrowButton>
              </Fade>
            </Link>
          </div>
          {/* End of left component */}

          {/* Right component */}
          {/*style={{borderTop: "50px solid #000000", }} */}
          <div
            className="flex flex-wrap text-gray-100 2lg:w-8/12 bg-brand-black"
            style={{ marginLeft: "auto", transition: ".5s ease" }}
          >
            {/* An example of visualisation, update weekly/monthly? */}
            <div
              className="pt-8 min-h-60 lg:min-h-100 justify-center relative w-full bg-white"
              style={{ transition: ".6s ease" }}
            >
              <div
                className="flex flex-col flex-wrap group min-h-60 lg:min-h-100 justify-center text-center items-center"
                style={{
                  transition: ".8s ease",
                  backgroundImage: `url(${Covid})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <h1
                  className="md:-mt-24 px-2 lg:px-24 text-3xl 2xl:text-5xl font-bold py-2"
                  style={{
                    textShadow: "#000 0 0 10px",
                    backgroundColor: "rgba(0,0,0, 0.6)"
                  }}
                >
                  CoVid Plots and Analysis
                  <p className="text-lg font-normal">
                    by Colin Angus at ScHARR, University of Sheffield
                  </p>
                </h1>
                <div className="mt-10">
                  <a
                    href="https://figshare.shef.ac.uk/articles/CoVid_Plots_and_Analysis/12328226"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AnimateButton external className="">
                      Data Repository
                    </AnimateButton>
                  </a>
                  <Link
                    className="ml-8 inline-block"
                    to="/blog/01/06/2020/visualising-high-risk-areas-for-covid-19-mortality"
                  >
                    <AnimateButton className="mt-0 ">Blog post</AnimateButton>
                  </Link>
                </div>
              </div>

              {/* Scroll down animation */}
              <Link to="#eventNotice">
                <div
                  id="scrollDown-btn"
                  className="hidden md:block absolute bottom-0 left-0 mb-8 text-center cursor-pointer group pt-14"
                  style={{ left: "45%", right: "45%" }}
                >
                  <span
                    style={{
                      marginLeft: "-7px",
                      width: "18px",
                      height: "18px"
                    }}
                  ></span>
                  <p
                    className="text-black font-bold text-center"
                    style={{ textShadow: "#fff 0px 0px 10px" }}
                  >
                    &nbsp;Scroll
                  </p>
                </div>
              </Link>
            </div>

            <EventNotice eventBrite={eventBrite} />
            <FeaturedItem item={featuredItem} />
            <LatestPost post={latestPost} />
          </div>
          {/* End of right component */}
        </div>
      </div>
      {/* End of top page */}

      <div id="explore" />
      <div
        className="flex flex-wrap items-center text-left relative pt-24 pb-24 overflow-hidden"
        style={{ minHeight: "55vw" }}
      >
        <div
          id="dynamicBg"
          className="absolute top-0 w-full left-0 h-full scale-110"
          style={{
            backgroundImage: `linear-gradient(145deg, rgba(250, 139, 255, 0.97) 20%, rgba(43, 210, 255, 0.92) 48%, rgba(43, 255, 136, 0.2) 90%), url(${Bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
        <Fade cascade delay={200} duration={1500}>
          <div className="px-5 md:px-24 xl:px-36 2xl:px-56 mt-6 mb-48">
            <div className="text-gray-900">
              <h1
                className="text-5xl 2xl:text-6xl font-semibold"
                style={{ fontFamily: "Source Serif Pro, serif" }}
              >
                Data and visualisation
              </h1>
              <p className="text-base 2xl:text-xl my-4 font-semibold md:w-3/5">
                Data visualisation is currently an active and critical aspect in
                research, teaching, and development. The main purpose of data
                visualisation is to communicate information clearly and
                effectively by means of graphical representation. However, this
                does not mean that data visualisation must be boring for its
                functional purpose, or extremely complicated to look gorgeous
                ...
              </p>
            </div>
            <Link to="/docs/22/03/2020/datavizhub-guide">
              <ArrowButton type="AnimateButton" className="group">
                Read more about data visualisation
              </ArrowButton>
            </Link>
          </div>
        </Fade>
        <div className="absolute bottom-0 left-0 w-full -mb-1 xl:-mb-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#111827"
              fillOpacity="1"
              d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,213.3C672,224,768,192,864,154.7C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <LearningPath />
      <HomeCommunity />
      <HomeShowcase />

      <div
        id="collaboration"
        className="container mx-auto min-h-40 flex flex-wrap pb-20 justify-center"
      >
        <h1
          className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-gray-800 text-center py-5 w-full"
          style={{ fontFamily: "Source Serif Pro, serif" }}
        >
          Collaboration and Partnership.
        </h1>
        <p className="text-gray-500">Further details to come.</p>
      </div>
    </div>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  pageContext: PropTypes.any,
  data: PropTypes.any
};

export const indexQuery = graphql`
  query {
    featuredItem: allMdx(
      filter: {
        frontmatter: { featured: { eq: true }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 2
    ) {
      edges {
        node {
          id
          frontmatter {
            ...MdxFrontmatter
          }
          fields {
            ...MdxFields
          }
        }
      }
    }

    latestPost: allMdx(
      filter: { frontmatter: { type: { eq: null }, published: { ne: false } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 8
    ) {
      edges {
        node {
          id
          frontmatter {
            ...MdxFrontmatter
          }
          fields {
            ...MdxFields
          }
        }
      }
    }

    eventBrite: allEventbriteEvents(
      sort: { fields: start___local, order: ASC }
      limit: 1
      filter: { id: { ne: "777" }, isFuture: { eq: true } }
    ) {
      ...EventbriteEventsEdge
    }
  }
`;
