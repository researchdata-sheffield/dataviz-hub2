import React, { useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import { graphql, Link, navigate } from "gatsby"
import PropTypes from "prop-types"
//import BackgroundSection from "../components_images/home_background"
import EventNotice from "../components_home/eventNotice"
import FeaturedPost from "../components_home/featuredPost"
import LatestPost from "../components_home/latestPost"
import Guide from "../components_home/guide"
import moment from "moment"
import Search_Home from "../components/searchHome"
import scroll_To from 'gatsby-plugin-smoothscroll'
import Tada from 'react-reveal/Tada'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import Covid from "../images/covid-19.jpg"


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
            <div className="px-12 text-center pt-24 ipadp:pt-10vh" style={{fontFamily: "TUoS Blake"}}>
              <p className="text-gray-700 text-lg ipadp:text-2xl 2xl:text-4xl font-bold">Data Visualisation Hub</p>
              <p className="text-gray-500 text-sm 2xl:text-lg mt-2 px-3 xl:px-6">Promoting and building community around data visualisation at the University of Sheffield.</p>
            </div>

            <Search_Home  />
            
            <Slide left>
              <div className="hidden md:flex justify-center py-4 xl:py-8 z-10">
                <div className="w-1/7 mr-24">
                  <div className="mb-1 text-gray-600 font-semibold text-xs xl:text-base 2xl:text-lg">Dataviz.Shef</div>
                    <ul className="list-reset leading-normal text-xs xl:text-sm 2xl:text-base">
                      <li><Link className="text-gray-500 hover:text-highlight_2" to="/blog/category/news" alt="blog/category/news">News</Link></li>
                      <li><Link className="text-gray-500 hover:text-highlight_2" to="/blog/category/articles" alt="blog/category/articles">Articles</Link></li>
                      <li><Link className="text-gray-500 hover:text-highlight_2" to="/events" alt="/events">Events</Link></li>
                      <li><Link className="text-gray-500 hover:text-highlight_2" to="/blog/category/tutorial" alt="blog/category/tutorial">Tutorials</Link></li>
                      <li><Link className="text-gray-500 hover:text-highlight_2" to="/about/#more" alt="/about">About us</Link></li>
                    </ul>
                </div>
                
                <div className="w-1/7">
                  <div className="mb-1 text-gray-600 font-semibold text-xs xl:text-base 2xl:text-lg">Highly searched</div>
                    <ul className="list-reset leading-normal text-xs xl:text-sm 2xl:text-base">
                      <li><Link className="text-gray-500 hover:text-highlight_2" to="/">Visualisation</Link></li>
                      <li><Link className="text-gray-500 hover:text-highlight_2" to="/">Python</Link></li>
                      <li><Link className="text-gray-500 hover:text-highlight_2" to="/">R</Link></li>
                      <li><Link className="text-gray-500 hover:text-highlight_2" to="">Statistics</Link></li>
                    </ul>
                </div>
              </div>
            </Slide>

            <Fade bottom delay={700}>
              <div onClick={() => scroll_To('#what')} className="flex my-10 2xl:my-16 mx-auto bg-gray-900 hover:bg-white text-center cursor-pointer group py-1 xl:py-2 2xl:py-3 hover:shadow-2xl text-center shadow-lg justify-center self-center items-center max-w-25 ipadp:max-w-15" style={{transition: ".3s ease", minHeight: "2.7rem", maxHeight: "3.6rem"}} >
                  <Link className="group-hover:text-highlight_2 text-gray-200 font-bold text-sm xl:text-lg" to="#what">Explore</Link>
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
          <div className="flex flex-wrap w-full text-gray-100 lg:w-8/12" style={{marginLeft: "auto", transition: ".5s ease", zIndex: "2"}}>  {/*style={{borderTop: "50px solid #000000", }} */}
            
            {/* An example of visualisation, update weekly/monthly? */}
            <div className="flex flex-wrap min-h-100 w-full justify-center text-center items-center relative" style={{backgroundImage: `url(${Covid})`, backgroundSize: "cover" }}>
              <h1 className="px-10 ipadp:px-24 text-3xl 2xl:text-5xl font-bold" style={{textShadow: "#000 0 0 10px"}}>Coronavirus COVID-19 Global Cases by CSSE at Johns Hopkins University</h1>
              <div className="flex bg-gray-900 hover:bg-white text-center cursor-pointer group px-5 py-1 xl:py-2 2xl:py-3 hover:shadow-2xl shadow-lg items-center" style={{transition: ".3s ease", minHeight: "2.7rem", maxHeight: "3.6rem"}} 
                onClick={() => window.open("https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6", "_blank", "noopener, noreferrer")} 
              >
                <a className="group-hover:text-highlight_2 text-gray-200 font-bold text-sm xl:text-lg" href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" target="_blank" rel="noopener noreferrer">Statistics dashborad</a>
              </div> 



              {/* Scroll down animation */}
              <div id="scrollDown-btn" className="hidden md:block absolute bottom-0 left-0 mb-8 text-center cursor-pointer group pt-14" style={{left: "45%", right:"45%"}} onClick={() => scroll_To('#eventNotice')}>
                <Link className="text-gray-200 hover:text-gray-500 inline-block" to="#eventNotice"><span onClick={() => scroll_To('#eventNotice')} style={{marginLeft: "16px", width: "18px", height: "18px" }}></span></Link>
                <a className="text-gray-200 group-hover:text-gray-500 font-bold tracking-widest">Scroll</a>
              </div>
            </div>


            <EventNotice eventBrite={eventBrite} />   

            <div className="flex flex-wrap w-full text-white font-bold text-center text-base cursor-pointer bg-gray-900 pt-1 shadow-2xl">
              <div className="w-1/2 md:w-1/4 py-2 ipadp:py-3 2xl:py-5 greyScale-80 hover:greyScale-0 bg-gray-900 border-b-2 border-gray-900 hover:border-menu_red" onClick={() => {navigate('/blog/category/articles')}}>ARTICLES</div>
              <div className="w-1/2 md:w-1/4 py-2 ipadp:py-3 2xl:py-5 greyScale-80 hover:greyScale-0 bg-gray-900 border-b-2 border-gray-900 hover:border-menu_yellow" onClick={() => {navigate('/blog/category/events')}}>EVENT</div>
              <div className="w-1/2 md:w-1/4 py-2 ipadp:py-3 2xl:py-5 greyScale-80 hover:greyScale-0 bg-gray-900 border-b-2 border-gray-900 hover:border-highlight_2" onClick={() => {navigate('/blog/category/news')}}>NEWS</div>
              <div className="w-1/2 md:w-1/4 py-2 ipadp:py-3 2xl:py-5 greyScale-80 hover:greyScale-0 bg-gray-900 border-b-2 border-gray-900 hover:border-menu_green" onClick={() => {navigate('/blog/category/tutorial')}}>TUTORIAL</div>
            </div>  
            
            <FeaturedPost featuredPost={featuredPost} />

            <LatestPost latestPost={latestPost} />
            
            <div className="flex w-full bg-gray-900 hover:bg-gray-100 text-center cursor-pointer group py-3 hover:py-0 text-center shadow-lg hover:shadow-2xl justify-center self-center items-center" style={{transition: ".3s ease", height: "3.6rem"}} onClick={() => {navigate('/blog')}}>
              <Link to="/blog"><h1 className="group-hover:text-highlight_2 text-gray-200 font-bold text-xl group-hover:text-2xl"><Tada duration={2000}>Read more </Tada></h1></Link>
            </div> 

            {/* <div className="flex flex-wrap min-h-100 text-center items-center w-full bg-white">
              <p className="text-gray-600 mx-auto">What goes here?</p>
            </div> */}
          
          </div> 
          {/* End of right component */}

        </div>
      </div>
      {/* End of top page */}     
      
      <Guide />
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

    latestPost: allMdx(filter: {frontmatter: {featured: {ne: "true"}}}, sort: {order: DESC, fields: frontmatter___date}, limit: 6) {
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

