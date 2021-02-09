import React, { useEffect } from 'react'
import PropTypes from "prop-types"
import { IoIosArrowUp } from "react-icons/io"


const scrollTop = () => {
  useEffect(() => {
    function scrollTopAction () {
      var scrollBtn = document.getElementById("scrollTop-btn");
      scrollBtn.style.opacity = "0";
      if((window.pageYOffset) > 300){
        scrollBtn.style.opacity = "1"
      }
    }
    document.addEventListener('scroll', scrollTopAction, {passive: true});
    return () => {
      document.removeEventListener('scroll', scrollTopAction);
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