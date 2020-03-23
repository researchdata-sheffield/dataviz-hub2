import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import EventNotice from "../components_home/eventNotice"
import FeaturedPost from "../components_home/featuredPost"
import LatestPost from "../components_home/latestPost"
import Guide from "../components_home/guide"
import { FiSearch } from "react-icons/fi"
import moment from "moment"
import Earth from "../images/home/earth.jpg"


function IndexPage ({data: {featuredPost, latestPost, eventBrite}}) {
  const [isOffset, toggleOffset] = useState(false)
  let datePrev = moment()
  
  var words = ["research", "past event", "statistical method", "introduction to R", "What are you looking for?", "how to write a blog post", "slack channel", "dataset",
               "online research data", "sheffield", "Python tutorial", "Library", "software engineering", "IT Services" ]

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

    function handleOffset() {
      const offsetValue = window.pageYOffset > 0;
      if(isOffset !== offsetValue){
        toggleOffset(!isOffset);
      }
    }
    document.addEventListener('scroll', handleOffset, {passive: true});
    
    return () => {
      clearInterval(interval)
      document.removeEventListener('scroll', handleOffset);
    };

  }, [words, toggleOffset, isOffset]);


  return (
    <Layout>
      <SEO 
        title="Home" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research",]} 
      />

      {/* Top part of the page */}
      <div className="flex flex-wrap" style={{backgroundImage: `url(${Earth})`, backgroundAttachment: "fixed", backgroundSize: "cover"}}>
        <div className={`${isOffset ? `` : ``} flex flex-wrap`}>
          {/* Left component */}
          <div id="homeBar" className={`${isOffset ? `md:w-5/12` : ``} sm:sticky sm:top-0 flex-col flex-wrap w-full text-white text-gray-600 overflow-hidden md:min-h-100 md:max-h-100`} style={{transition: ".4s ease", background: "rgba(255,255,255, 1)"}}>
            <div className="px-12 text-center pt-24 ipadp:pt-10vh" style={{fontFamily: "TUoS Blake"}}>
              <p className="text-gray-700 text-xl ipadp:text-3xl 2xl:text-5xl font-bold">Data Visualisation Hub</p>
              <div className="hidden ipadp:block text-gray-500 mt-6 mb-2 px-6 typewriter text-lg 2xl:text-xl">
                <p>Promoting and building community around data</p> 
                <p>visualisation at the University of Sheffield.</p>
              </div>
              <p className="ipadp:hidden text-gray-500 mt-4 px-2">Promoting and building community around data visualisation at the University of Sheffield.</p>
            </div>

            <div className="mt-12 2xl:mt-32 relative text-gray-600 w-full text-center">
              <div className="bg-white inline-block focus:outline-none" style={{boxShadow: "-10px 5px 40px -11px rgba(0, 0, 0, 0.25)", padding: "0.9rem", paddingTop: "1.04rem"}}><FiSearch className="inline-block text-center text-3xl -mt-2" /></div>
              <input id="homeSearch" className="bg-white pl-1 pr-10 lg:pr-16 ipadp:pr-16 2xl:pr-48 text-lg focus:outline-none shadow-2xl" style={{boxShadow: "10px 5px 40px -17px rgba(0, 0, 0, 0.25)", height: "3.5rem"}}
                type="search" name="search" placeholder="What are you looking for?"  />
            </div>

            <div className="hidden ipadp:flex justify-center py-4 xl:py-8">
              <div className="w-1/7 mr-24">
                <div className="mb-1 text-gray-600 font-semibold text-xs xl:text-base 2xl:text-lg">Dataviz.Shef</div>
                  <ul className="list-reset leading-normal text-xs xl:text-sm 2xl:text-base">
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="/blog/category/news">News</Link></li>
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="/blog/category/articles">Articles</Link></li>
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="/events">Events</Link></li>
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="/blog/category/tutorial">Tutorials</Link></li>
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="/about/#more">About us</Link></li>
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
            
            <div onClick={() => {navigate('/#what')}} className="flex my-10 2xl:my-16 mx-auto bg-gray-900 hover:bg-white text-center cursor-pointer group py-1 xl:py-2 2xl:py-3 hover:shadow-2xl text-center shadow-lg justify-center self-center items-center max-w-25 ipadp:max-w-15" style={{transition: ".3s ease", minHeight: "2.7rem", maxHeight: "3.6rem"}} >
              <Link to="/#what">
                <p className="group-hover:text-highlight_2 text-gray-200 font-bold text-sm xl:text-lg">Explore</p>
              </Link>
            </div> 

            <div className="flex text-xs text-gray-500 mt-12 xl:mt-28 2xl:mt-32 mb-1 mx-auto justify-center">
              {/* <a className="text-gray-500 hover:text-highlight_2">Library &nbsp;</a> | 
              <a className="text-gray-500 hover:text-highlight_2">&nbsp; IT Services &nbsp;</a> |
              <a className="text-gray-500 hover:text-highlight_2">&nbsp; RSE &nbsp;</a> | */}
              <a className="text-gray-500 hover:underline">&nbsp; Not sure where to start? &nbsp;</a>
            </div>
            
          </div>
          {/* End of left component */}
          
          
          {/* Right component */}
          <div className={`${isOffset ? `` : ``} flex flex-wrap w-full text-gray-100 md:w-7/12 mt-26`} style={{marginLeft: "auto", transition: ".5s ease"}}>  {/*style={{borderTop: "50px solid #000000", }} */}
            {/* An example of visualisation, update weekly/monthly? */}
            <div className="flex flex-wrap min-h-100 text-center items-center mx-auto">
              <p>An example of visualisation, update weekly/monthly?</p>
            </div>

            <EventNotice eventBrite={eventBrite} />     
            <FeaturedPost featuredPost={featuredPost} />

            <div className="flex flex-wrap w-full text-white font-bold text-center text-2xl cursor-pointer" style={{fontFamily: "TUoS Stephenson", }} >
              <div className="w-1/2 ipadp:w-1/4 py-12 ipadp:py-24 2xl:py-32 greyScale-60 hover:greyScale-0 transform hover:scale-105 hover:z-10" onClick={() => {navigate('/blog/category/articles')}} style={{backgroundColor: "#ff5e5e"}}>ARTICLES</div>
              <div className="w-1/2 ipadp:w-1/4 py-12 ipadp:py-24 2xl:py-32 greyScale-60 hover:greyScale-0 transform hover:scale-105 hover:z-10" onClick={() => {navigate('/blog/category/events')}} style={{backgroundColor: "#f3f218"}}>EVENT</div>
              <div className="w-1/2 ipadp:w-1/4 py-12 ipadp:py-24 2xl:py-32 greyScale-60 hover:greyScale-0 transform hover:scale-105 hover:z-10" onClick={() => {navigate('/blog/category/news')}} style={{backgroundColor: "#00aeef"}}>NEWS</div>
              <div className="w-1/2 ipadp:w-1/4 py-12 ipadp:py-24 2xl:py-32 greyScale-60 hover:greyScale-0 transform hover:scale-105 hover:z-10" onClick={() => {navigate('/blog/category/tutorial')}} style={{backgroundColor: "#99f318"}}>TUTORIAL</div>
            </div>

            <LatestPost latestPost={latestPost} />
            
            <div className="flex w-full bg-gray-900 hover:bg-gray-100 text-center cursor-pointer group py-3 hover:py-0 text-center shadow-2xl justify-center self-center items-center" style={{transition: ".3s ease", height: "3.6rem"}} onClick={() => {navigate('/blog')}}>
              <Link to="/blog"><p className="group-hover:text-highlight_2 text-gray-200 font-bold text-xl group-hover:text-2xl">Read more</p></Link>
            </div> 
            
            <div className="flex flex-wrap min-h-100 text-center items-center w-full bg-white">
              <p className="text-gray-600 mx-auto">What goes here?</p>
            </div>
          </div> 
          {/* End of right component */}

        </div>
      </div>
      {/* End of top page */}     
      
      <Guide />

    </Layout>
  )
}


export default IndexPage

IndexPage.propTypes = {
  pageContext: PropTypes.any,
  data: PropTypes.any
}

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
            author
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
            author
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
    
    eventBrite: allEventbriteEvents(sort: {fields: start___local, order: ASC}, filter: {end: {local: {gt: "2020-03-31"}}}) {
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

