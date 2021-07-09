import React from 'react'
import PropTypes from "prop-types"
import { IoIosArrowUp } from "react-icons/io"
import { trackScrollPosition } from "../../utils/hooks/trackScrollPosition"

const scrollTop = () => {

  trackScrollPosition("scrollTop-btn");

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