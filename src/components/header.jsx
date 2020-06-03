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
    const condition = `${isScroll ? `text-white hover:text-highlight_2t` : [ window.location.pathname.includes("/blog/") ? `text-gray-300 hover:text-white` : `text-gray-500 hover:text-white`]}`
    
    switch(props.type){
      case 'a':
        return (
          <A {...props} className={`${condition} transition duration-500 ease-in-out md:mr-2 inline-block no-underline px-4 py-1`}>
            {props.children}
          </A>
        )
    
      case 'Link':
        return (
          <Link {...props} className={`${condition} transition duration-500 ease-in-out md:mr-2 inline-block no-underline px-4 py-1`}>
            {props.children}
          </Link>
        )
      
      case 'a-icon':
        return (
          <A {...props} className={`${condition}`}>
            {props.children}
          </A>
        )

      case 'Link-icon':
        return (
          <Link {...props} className={`${condition}`}>
            {props.children}
          </Link>
        )
    }
  }


  return (
    <header className="font-semibold z-50 relative" >
     
      <nav id="navbar" className={`${isScroll ? `shadow-2xl` : ``} flex items-center justify-between flex-wrap px-5 fixed w-full z-10`} style={{backgroundColor: `${isScroll ? "rgba(73,73,73,.9)" : [window.location.pathname.includes("/blog/") ? "" : ""]}`, transition: "top 0.8s", overflow: "hidden"}} > 
        
        <div className="flex items-center flex-shrink-0 text-white mr-5">
          <A className={`${isScroll ? `` : [window.location.pathname === "/" ? `hidden` : ``]} `} href="https://www.sheffield.ac.uk/"><img style={{width: "11.6vh"}} src={ `${isScroll ? university_logo : university_logo}` }></img></A>
          <div className={`${isScroll ? [window.location.pathname === "/" ? `text-gray-300` : ``] : [window.location.pathname === "/" ? `hidden` : `text-white`]} ml-4 text-lg transition duration-1000 ease-in-out`}>
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
            <button className="text-md transition duration-500 ease-in-out inline-block no-underline pl-4 pr-2">
              <NavLink type="a-icon" href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group"><FaGoogle /></NavLink>
            </button>
            <button className="text-md transition duration-500 ease-in-out inline-block no-underline pl-2 pr-2">
              <NavLink type="a-icon" href="https://join.slack.com/t/shef-dataviz/signup"><FaSlack /></NavLink>
            </button>
            <button className="pl-2 pr-4 text-sm xl:text-lg transition duration-500 ease-in-out md:mr-2 inline-block no-underline">
              <NavLink type="Link-icon" to="/search"><FiSearch  /></NavLink>
            </button>

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
