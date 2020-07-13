import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
//import university_logo from "../images/TUOS_LOGO_REVERSED.png"
 import university_logo from "../images/TUOSlogo.png"
import { FiSearch } from "react-icons/fi"
import { FaGoogle, FaSlack } from "react-icons/fa"
//import tw, { styled as styled_twin } from 'twin.macro'
import { A } from "../components_style/blogPostStyle"

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const [isScroll, toggleScrolled] = useState(false);
  const wlp = window.location.pathname

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

  
  const NavLink = (props) => {
    // Check path contains blog => check if it is tag/cat main page. Assign different colour
    
    const navColorInBlog = `${isScroll ? `text-black hover:text-highlight_2t` : [wlp.includes("/blog/") ? 
                              [wlp.includes("/blog/category") ? 
                                `text-gray-500 hover:text-white` : [wlp.includes("/blog/tag/") ? 
                                  `text-gray-500 hover:text-white` : `text-gray-300 hover:text-white`]
                              ] 
                            : `text-gray-500 hover:text-white`]}`
    
    switch(props.type){
      case 'a':
        return (
          <A {...props} className={`${navColorInBlog} transition duration-500 ease-in-out md:mr-2 inline-block no-underline px-4 py-1`} style={{background: 'none'}}>
            {props.children}
          </A>
        )
    
      case 'Link':
        return (
          <Link {...props} className={`${navColorInBlog} transition duration-500 ease-in-out md:mr-2 inline-block no-underline px-4 py-1`}>
            {props.children}
          </Link>
        )
      
      case 'a-icon':
        return (
          <A {...props} className={`${navColorInBlog} flex items-center`} style={{background: 'none'}}>
            {props.children}
          </A>
        )

      case 'Link-icon':
        return (
          <Link {...props} className={`${navColorInBlog} flex items-center`}>
            {props.children}
          </Link>
        )
    }
  }


  return (
    <header className="font-semibold z-50 relative">
      <nav id="navbar" className={`${isScroll ? `shadow-xl` : ``} flex items-center justify-between flex-wrap px-5 fixed w-full z-10 overflow-hidden`} 
        style={{backgroundColor: `${isScroll ? "rgba(255,255,255,1)" : [wlp.includes("/blog/") ? "" : ""]}`, transition: "top 0.8s"}}
      > 
        <div className="flex items-center flex-shrink-0 mr-5">
          <A className={`${isScroll ? `` : [wlp === "/" ? `hidden` : ``]} `} href="https://www.sheffield.ac.uk/"><img className="mt-1" style={{maxWidth: "13.6vh"}} src={ `${isScroll ? university_logo : university_logo}` } /></A>
          <div className={`${isScroll ? [wlp === "/" ? `text-gray-300` : ``] : [wlp === "/" ? `hidden` : ``]} ml-4 text-lg font-bold transition duration-1000 ease-in-out`}>
            <Link className="textanimate" to="/">Dataviz.Shef</Link>
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
                <NavLink type="Link" activeStyle={{ color: `${isScroll ? "#00aeef" : "white" }`, fontWeight: "bold" }} partiallyActive={true} key={link.title} to={link.route}>
                  {link.title}
                </NavLink> 
                : 
                <NavLink type="a" href={link.route} key={link.title}>
                  {link.title}
                </NavLink>  
              )) 
            }
            <NavLink type="a-icon" href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group">
              <button className="text-md transition duration-500 ease-in-out inline-block no-underline ml-2 mr-2 -mb-1"><FaGoogle /></button>
            </NavLink>
            <NavLink type="a-icon" href="https://join.slack.com/t/shef-dataviz/signup">
              <button className="text-md transition duration-500 ease-in-out inline-block no-underline ml-2 mr-2 -mb-1"><FaSlack /></button>
            </NavLink>
            <NavLink type="Link-icon" to="/search">
              <button className="mr-4 ml-2 text-sm xl:text-lg transition duration-500 ease-in-out md:mr-2 inline-block no-underline"><FiSearch  /></button>
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
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
