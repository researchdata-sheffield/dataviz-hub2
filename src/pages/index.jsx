import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import BackgroundSection from "../components_images/home_background";
import { graphql, Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import FeaturedPost from "../components_home/featuredPost"
import LatestPost from "../components_home/latestPost"
import { FiSearch } from "react-icons/fi"
import moment from "moment"
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"


function IndexPage ({data: {featuredPost, latestPost, eventBrite}}) {
  let datePrev = moment()
  let eventLimit = 0
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

    return () => clearInterval(interval);

  }, [words]);

  function todayDate() {
    var options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      timeZoneName: 'short'
    };
    
    var today = new Date();
    today = new Intl.DateTimeFormat('en-UK', options).format(today);

    return today;
  }

  return (
    <Layout>
      <SEO 
        title="Home" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research",]} 
      />

      {/* top part of the page */}
      <div className="flex flex-wrap">
        <div className="flex flex-wrap">
          {/* left component */}
          <div className="sm:sticky sm:top-0 flex-col flex-wrap w-full md:w-5/12 text-white text-gray-600 overflow-hidden md:max-h-100" style={{background: "rgba(255,255,255, 1)"}}>
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
              <div className="w-1/4 mr-4 xl:mr-8">
                <div className="mb-1 text-gray-600 font-semibold text-xs xl:text-base 2xl:text-lg">Dataviz.Shef</div>
                  <ul className="list-reset leading-normal text-xs xl:text-sm 2xl:text-base">
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="/blog/category/news">News</Link></li>
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="/blog/category/articles">Articles</Link></li>
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="/events">Events</Link></li>
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="/blog/category/tutorial">Tutorials</Link></li>
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="/about/#more">About us</Link></li>
                  </ul>
              </div>
              
              <div className="w-1/4">
                <div className="mb-1 text-gray-600 font-semibold text-xs xl:text-base 2xl:text-lg">Highly searched</div>
                  <ul className="list-reset leading-normal text-xs xl:text-sm 2xl:text-base">
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="/">Visualisation</Link></li>
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="/">Python</Link></li>
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="/">R</Link></li>
                    <li><Link className="text-gray-500 hover:text-highlight_2" to="">Statistics</Link></li>
                  </ul>
              </div>
            </div>
            
            <div className="flex my-10 mx-auto bg-gray-900 hover:bg-white text-center cursor-pointer group py-1 hover:shadow-2xl text-center shadow-lg justify-center self-center items-center max-w-25 ipadp:max-w-15" style={{transition: ".3s ease", minHeight: "2.7rem", maxHeight: "3.6rem"}} onClick={() => {navigate('community/#joinus')}}>
              <Link to="/community/#joinus">
                <p className="group-hover:text-highlight_2 text-gray-200 font-bold text-sm xl:text-lg">Join community</p>
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

          {/* right component */}  
          <div className="flex flex-wrap w-full md:w-7/12 text-gray-100 md:min-h-100" style={{borderTop: "50px solid #000000"}}>
             
            <div className="w-full text-white text-gray-800 flex-col flex-wrap overflow-auto border-red-700" style={{background: "rgba(0,0,0,.00)", }}>
              {eventBrite.edges.map(({node}) => {
                // Check if event's date is later than today's date
                //moment(node.start.local, "DD-MMMM-YYYY") >= moment() &&
                if(moment(node.start.local, "DD-MMMM-YYYY hh:mm") >= moment() && eventLimit < 1 ) {
                  eventLimit = eventLimit + 1

                  let description = node.description.text.split(" ").splice(0, 15)
                  if(description.length < 15){
                    description = description.join(" ");
                  } else {
                    description = description.join(" ").concat(" ...");
                  }
                  return (
                    <div>
                      <div className="text-white text-sm w-full bg-red-700 font-bold px-4 py-2" >Today: {todayDate()}</div>
                      <h1 className="inline-block font-semibold xl:text-xl px-4"><h1 className="text-highlight_2 text-2xl xl:text-4xl inline-block">NEXT</h1> event: &nbsp;<p className="inline-block text-lg xl:text-2xl font-bold">{node.name.text ? node.name.text : "No next event"}</p></h1>
                      <a className="flex flex-wrap w-full overflow-hidden max-h-80 md:max-h-20 xl:max-h-15 bg-white text-gray-700 group px-4 my-1" style={{fontFamily: "TUoS Blake"}} href={node.url} key={node.id} target="_blank" rel="noopener noreferrer">
                        <img className="w-full md:w-3/12 overflow-hidden self-center md:max-h-25 xl:max-h-15" src={node.logo.original.url} style={{objectFit: "cover", objectPosition: "center"}} />
                        <div className="w-full md:w-9/12 pt-1 px-2">
                          <p className="text-gray-500 hidden md:flex lg:flex xl:flex leading-tight text-sm xl:text-lg group-hover:text-highlight_2">{description}</p>
                          <p className="flex pt-2 group-hover:text-highlight_2 text-sm xl:text-lg"><FaClock className="mr-1" />{node.start.local}</p>
                          <div className="flex flex-wrap">
                            <div className="w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6 text-sm xl:text-lg">
                              <p className="flex group-hover:text-highlight_2">{node.online_event && (<FaMapMarkerAlt className="mr-1 mt-1" />)} {node.online_event && ("Online Event") }</p>
                              <p className="flex group-hover:text-highlight_2">
                                {node.venue && ( <FaMapMarkerAlt className="mr-1 mt-1" /> )} 
                                {node.venue && node.venue.name && (node.venue.name + ", ")} 
                                {node.venue && node.venue.address.address_1 && (node.venue.address.address_1 + ", ")} 
                                {node.venue && node.venue.address.city && (node.venue.address.city + ", ")}
                                {node.venue && node.venue.address.postal_code && (node.venue.address.postal_code)}
                              </p>
                                {node.venue.address.localized_address_display}
                                {node.venue.address.localized_area_display}
                                {node.venue.address.localized_multi_line_address_display}
                            </div>
                            <div className="flex flex-wrap w-full sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 content-center justify-center">
                              <button href={node.url} target="_blank" rel="noopener noreferrer" className="hidden group-hover:flex rounded shadow-sm -mt-4 py-1 px-3 text-md bg-gray-600 text-white hover:bg-highlight_2">
                                Register
                              </button>
                            </div>
                          </div>

                        </div>
                      </a> 
                    </div>
                  )
                }
              })}
            </div>
            
            <FeaturedPost featuredPost={featuredPost} />
            <LatestPost latestPost={latestPost} />
            <div className="flex w-full bg-gray-900 hover:bg-gray-100 text-center cursor-pointer group py-3 hover:py-0 text-center shadow-2xl justify-center self-center items-center" style={{transition: ".3s ease", height: "3.6rem"}} onClick={() => {navigate('/blog')}}>
              <Link to="/blog">
                <p className="group-hover:text-highlight_2 text-gray-200 font-bold text-xl group-hover:text-2xl">Read more</p>
              </Link>
            </div> 


          </div>
          {/* End of right component */}
        </div>
      </div>
      {/* End of top page */}     


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

