import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ImEmbed2 } from "react-icons/im"
import { MdCancel, MdError, MdContentCopy } from "react-icons/md"

/**
 * Embed button for visualisation items
 * Retrieve the element <EmbedCode> in <VisPagination> and render its content
 */
const visEmbed = (props) => {
  const [embedMenu, setEmbedMenu] = useState(false);
  const [embedCode, setEmbedCode] = useState([]);

  useEffect(() => {
    const filtered = React.Children.toArray(props.children).filter((child) => {
      return child.props.mdxType == "EmbedCode";
    })
    setEmbedCode(filtered);
  }, [props]);


  // Hide code block's scrollbar
  useEffect(() => {
    if (typeof window === "undefined") { return; }

    let element = document?.querySelector('#embedMenu')?.querySelector('.gatsby-highlight');

    if (element && !element?.classList?.contains("hideScrollBar")) {
      element.classList.add("hideScrollBar");
    }
  }, [embedMenu])


  function copyEmbedCode() {
    let element = document.querySelector('#embedMenu').querySelector('.gatsby-highlight');
    let copyText = element.innerText || element.textContent;

    // create an input element for copying to clipboard
    var input = document.body.appendChild(document.createElement("input"));
    input.value = copyText;
    input.select();
    document.execCommand('copy');
    input.parentNode.removeChild(input);

    // Change button style
    let copyBtn = document.querySelector('#copyEmbedCodeBtn');
    let originText = copyBtn.innerHTML;
    copyBtn.classList.add("bg-green-200");
    copyBtn.innerHTML = "Copied!";

    setTimeout(() => {
      copyBtn.innerHTML = originText;
      copyBtn.classList.remove("bg-green-200");
    }, 3000);
  }


  return (
    <div className="text-7xl" title="Embed visualisation">
      <button 
        onClick={() => setEmbedMenu(!embedMenu)} 
        className="py-1 px-2 text-white bg-black hover:bg-white hover:text-black flex justify-center rounded-md text-xl cursor-pointer"
      >
        <ImEmbed2 />
      </button>
      <div 
        id="embedMenu"
        className={`${embedMenu ? 'z-20' : 'hidden z-0'} fixed rounded-lg py-5 px-6 shadow-2xl text-left text-gray-700`} 
        style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)', maxWidth: '800px', userSelect: 'text', backgroundColor: '#f7f7f7'}}
      >
        {embedCode.length == 0 && 
          <div style={{maxWidth: '450px'}}>
            <MdError className="mx-auto text-5xl text-red-500 mb-2 font-semibold" />
            <h5 className="text-lg w-full text-center">Embed code are not provided for this visualisation, please contact the author for more information.</h5>
          </div>
        }
        {embedCode.length != 0 && embedCode[0].props.children}
        {embedCode.length != 0 &&
          <div 
            id="copyEmbedCodeBtn" 
            onClick={() => copyEmbedCode()} 
            className="w-full mt-2 text-xl bg-gray-200 rounded-lg text-gray-900 hover:bg-green-200 p-3 text-center transition duration-500 font-semibold cursor-pointer"
          >
            Copy embed code <MdContentCopy className="text-2xl inline-block ml-1" />
          </div>
        }

        {/* cancel button */}
        <button onClick={() => setEmbedMenu(!embedMenu)} className="text-gray-700 hover:text-brand-pink rounded-md transition duration-300 text-3xl p-1 absolute top-0 right-0 flex items-center" title="Close embed menu">
          <MdCancel />
        </button>
      </div>
    </div>
  )
}

visEmbed.propTypes = {
  props: PropTypes.any
}

export default visEmbed

