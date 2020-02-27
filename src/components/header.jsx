import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import university_logo from "../images/TUOS_LOGO_REVERSED.png"
// import university_logo_Color from "../images/TUOSlogo.png"
import { FiSearch } from "react-icons/fi"

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const [isScroll, toggleScrolled] = useState(false);
/*   const [isActive, toggleActive] = useState(false); */

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
  

  return (
    <header className="font-semibold">
      <nav className="flex items-center justify-between flex-wrap px-5 py-4 fixed w-full z-10 top-0 transition duration-300 ease-in-out" style={{backgroundColor: `${isScroll ? "rgba(0,0,0,0.7)" : ""}` }}> 
        
        <div className="flex items-center flex-shrink-0 text-white mr-5">
          <a href="https://www.sheffield.ac.uk/" target="_blank" rel="noopener noreferrer"><img className="w-24" src={ `${isScroll ? university_logo : university_logo}` }></img></a>
          <div className="ml-4 text-2xl">
            <Link to="/" className={`${isScroll ? "text-highlight_2" : "text-white"}`}>Dataviz.Shef</Link>
          </div>
        </div>

        <div onClick={() => toggleExpansion(!isExpanded)} className="block lg:hidden md:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        
        <div className={`${isExpanded ? `block` : `hidden`} md:block md:flex md:items-center w-full md:w-auto`} style={{backgroundColor: `${isExpanded ? [isScroll ? "" : "rgba(0,0,0,0.7)" ] : ""}` }}>
          <div className="list-reset lg:flex justify-end flex-1 items-center">
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
                route: `https://orda.shef.ac.uk/visualisations/`,
                title: `Showcase`
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
                route: `/about`,
                title: `About`
              },
              ].map(link => ( link.title != 'Showcase' ? 
                <Link 
                  activeStyle={{ color: `${isScroll ? "#00aeef" : "white" }` }} 
                  partiallyActive={true}
                  className={`${isScroll ? `text-white hover:text-highlight_2` : ` text-gray-400 hover:text-white`} transition duration-500 ease-in-out mr-5 inline-block no-underline py-2 px-4`}
                  key={link.title} to={link.route} 
                  
                > 
                  {link.title}
                </Link> 
                : 
                <a className={`${isScroll ? `text-white hover:text-highlight_2` : ` text-gray-400 hover:text-white`} transition duration-500 ease-in-out mr-5 inline-block no-underline py-2 px-4`}
                  href={link.route} target="_blank" rel="noopener noreferrer" 
                  key={link.title}
                >
                  {link.title}
                </a>  
              )) 
            }
            {/* FIXME: Search button dropdown */}
            <button className={`${isScroll ? `text-white hover:text-highlight_2` : ` text-gray-400 hover:text-white`} text-xl transition duration-500 ease-in-out mr-5 inline-block no-underline py-2 px-4`}>
              <FiSearch />
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
