import React from 'react'
import PropTypes from "prop-types"
import styled from "styled-components"
import tw, { styled as styled_twin } from 'twin.macro'
import { Link as gatsby_Link } from "gatsby"
import { MdKeyboardArrowRight } from "react-icons/md"

export const PostBox = styled.div`
  display: block;
  
  &:before {
    content:'';
    width:100%;
    height:100%;    
    position:absolute;
    left:0;
    top:0;
    background:linear-gradient(transparent 150px, white);
 }
`


// ************ Box style for blogposts ************//
export const ArrowBox = styled.div`
  position: relative;
  background-color: #fff;
  border-top: 0px solid white;
  
  &:before, &:after {
    bottom: 100%;
    left: 14%;
    border: solid white;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:before {
    border-color: transparent;
    ${'' /* triangle border */}
    border-bottom-color: transparent;  
    border-width: 20px;   
    margin-left: -20px;
  }

  &:after {
    border-color: transparent;
    ${'' /* triangle inside color */}
    border-bottom-color: #fff;
    ${'' /* 4px less than :before */}
    border-width: 15px;
    margin-left: -15px;
  }

  .group:hover > & {
    border-top: 0px solid #00aeef;
  }

  .group:hover > &:before {
    border-bottom-color: #00aeef;
  }

`

export const ArrowBox_featured = styled(ArrowBox)`
  background-color: #1a202c;

  &:after {
    border-bottom-color: #1a202c;
  }

  .group:hover > & {
    border-top: 0px solid #1a202c;
  }

`

export const IMG = styled.div`
  transition: .5s ease;
  background-size: cover;
  background-position: center;
  ${tw`transform group-hover:scale-110`}
`

export const IMG_DIV = styled.div`
  position: relative;
  overflow: hidden;
  background: black;
  display: grid;
  &::before {
    transition: .5s ease;
  }

  .group:hover > &::before {
    -webkit-box-shadow: inset 0 -3px 0 #00aeef;
    -moz-box-shadow: inset 0 -3px 0 #00aeef;
    box-shadow: inset 0 -3px 0 #00aeef;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    z-index: 1;
  }
`




export const CatBtn = styled_twin(gatsby_Link)`
  ${tw`inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-800 text-gray-100 border-gray-800 border-1 hover:border-transparent rounded-full text-xs`}
`

export const TagBtn = styled_twin(gatsby_Link)`
  ${tw`inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-white text-gray-700 border-1 border-gray-200 hover:border-transparent rounded-full text-xs`}
`

export const HomeBlogNav = styled_twin.div`
  ${tw`w-1/2 md:w-1/4 py-2 ipadp:py-3 hover:text-white border-b-2 border-black transition duration-700 ease-in-out`}
`

export const BlackButton = styled_twin.button`
  ${ ({ external }) => !external && tw`mt-8` };
  ${tw`bg-gray-900 relative inline-block hover:bg-highlight_2 text-center hover:text-white text-gray-100 font-semibold py-2 px-6 border-2 border-transparent transition duration-500`}
`

export const GreyButton = styled_twin.button`
  ${ ({ external }) => !external && tw`mt-8` };
  ${tw`bg-gray-100 text-gray-700 hover:bg-highlight_2 text-center hover:text-white font-semibold py-2 px-6 border-2 border-transparent transition duration-500`}
`

export const BlackWhiteButton = styled_twin.button`
  ${ ({ external }) => !external && tw`mt-8` };
  ${tw`bg-gray-900 text-center hover:text-highlight_2 hover:bg-white transition duration-500 shadow-lg hover:shadow-2xl text-gray-100 font-semibold py-2 px-6 border-2 border-transparent `}

`

export const AnimateButton = styled_twin.button`
  ${ ({ external }) => !external && tw`mt-8` };
  ${tw`bg-gray-900 text-center font-semibold py-2 px-6 shadow`};
  border: none;
  z-index: 1;
  position: relative;
  text-align: center;
  overflow: hidden;
  transition: color 0.85s ease-in-out;
  display: inline-block;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: 100%;
    right: 100%;
    width: 5em;
    height: 1em;
    border-radius: 50%;
    color: #fff;
    background-color: #fff;
    transform-origin: center;
    transform: translate3d(10%, 10%, 0) scale3d(0, 0, 0);
    transition: transform 0.55s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color:  #00aeef;
    transform: scale(1.039) perspective(1px) translateZ(0);
    // backface-visibility: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  &:hover::before {
    transform: translate3d(10%, 10%, 0) scale3d(15, 15, 15);
  }

`

export const ButtonWithArrow = (props) => {
  const arrowStyle = "inline-block transform group-hover:translate-x-1 transition duration-100"

  switch(props.type){
    case 'BlackButton':
      return (
        <BlackButton {...props}>
        {props.children}
        <MdKeyboardArrowRight className={arrowStyle} />
        </BlackButton>
      )
    
    case 'GreyButton':
      return (
        <GreyButton {...props}>
        {props.children}
        <MdKeyboardArrowRight className={arrowStyle} />
        </GreyButton>
      )

    case 'BlackWhiteButton':
      return (
        <BlackWhiteButton {...props}>
        {props.children}
        <MdKeyboardArrowRight className={arrowStyle} />
        </BlackWhiteButton>
      )

    default:
      return (
        <BlackButton {...props}>
        {props.children}
        <MdKeyboardArrowRight className={arrowStyle} />
        </BlackButton>
      )
  }
}

ButtonWithArrow.propTypes = {
  children: PropTypes.any,
  type: PropTypes.any,
  props: PropTypes.any,
}