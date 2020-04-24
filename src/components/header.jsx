import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
//import university_logo from "../images/TUOS_LOGO_REVERSED.png"
 import university_logo from "../images/TUOSlogo.png"
import { FiSearch } from "react-icons/fi"
import { FaGoogle, FaSlack } from "react-icons/fa"

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const [isScroll, toggleScrolled] = useState(false);

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
  }, [toggleScrolled, isScroll]);
  
  
  if (typeof window !== 'undefined') {
    let prevScrollpos = window.pageYOffset;
  
    window.onscroll = function () {
      const maxScroll = document.body.clientHeight - window.innerHeight;
      let currentScrollPos = window.pageYOffset;
      if (
          (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
        || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
        || (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-300px";
         document.getElementById("navbar").style.paddingTop = "1px";
         document.getElementById("navbar").style.paddingBottom = "1px";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  return (
    <header className="font-semibold z-50" >
     
      <nav id="navbar" className={`${isScroll ? `shadow-2xl` : ``} flex items-center justify-between flex-wrap px-5 py-2 fixed w-full z-10`} style={{backgroundColor: `${isScroll ? "rgba(34,34,34,0.9)" : ""}`, transition: "top 0.8s", overflow: "hidden"}} > 
        
        <div className="flex items-center flex-shrink-0 text-white mr-5">
          <a className={`${isScroll ? `` : [window.location.pathname === "/" ? `hidden` : ``]} `} href="https://www.sheffield.ac.uk/" target="_blank" rel="noopener noreferrer"><img style={{width: "11.6vh"}} src={ `${isScroll ? university_logo : university_logo}` }></img></a>
          <div className={`${isScroll ? [window.location.pathname === "/" ? `text-gray-300` : ``] : [window.location.pathname === "/" ? `hidden` : `text-white`]} ml-4 text-lg transition duration-1000 ease-in-out`}>
            <Link className="textanimate" to="/">StayHome.Shef</Link>
          </div>
        </div>

        <div onClick={() => toggleExpansion(!isExpanded)} className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        
        <div className={`${isExpanded ? `block flex-col` : `hidden`} lg:block py-2 flex items-center w-full lg:w-auto text-xs xl:text-sm`} style={{backgroundColor: `${isExpanded ? [isScroll ? "" : "rgba(34,34,34,0.9)" ] : ""}` }}>
          <div className="justify-end flex flex-wrap items-center">
            {[
/*               {
                route: `/`,
                title: `Home`
              }, */
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
                <Link 
                  activeStyle={{ color: `${isScroll ? "#00aeef" : "white" }` }} 
                  partiallyActive={true}
                  className={`${isScroll ? `text-white hover:text-highlight_2t` : ` text-gray-400 hover:text-white`} transition duration-500 ease-in-out md:mr-2 inline-block no-underline px-4 py-1`}
                  key={link.title} to={link.route}>{link.title}
                </Link> 
                : 
                <a className={`${isScroll ? `text-white hover:text-highlight_2t` : ` text-gray-400 hover:text-white`} transition duration-500 ease-in-out md:mr-2 inline-block no-underline px-4 py-1`}
                  href={link.route} target="_blank" rel="noopener noreferrer" alt="orda.shef.ac.uk"
                  key={link.title}>{link.title}
                </a>  
              )) 
            }
            <button className="text-md transition duration-500 ease-in-out inline-block no-underline pl-4 pr-2">
              <a className={`${isScroll ? `text-white hover:text-highlight_2t` : ` text-gray-400 hover:text-white` } `} href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
            </button>
            <button className="text-md transition duration-500 ease-in-out inline-block no-underline pl-2 pr-2">
              <a className={`${isScroll ? `text-white hover:text-highlight_2t` : ` text-gray-400 hover:text-white` } `} href="https://join.slack.com/t/shef-dataviz/signup" target="_blank" rel="noopener noreferrer"><FaSlack /></a>
            </button>
            {/* FIXME: Search button dropdown */}
            <button className="pl-2 pr-4 text-sm xl:text-lg transition duration-500 ease-in-out md:mr-2 inline-block no-underline" title="Search function is under development" >
              <Link className={ `${isScroll ? `text-white hover:text-highlight_2t` : ` text-gray-400 hover:text-white`} `} to="/search"><FiSearch  /></Link>
            </button>

          </div>
        </div>
      </nav>

    </header>
  )



}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
