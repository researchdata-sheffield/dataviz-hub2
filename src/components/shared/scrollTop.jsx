import React, { useEffect } from 'react'
import PropTypes from "prop-types"
import { IoIosArrowUp } from "react-icons/io"


const scrollTop = () => {
  useEffect(() => {
    function scrollTop () {
      var scrollTOP = document.getElementById("scrollTop-btn");
      scrollTOP.style.opacity = "0";
      if((window.pageYOffset) > 300){
        scrollTOP.style.opacity = "1"
      }
    }
    document.addEventListener('scroll', scrollTop, {passive: true});
    return () => {
      document.removeEventListener('scroll', scrollTop);
    };
  }, []);


  return (
    <div id="scrollTop-btn" className="scrollTop-btn cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <IoIosArrowUp className="scrollTopArrow absolute font-bold text-3xl text-gray-500 group-hover:text-white" />
    </div>
  )

}

export default scrollTop

scrollTop.propTypes = {
  pageContext: PropTypes.any,

}