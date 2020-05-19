import React, { useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import { graphql, Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import EventNotice from "../components_home/eventNotice"
import FeaturedPost from "../components_home/featuredPost"
import LatestPost from "../components_home/latestPost"
import HomeCommunity from "../components_home/homeCommunity"
import HomeShowcase from "../components_home/homeShowcase"
import moment from "moment"
import Search_Home from "../components/searchHome"
import scroll_To from 'gatsby-plugin-smoothscroll'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import Covid from "../images/covid-19.jpg"
// import { HomeBlogNav } from "../components_style/styled"

import BackgroundOne from "../components_images/home/home_1"

import { MdKeyboardArrowRight } from "react-icons/md"


const IndexPage = ({data: {featuredPost, latestPost, eventBrite}}) => {
  
  let datePrev = moment()
  
  var words = ["research", "past event", "introduction to R", "What are you looking for?", "how to write a blog post", "slack", "dataset",
               "online research data", "sheffield", "Python tutorial", "DD/MM/YYYY"]

  useEffect( () => {
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


  return (
    <>
      <SEO 
        title="Home" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research",]} 
      />
      <Header />

      {/* Top part of the page */}
      <div>
        <div className="flex flex-wrap">
          {/* Left component */}
          <div id="homeBar" className="sm:sticky sm:top-0 sm:left-0 flex-col flex-wrap w-full lg:w-4/12 text-white text-gray-600 overflow-hidden lg:min-h-100 lg:max-h-100" style={{transition: ".4s ease", background: "rgba(255,255,255, 1)", zIndex: "1"}}>
            <div className="px-8 text-center pt-28 ipadp:pt-10vh" style={{fontFamily: "TUoS Blake"}}>
              <p className="text-gray-700 text-lg ipadp:text-3xl 2xl:text-4xl font-bold">Data Visualisation Hub</p>
              <p className="text-gray-600 text-base 2xl:text-lg mt-2 px-6 xl:px-16">Building community around data visualisation at the University of Sheffield.</p>
            </div>

            <Search_Home  />
            
            <Slide left>
              <div className="hidden md:flex justify-center py-4 xl:py-8 z-10">
                <div className="w-1/7 mr-24">
                  <div className="mb-1 text-gray-600 font-semibold text-xs xl:text-base 2xl:text-lg">Dataviz.Shef</div>
                    <ul className="list-reset leading-normal text-xs xl:text-sm 2xl:text-base">
                      <li><a className="text-gray-500 hover:underline" onClick={() => scroll_To('#explore')} alt="#Data and visualisation">Data visualisation</a></li>
                      <li><a className="text-gray-500 hover:underline" to="#" alt="Coming soon">Learning path</a></li>
                      <li><a className="text-gray-500 hover:underline" onClick={() => scroll_To('#home_community')} alt="#Community">Community</a></li>
                      <li><a className="text-gray-500 hover:underline" onClick={() => scroll_To('#home_showcase')} alt="#Showcase">Showcase</a></li>
                      <li><a className="text-gray-500 hover:underline" to="#" alt="Comming soon">Collaboration</a></li>
                    </ul>
                </div>
                
                <div className="w-1/7">
                  <div className="mb-1 text-gray-600 font-semibold text-xs xl:text-base 2xl:text-lg">Trending searches</div>
                    <ul className="list-reset leading-normal text-xs xl:text-sm 2xl:text-base">
                      <li><a className="text-gray-500 hover:underline" onClick={ () => {navigate("/search", {state: {searchWord: "Chart"}} )} }>Chart</a></li>
                      <li><a className="text-gray-500 hover:underline" onClick={ () => {navigate("/search", {state: {searchWord: "Colour"}} )} }>Colour</a></li>
                      <li><a className="text-gray-500 hover:underline" onClick={ () => {navigate("/search", {state: {searchWord: "Python"}} )} }>Python</a></li>
                      <li><a className="text-gray-500 hover:underline" onClick={ () => {navigate("/search", {state: {searchWord: "Statistics"}} )} }>Statistics</a></li>
                    </ul>
                </div>
              </div>
            </Slide>

            <Fade bottom delay={700}>
              <div onClick={() => scroll_To('#explore')} className="flex my-10 2xl:my-16 mx-auto bg-gray-900 hover:bg-white text-center cursor-pointer group py-1 xl:py-2 2xl:py-3 hover:shadow-2xl text-center shadow-lg justify-center self-center items-center max-w-25 ipadp:max-w-15" style={{transition: ".3s ease", minHeight: "2.7rem", maxHeight: "3.6rem"}} >
                  <Link className="group-hover:text-highlight_2 text-gray-200 font-bold text-sm xl:text-lg" to="/#explore">Get started</Link>
              </div> 
            </Fade>

            <div className="flex text-xs text-gray-500 mt-12 xl:mt-28 2xl:mt-32 mb-1 mx-auto justify-center">
              {/* <a className="text-gray-500 hover:text-highlight_2">Library &nbsp;</a> | 
              <a className="text-gray-500 hover:text-highlight_2">&nbsp; IT Services &nbsp;</a> |
              <a className="text-gray-500 hover:text-highlight_2">&nbsp; RSE &nbsp;</a> | */}
              <a className="text-gray-500 hover:underline">&nbsp; Not sure where to start? &nbsp;</a>
            </div>
            
          </div>
          {/* End of left component */}
          
          
          {/* Right component */}
          <div className="flex flex-wrap text-gray-100 lg:w-8/12" style={{marginLeft: "auto", transition: ".5s ease", zIndex: "2"}}>  {/*style={{borderTop: "50px solid #000000", }} */}
            
            {/* An example of visualisation, update weekly/monthly? */}
            <div className="flex flex-wrap min-h-100 justify-center text-center items-center relative" style={{backgroundImage: `url(${Covid})`, backgroundSize: "cover" }}>
              <h1 className="px-10 ipadp:px-24 text-3xl 2xl:text-5xl font-bold" style={{textShadow: "#000 0 0 10px"}}>Coronavirus COVID-19 Global Cases by CSSE at Johns Hopkins University</h1>
              <div className="flex bg-gray-900 hover:bg-white text-center cursor-pointer group px-5 py-1 xl:py-2 2xl:py-3 hover:shadow-2xl shadow-lg items-center" style={{transition: ".3s ease", minHeight: "2.7rem", maxHeight: "3.6rem"}} 
                onClick={() => window.open("https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6", "_blank", "noopener, noreferrer")} 
              >
                <a className="group-hover:text-highlight_2 text-gray-200 font-bold text-sm xl:text-lg" href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" target="_blank" rel="noopener noreferrer">Statistics dashboard</a>
              </div> 



              {/* Scroll down animation */}
              <div id="scrollDown-btn" className="hidden md:block absolute bottom-0 left-0 mb-8 text-center cursor-pointer group pt-14" style={{left: "45%", right:"45%"}} onClick={() => scroll_To('#eventNotice')}>
                <Link className="text-gray-200 hover:text-gray-500 inline-block" to="#eventNotice"><span onClick={() => scroll_To('#eventNotice')} style={{marginLeft: "16px", width: "18px", height: "18px" }}></span></Link>
                <a className="text-gray-200 group-hover:text-gray-500 font-bold tracking-widest">Scroll</a>
              </div>
            </div>

            <EventNotice eventBrite={eventBrite} />   
              
            {/* <div className="flex flex-wrap w-full text-white font-semibold text-center text-sm cursor-pointer bg-black pt-1 shadow-2xl">
              <HomeBlogNav id="homeBlog" className="greyScale-80 hover:greyScale-0 2xl:py-5 hover:border-menu_red" onClick={() => {navigate('/blog/category/articles')}}>ARTICLES</HomeBlogNav>
              <HomeBlogNav className="greyScale-80 hover:greyScale-0 2xl:py-5 hover:border-menu_yellow" onClick={() => {navigate('/blog/category/events')}}>EVENT</HomeBlogNav>
              <HomeBlogNav className="greyScale-80 hover:greyScale-0 2xl:py-5 hover:border-highlight_2" onClick={() => {navigate('/blog/category/news')}}>NEWS</HomeBlogNav>
              <HomeBlogNav className="greyScale-80 hover:greyScale-0 2xl:py-5 hover:border-menu_green" onClick={() => {navigate('/blog/category/tutorial')}}>TUTORIAL</HomeBlogNav>
            </div>   */}
            
            <FeaturedPost featuredPost={featuredPost} />
            <LatestPost latestPost={latestPost} />
            
            <div className="flex flex-wrap w-full bg-gray-900 py-10 px-3 shadow-lg justify-center items-center" style={{transition: ".3s ease"}}>
              <div className="text-gray-200">Discover a range of articles and posts at our blog.</div>
              <button onClick={() => {navigate('/blog')}} className="px-5 py-2 bg-black ml-16 group"><h1 className="group-hover:text-white text-gray-400 font-semibold">Read more</h1></button>
            </div> 

            {/* <div className="flex flex-wrap min-h-100 text-center items-center w-full bg-white">
              <p className="text-gray-600 mx-auto">What goes here?</p>
            </div> */}
          
          </div> 
          {/* End of right component */}

        </div>
      </div>
      {/* End of top page */}     
      
      <div id="explore" />
      <BackgroundOne className="ipadp:min-h-100 flex flex-wrap items-center text-left">
        <Fade cascade delay={700} duration={1500}>
          <div className="px-3 md:px-24 xl:px-36 2xl:px-52 py-10">
            <div className="text-white">
              <h1 className="text-5xl 2xl:text-6xl font-semibold" style={{textShadow: "#000 0px 0px 4px", fontFamily: "TUoS Stephenson"}}>Data and visualisation</h1>
              <p className="2xl:text-lg my-4 text-gray-100 font-semibold md:w-3/5" style={{textShadow: "#000000 0px 2px 5px"}}>
                Data visualisation is currently an extremely active and critical aspect in research, teaching, and development. The main purpose of data visualisation is to communicate 
                information clearly and effectively by means of graphical representation. However, this does not mean that data visualisation must be boring for its functional purpose, 
                or extremely complicated ... 
              </p>
            </div>
            <button onClick={() => navigate('/blog/22/03/2020/datavizhub_guide/#what')} className="mt-16 bg-gray-300 hover:bg-highlight_2 text-center hover:text-white text-gray-700 font-semibold py-2 px-6 border-2 border-transparent shadow">
              Read more <MdKeyboardArrowRight className="inline-block" />
            </button>
          </div>
        </Fade>
      </BackgroundOne>

      <HomeCommunity />
      <HomeShowcase />
      
      <div className="container mx-auto min-h-40 flex flex-wrap py-20 justify-center">
        <h1 className="text-3xl ipadp:text-4xl 2xl:text-5xl font-semibold text-gray-800 text-center py-5 w-full" style={{fontFamily: "TUoS Stephenson"}}>Collaboration and Partnership.</h1>
        <p className="text-gray-500">Further details to come.</p>
      </div>
            
    
      <Footer />        
    </>
  )
}


export default IndexPage

IndexPage.propTypes = {
  pageContext: PropTypes.any,
  data: PropTypes.any
}

// TODO: clean up queries
export const query = graphql`
  query {
    featuredPost: allMdx(filter: {frontmatter: {featured: {eq: "true"}}}, sort: {order: DESC, fields: frontmatter___date}, limit: 2) {
      edges {
        node {
          id
          frontmatter {
            description
            tag
            thumbnail {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            date(formatString: "ddd, DD MMMM YYYY")
            author {
              name
              email
              avatar {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            category
            title
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }

    latestPost: allMdx(filter: {frontmatter: {featured: {ne: "true"}, hide: {ne: "true"}}}, sort: {order: DESC, fields: frontmatter___date}, limit: 6) {
      edges {
        node {
          id
          frontmatter {
            description
            tag
            thumbnail {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            date(formatString: "ddd, DD MMMM YYYY")
            author {
              name
              email
              avatar {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            category
            title
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
    
    eventBrite: allEventbriteEvents(sort: {fields: start___local, order: ASC}, limit: 1) {
      edges {
        node {
          id
          url
          name{
            text
          }
          description {
            text
            html
          }
          logo {
            original {
              url
            }
          }
          venue {
            name
            address {
              address_1
              city
              postal_code
            }
          }
          online_event
          summary
          start {
            local(formatString: "ddd DD MMMM YYYY, hh:mm A", locale: "en-GB")
          }
        }
      }
    }  

  }
`

