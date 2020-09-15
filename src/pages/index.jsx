import React, { useEffect } from "react"
import Header from "../components/shared/header"
import Footer from "../components/shared/footer"
import SEO from "../components/shared/seo"
import { graphql, Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import EventNotice from "../components/home/eventNotice"
import FeaturedPost from "../components/home/featuredPost"
import LatestPost from "../components/home/latestPost"
import LearningPath from "../components/home/learningPath"
import HomeCommunity from "../components/home/homeCommunity"
import HomeShowcase from "../components/home/homeShowcase"
import moment from "moment"
import Search_Home from "../components/home/searchHome"
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import Covid from "../images/home/animation.gif"
import { ButtonWithArrow, AnimateButton } from "../components/style/styled"
import ReactTooltip from "react-tooltip"
import bg from "../images/home/earth.jpg"



const IndexPage = ({data: {featuredPost, latestPost, eventBrite}}) => {
  let datePrev = moment()
  var words = ["Colour", "What are you looking for?", "blog post", "Dash", "dataset", "Shiny",
               "Chart", "visualisation", "Python", "DD/MM/YYYY"]
  // search bar text change
  useEffect(() => {
    var input = document.getElementById("homeSearch");
    const interval = setInterval( () => {
      let dateNow = moment();
      let dateDiff = dateNow - datePrev;
      if(dateDiff > 6000) {
        datePrev = moment()
        let index = Math.floor(Math.random() * words.length); 
        input.setAttribute("placeholder", words[index]);
      }
    }, 5000);
    return () => {
      clearInterval(interval)
    };
  }, [words,]);

  const quickLink = "text-gray-700 hover:underline"

  return (
    <div className="bg-white">
      <SEO 
        title="Data Visualisation Hub" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "data analytics"]} 
      />
      <Header />

      {/* Top part of the page */}
      <div>
        <div className="flex flex-wrap relative">
          {/* Left component */}
          <div id="homeBar" className="min-h-100 md:min-h-60 shadow-lg z-10 lg:sticky lg:top-0 lg:left-0 flex flex-wrap w-full lg:w-4/12 text-gray-800 overflow-hidden lg:min-h-100 lg:max-h-100 justify-center" style={{transition: ".4s ease", background: "rgba(255,255,255, 1)", zIndex: "1"}}>
            <div className="px-8 text-center pt-28 ipadp:pt-10vh font-sans">
              <p className="text-2xl lg:text-3xl 2xl:text-4xl font-extrabold" style={{background: 'linear-gradient(225deg, rgba(255,121,180,1) 10%, rgba(41,197,255,1) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Data Visualisation Hub</p>
              <p className="text-base 2xl:text-lg mt-5 px-6 xl:px-12">Building community around data visualisation at the University of Sheffield.</p>
            </div>

            <Search_Home  />
            
            <Slide left>
              <div className="hidden md:flex justify-center pb-6 xl:pb-8 z-10 w-full">
                <div className="w-1/7 mr-24">
                  <div className="mb-1 font-semibold text-xs xl:text-base 2xl:text-lg">Dataviz.Shef</div>
                    <ul className="list-reset leading-normal text-xs xl:text-sm 2xl:text-base">
                      <li><Link className={quickLink} to='/#explore' data-tip="#Data and visualisation">Data visualisation</Link></li>
                      <li><Link className={quickLink} to='/#learning_path' data-tip="#Get started">Learning path</Link></li>
                      <li><Link className={quickLink} to='/#home_community' data-tip="#Community">Community</Link></li>
                      <li><Link className={quickLink} to='/#home_showcase' data-tip="#Showcase">Showcase</Link></li>
                      <li><Link className={quickLink} to='/#collaboration' data-tip="#collaboration">Collaboration</Link></li>
                      <ReactTooltip />
                    </ul>
                </div>
                
                <div className="w-1/7">
                  <div className="mb-1 font-semibold text-xs xl:text-base 2xl:text-lg">Trending searches</div>
                    <ul className="list-reset leading-normal text-xs xl:text-sm 2xl:text-base">
                      <li><a className={quickLink} onClick={ () => { navigate( "/search", {state: {searchWord: "Chart"}}) }} href="javascript:void(0)">Chart</a></li>
                      <li><a className={quickLink} onClick={ () => { navigate( "/search", {state: {searchWord: "Colour"}}) }} href="javascript:void(0)">Colour</a></li>
                      <li><a className={quickLink} onClick={ () => { navigate( "/search", {state: {searchWord: "Python"}}) }} href="javascript:void(0)">Python</a></li>
                      <li><a className={quickLink} onClick={ () => { navigate( "/search", {state: {searchWord: "Statistics"}}) }} href="javascript:void(0)">Statistics</a></li>
                    </ul>
                </div>
              </div>
            </Slide>
            <Link to='#explore'>
              <Fade bottom delay={700}>
                <ButtonWithArrow type="BlackWhiteButton" className="group py-2 px-4 xl:text-lg xl:py-3 xl:px-8 bg-gray-400 text-gray-700 hover:text-gray-700 hover:bg-gray-300">Learn more</ButtonWithArrow>
              </Fade>
            </Link>
            <div className="flex text-xs text-gray-500 mt-12 xl:mt-28 2xl:mt-32 mb-1 mx-auto justify-center w-full">
              {/* <a className="text-gray-500 hover:text-highlight_2">Library &nbsp;</a> | 
              <a className="text-gray-500 hover:text-highlight_2">&nbsp; IT Services &nbsp;</a> |
              <a className="text-gray-500 hover:text-highlight_2">&nbsp; RSE &nbsp;</a> | 
              <a className="text-gray-500 hover:underline">&nbsp; Not sure where to start? &nbsp;</a> */}
            </div>
            
          </div>
          {/* End of left component */}
          
          
          {/* Right component */}
          {/*style={{borderTop: "50px solid #000000", }} */}
          <div className="flex flex-wrap text-gray-100 lg:w-8/12 bg-black" style={{marginLeft: "auto", transition: ".5s ease",}}>
            
            {/* An example of visualisation, update weekly/monthly? */}
            <div className="pt-8 min-h-70 md:min-h-100 justify-center relative w-full bg-white" style={{transition: ".6s ease",}}>
    
              <div className="flex flex-col flex-wrap group min-h-70 md:min-h-100 justify-center text-center items-center" style={{transition: ".8s ease", backgroundImage: `url(${Covid})`, backgroundSize: "contain", backgroundPosition:"center", backgroundRepeat: 'no-repeat' }}>
                <h1 className="md:-mt-24 px-2 ipadp:px-24 text-3xl 2xl:text-5xl font-bold py-2" style={{textShadow: "#000 0 0 10px", backgroundColor: "rgba(0,0,0, 0.2)"}}>
                  CoVid Plots and Analysis
                  <p className="text-lg font-normal">by Colin Angus at ScHARR, University of Sheffield</p>
                </h1>
                <div className="mt-10">
                  <a href="https://figshare.shef.ac.uk/articles/CoVid_Plots_and_Analysis/12328226" target="_blank" rel="noopener noreferrer">
                    <AnimateButton external className="rounded-full py-2 px-4 bg-gray-700 text-white">Data Repository</AnimateButton>
                  </a>
                  <Link className="ml-8 inline-block" to="/blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality">
                    <AnimateButton className="mt-0 rounded-full py-2 px-4 bg-gray-700 text-white">Blog post</AnimateButton>
                  </Link>
                </div>
              </div>

              {/* Scroll down animation */}
              <Link to="#eventNotice">
                <div id="scrollDown-btn" className="hidden md:block absolute bottom-0 left-0 mb-8 text-center cursor-pointer group pt-14" style={{left: "45%", right:"45%"}}>
                  <span style={{marginLeft: "-7px", width: "18px", height: "18px" }}></span>
                  <p className="text-black font-bold text-center" style={{textShadow: "#fff 0px 0px 10px"}}>&nbsp;Scroll</p>
                </div>
              </Link>
            </div>  

            <EventNotice eventBrite={eventBrite} />             
            <FeaturedPost featuredPost={featuredPost} />
            <LatestPost latestPost={latestPost} />
            
            <div className="flex flex-wrap w-full bg-gray-100 py-10 px-3 justify-center items-center self-center" style={{transition: ".3s ease"}}>
              <div className="text-black mr-10">Discover more articles and tutorials at our blog.</div>
              <Link to="/blog">
                <ButtonWithArrow type="BlackWhiteButton" className="group py-2 px-4 bg-gray-200 hover:text-gray-700 hover:bg-gray-300 text-gray-700 mt-0 text-sm" link title="read more on blog">
                  Read more
                </ButtonWithArrow>
              </Link>
            </div> 
          
          </div> 
          {/* End of right component */}

        </div>
      </div>
      {/* End of top page */}     

      <div id="explore" />
      <div className="ipadp:min-h-100 flex flex-wrap items-center text-left relative py-24" style={{backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <Fade cascade delay={200} duration={1500}>
          <div className="px-5 md:px-24 xl:px-36 2xl:px-52 mt-16 mb-32">
            <div className="text-white">
              <h1 className="text-5xl 2xl:text-6xl font-semibold" style={{textShadow: "#000 0px 0px 4px", fontFamily: "TUoS Stephenson"}}>Data and visualisation</h1>
              <p className="text-base 2xl:text-xl my-4 text-gray-100 font-semibold md:w-3/5" style={{textShadow: "#000000 0px 2px 5px"}}>
                Data visualisation is currently an extremely active and critical aspect in research, teaching, and development. The main purpose of data visualisation is to communicate 
                information clearly and effectively by means of graphical representation. However, this does not mean that data visualisation must be boring for its functional purpose, 
                or extremely complicated ... 
              </p>
            </div>
            <Link to="/blog/22/03/2020/datavizhub_guide">
              <ButtonWithArrow type="GreyButton" className="group">Read more about data visualisation</ButtonWithArrow>
            </Link> 
          </div>
        </Fade>
        {/* <div className="w-full absolute bottom-0 -mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#1d1d1d" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,181.3C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div> */}
      </div>

      <LearningPath />
      <HomeCommunity />
      <HomeShowcase />
      
      <div id="collaboration" className="container mx-auto min-h-40 flex flex-wrap pb-20 justify-center">
        <h1 className="text-3xl ipadp:text-4xl 2xl:text-5xl font-semibold text-gray-800 text-center py-5 w-full" style={{fontFamily: "TUoS Stephenson"}}>Collaboration and Partnership.</h1>
        <p className="text-gray-500">Further details to come.</p>
      </div>

      <Footer />        
    </div>
  )
}


export default IndexPage


IndexPage.propTypes = {
  pageContext: PropTypes.any,
  data: PropTypes.any
}


export const query = graphql`
  query {
    featuredPost: 
      allMdx(
        filter: {frontmatter: {featured: {eq: "true"}}}, 
        sort: {order: DESC, fields: frontmatter___date}, 
        limit: 2 ) {
      ...MdxEdge
    }

    latestPost: 
      allMdx(
        filter: {frontmatter: { hide: {ne: "true"}}}, 
        sort: {order: DESC, fields: frontmatter___date}, 
        limit: 8 ) {
      ...MdxEdge
    }
    
    eventBrite: 
      allEventbriteEvents(
        sort: {fields: start___local, order: ASC}, 
        limit: 1, 
        filter: {id: {ne: "777"}, isFuture: {eq: true}} ) {
      ...EventbriteEventsEdge
    }  
  }
`

