import React, { useState } from 'react'
import PropTypes from "prop-types"
import { trackScrollPosition } from "../../utils/hooks/trackScrollPosition"
import { VisTagMenuBtn, VisFooterBtn } from "../style/visStyle"
import { FaTags } from "react-icons/fa"
import { ImMenu3, ImMenu4 } from "react-icons/im"
import Footer from "../shared/footer"
import WordCloud from "./wordCloud"

const visTags = ({ tagMenu, handleTagMenu, tags }) => {
  const [footer, setFooter] = useState(false);
  const footerIconStyle = "text-white text-2xl transform group-hover:scale-110 transition duration-500"

  trackScrollPosition("vis-tag-button");
  trackScrollPosition("vis-footer-button");

  return (
    <div className="relative">
      <VisTagMenuBtn onClick={() => handleTagMenu()} tabindex="100" id="vis-tag-button" className="shadow-2xl flex justify-center items-center group" title="Tag Menu">
        {/* <h3 className="text-gray-300 hover:text-white font-semibold">Tag</h3> */}
        <FaTags className="text-white text-xl transform group-hover:scale-125 transition duration-500" />
      </VisTagMenuBtn>
      <VisFooterBtn onClick={() => setFooter(!footer)} tabindex="101" id="vis-footer-button" className="shadow-2xl flex justify-center items-center group bg-gray-800" title="Footer">
        {!footer && <ImMenu4 className={footerIconStyle} />}
        {footer && <ImMenu3 className={footerIconStyle} />}
      </VisFooterBtn>
      <Footer className={`${footer ? 'fixed bottom-0' : 'hidden' }`} />
      <div className={`${tagMenu ? 'block' : 'hidden translate-x-full'} bg-gray-900 transform duration-500 transition fixed h-full w-full z-50 flex justify-center items-center`}>
        <WordCloud   
          width="100%"
          height="100%"       
          words={tags} 
          colours={["#ececec"]} 
          backgroundColour={["#808080", "#ff5e5e", "#fedf00", "#0066b3", "#6d3db3", "#52ff9c", "#ade1f8", "#f0f0f0", "#fff", "#ff79b4", "#89f064", "#393939", "#08e8ff", "#00aeef"]}
          padding="8px 13px" 
        />
      </div>
      

    </div>
  )
}

export default visTags

visTags.propTypes = {
  className: PropTypes.any,
}