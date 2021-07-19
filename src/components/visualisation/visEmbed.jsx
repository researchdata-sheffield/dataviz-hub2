import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ImEmbed2 } from "react-icons/im"


/**
 * Embed button for visualisation items
 * Visible only if 
 */
const visEmbed = ({mdx, custom = false}) => {
  const [embedMenu, setEmbedMenu] = useState(false);

  return (
    <>
      <button className="text-3xl" title="Embed visualisation">
        <div className="py-1 px-2 text-white bg-black hover:bg-white hover:text-black flex justify-center rounded-md text-xl cursor-pointer"><ImEmbed2 /></div>

        <div 
          className={`${embedMenu ? '' : 'hidden'} fixed rounded-lg py-5 px-6 bg-gray-700 text-white text-base shadow-2xl text-left`} 
          style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)', maxWidth: '400px'}}
        >
        
        </div>
      </button>
    </>
  )
}

visEmbed.propTypes = {
  mdx: PropTypes.any
}

export default visEmbed

