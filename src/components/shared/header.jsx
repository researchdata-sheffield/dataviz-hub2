import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
//import university_logo from "../images/TUOS_LOGO_REVERSED.png"
 import university_logo from "../../images/TUOSlogo.png"
import { FiSearch } from "react-icons/fi"
import { FaGoogle, FaSlack, FaTimes, FaBars, FaRss } from "react-icons/fa"
import { A } from "../style/blogPostStyle"
import { useLocation } from "@gatsbyjs/reach-router"



const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const [isScroll, toggleScrolled] = useState(false);
  const [isOpen, toggleOpen] = useState(false);
  const location = useLocation();
  var currentPagePath = location.pathname;

  useEffect( () => {
    function handleScroll() {
      const scrolledValue = window.scrollY > 10;
      if(isScroll !== scrolledValue){
        toggleScrolled(!isScroll);
      }
    }
    document.addEventListener('scroll', handleScroll, {passive: true});
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isScroll]);
  
  // OnScroll header, hide on scroll down, show on scroll up
  if (typeof window !== 'undefined') {
    let prevScrollPos = window.pageYOffset;
  
    window.onscroll = function () {
      const maxScroll = document.body.clientHeight - window.innerHeight;
      let currentScrollPos = window.pageYOffset;
      if (
          (maxScroll > 0 && prevScrollPos > currentScrollPos && prevScrollPos <= maxScroll) 
        || (maxScroll <= 0 && prevScrollPos > currentScrollPos)
        || (prevScrollPos <= 0 && currentScrollPos <= 0)
        ) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-300px";
         document.getElementById("navbar").style.paddingTop = "1px";
         document.getElementById("navbar").style.paddingBottom = "1px";
      }
      prevScrollPos = currentScrollPos;
    }
  }

  /**
   * Return className for nav links
   * @param {*} props 
   * @param {string} props.type: Link / a
   * @param {string} props.className
   */
  const NavLink = (props) => {

    function navColourClass(mobile = false) {
      var className = "transition duration-300 ";  // don't remove space
      
      if(mobile == true) {
        if(isScroll) {
          className += "text-black hover:text-brand-blue";
          return className;
        }
        className += "text-gray-600 hover:text-brand-blue";
        return className;
      }

      if(isScroll) {
        className += "text-black hover:text-brand-blue";
        return className;
      }

      className += "text-gray-100 group-hover:text-black hover:text-brand-blue";
      return className;
    }
    
    switch(props.type){
      case 'a':
        return (
          <A {...props} className={`${navColourClass(props.mobile)} ${props.className} transition duration-500 ease-in-out md:mr-2 no-underline px-4 py-1`} style={{background: 'none'}}>
            {props.children}
          </A>
        )
    
      case 'Link':
        return (
          <Link {...props} className={`${navColourClass(props.mobile)} ${props.className} transition duration-500 ease-in-out md:mr-2 no-underline px-4 py-1`}>
            {props.children}
          </Link>
        )
      
      case 'a-icon':
        return (
          <A {...props} className={`${navColourClass(props.mobile)} ${props.className} flex items-center`} style={{background: 'none'}}>
            {props.children}
          </A>
        )

      case 'Link-icon':
        return (
          <Link {...props} className={`${navColourClass(props.mobile)} ${props.className} flex items-center`}>
            {props.children}
          </Link>
        )
    }
  }

  function mobileMenuIconClass() {
    var className = "px-3 py-2 flex items-center border rounded outline-none transition duration-300 group-hover:border-gray-700 group-hover:text-gray-700";

    if(isExpanded || isScroll || currentPagePath === "/") {
      className += " text-gray-700 border-gray-700"; // do not delete the space
      return className;
    }
    className += " text-white border-white"; // do not delete the space
    return className;
  }

  useEffect(() => {
    document.querySelector("#copyBtn").addEventListener("click", copyRssLink);
    document.querySelector("#rssMobile").addEventListener("click", copyRssLink);
    document.querySelector("#rssDesktop").addEventListener("click", copyRssLink);

    return () => {
      document.querySelector("#copyBtn").removeEventListener("click", () => {});
      document.querySelector("#rssMobile").removeEventListener("click", () => {});
      document.querySelector("#rssDesktop").removeEventListener("click", () => {});
    }
  })

  function copyRssLink() {
    toggleOpen(true);
    var copyText = document.querySelector('#rssLink');
    copyText.select();
    copyText.setSelectionRange(0, 9999);
    document.execCommand('copy');
  }


  return (
    <header className="font-semibold z-50 relative group">
      <div id="rssBox" className={`${isOpen ? '' : 'invisible'} fixed z-50 bg-white shadow-2xl rounded-lg p-5 lg:p-10 text-center`} style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <FaTimes className="text-2xl absolute top-0 right-0 text-red-500 m-2 rounded-full hover:text-white hover:bg-red-500 transition duration-300 p-1" onClick={() => {toggleOpen(!isOpen)}} />
        <FaRss className="text-4xl mx-auto" />
        <h2 className="text-2xl font-bold mt-3">RSS Feed link copied!</h2>
        <h6 className="text-gray-600 text-sm mt-1">Doesn&apos;t work? Use the following link</h6>
        <div className="inline-block bg-white shadow rounded-md mt-5">
          <input id="rssLink" readOnly={true} className="py-2 pl-2 text-base focus:outline-none pr-3 text-gray-500" type="text" value="https://dataviz.shef.ac.uk/rss.xml" />
          <button id="copyBtn" className="bg-brand-pink p-2 rounded-md cursor-pointer" onClick={() => copyRssLink}> COPY </button>
        </div>
      </div>
      <nav id="navbar" className={`${isScroll ? `shadow-lg bg-white` : 'group-hover:bg-white'} transition duration-500 bg-transparent flex items-center justify-between flex-wrap px-5 fixed w-full z-10 overflow-hidden`} 
        style={{transition: "top 0.3s"}}
      > 
        <div className="flex items-center flex-shrink-0 mr-5">
          <A className={`${isScroll ? `` : [currentPagePath === "/" ? `invisible` : ``]} `} href="https://www.sheffield.ac.uk/" title="The University of Sheffield Logo">
            <img className="mt-1" alt="The University of Sheffield Logo" style={{maxWidth: "13.6vh"}} src={ university_logo } />
          </A>
          <div className={`${isScroll ? "" : [currentPagePath === "/" ? `invisible` : ``]} ml-4 text-lg font-bold transition duration-1000 ease-in-out`}>
            <Link className="textanimate" to="/">Dataviz.Shef</Link>
          </div>
        </div>

        <div onClick={() => toggleExpansion(!isExpanded)} className="block xl:hidden py-2" style={{zIndex: '999'}}>
          <button className={mobileMenuIconClass()} title="Menu">
            { isExpanded ? <FaTimes /> : <FaBars /> } 
          </button>
        </div>
        

        {/* Mobile devices */}
        <div 
          className={`${isExpanded ? "visible" : "invisible opacity-0 translate-x-full transform"} rounded-md xl:hidden shadow-lg px-6 py-10 md:py-16 fixed top-0 left-0 min-h-full min-w-full`} 
          style={{zIndex: "990", transition: ".3s linear", backgroundColor: "#fbfbfb"}}
        >
          {/* <div className="mt-5 pt-6 border-gray-200 border-t-1"></div> */}
          <div className="mt-5 justify-end flex flex-wrap items-center">
            {[
              {
                route: `/`,
                title: `Home`
              },
              {
                route: `/community`,
                title: `Community`
              },
              {
                route: `/events`,
                title: `Events`
              },
              {
                route: `/blog`,
                title: `Blog`
              },
              {
                route: `https://orda.shef.ac.uk/visualisations/`,
                title: `Showcase`
              },
              {
                route: `/about`,
                title: `About`
              },
              ].map(link => ( link.title != 'Showcase' ? 
                <NavLink type="Link" mobile="true" className="block w-full text-2xl" activeStyle={{ color: `${isScroll ? "#00aeef" : "black" }`, fontWeight: "bold" }} key={link.title} to={link.route}>
                  {link.title}
                </NavLink> 
                : 
                <NavLink type="a" mobile="true" className="block w-full text-2xl" href={link.route} key={link.title}>
                  {link.title}
                </NavLink>  
              )) 
            }
            <div className="flex flex-wrap w-full justify-center space-x-4 mt-8 pt-6 border-t-2 border-gray-200">
              <NavLink type="a-icon" mobile="true" className="block mt-3" href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group" title="Join Google group">
                <div className="px-4 text-2xl transition duration-500 ease-in-out no-underline"><FaGoogle /></div>
              </NavLink>
              <NavLink type="a-icon" mobile="true" className="block mt-3" href="https://join.slack.com/t/shef-dataviz/signup" title="Join Slack channel">
                <div className="px-4 text-2xl transition duration-500 ease-in-out no-underline"><FaSlack /></div>
              </NavLink>
              <NavLink id="rssMobile" type="Link-icon" mobile="true" className="block mt-3" target="_self" title="RSS Feed" to="#" onClick={()=>{return false}}>
                <div className="relative px-4 text-2xl transition duration-500 ease-in-out no-underline">
                  <FaRss />
                  <span className="invisible group-hover:visible absolute top-0 right-0 bg-red-500 text-white rounded-md text-xs -mt-4 -mr-2" style={{padding: '2px 5px'}}>new</span>
                </div>
              </NavLink>
              <NavLink type="Link-icon" mobile="true" className="block mt-3" to="/search" title="search dataviz hub">
                <div className="px-4 text-2xl transition duration-500 ease-in-out no-underline"><FiSearch /></div>
              </NavLink>
            </div>
          </div>
        </div>


        {/* Desktop Nav items // backgroundColor: `${isExpanded ? [isScroll ? '' : "rgba(25,25,25,.9)" ] : ""}`  */}
        <div className={`hidden py-2 xl:flex items-center w-auto text-xs xl:text-sm`}>
          <div className="justify-end flex flex-wrap items-center">
            {[
              {
                route: `/community`,
                title: `Community`
              },
              {
                route: `/events`,
                title: `Events`
              },
              {
                route: `/blog`,
                title: `Blog`
              },
              {
                route: `https://orda.shef.ac.uk/visualisations/`,
                title: `Showcase`
              },
              {
                route: `/about`,
                title: `About`
              },
              ].map(link => ( link.title != 'Showcase' ? 
                <NavLink type="Link" activeStyle={{ color: `#00aeef`, fontWeight: "bold" }} partiallyActive={true} key={link.title} to={link.route}>
                  {link.title}
                </NavLink> 
                : 
                <NavLink type="a" href={link.route} key={link.title}>
                  {link.title}
                </NavLink>  
              )) 
            }
            <NavLink type="a-icon" href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group" title="Join Google group">
              <div className="text-md transition duration-500 ease-in-out inline-block no-underline ml-2 mr-2 -mb-1"><FaGoogle /></div>
            </NavLink>
            <NavLink type="a-icon" href="https://join.slack.com/t/shef-dataviz/signup" title="Join Slack channel">
              <div className="text-md transition duration-500 ease-in-out inline-block no-underline ml-2 mr-2 -mb-1"><FaSlack /></div>
            </NavLink>
            <NavLink id="rssDesktop" type="a-icon" title="RSS Feed" target="_self" onClick={()=>{return false}}>
              <div className="relative text-md transition duration-500 ease-in-out inline-block no-underline ml-2 mr-2 -mb-1 cursor-pointer">
                <FaRss />
                <span className="invisible group-hover:visible absolute top-0 right-0 bg-red-500 text-white rounded-md -mt-4 -mr-4" style={{padding: '1px 3px', fontSize: '.7rem', lineHeight: '1rem'}}>new</span>
              </div>
            </NavLink>
            <NavLink type="Link-icon" to="/search" title="Search">
              <div className="mr-4 ml-2 text-sm xl:text-lg transition duration-500 ease-in-out md:mr-2 inline-block no-underline"><FiSearch  /></div>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
  location: PropTypes.any,
  className: PropTypes.string,
  mobile: PropTypes.bool
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
