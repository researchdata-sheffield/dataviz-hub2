import React from 'react'
import PropTypes from "prop-types"
import styled from "styled-components"
import tw, { styled as styled_twin } from 'twin.macro'
import { Link } from "gatsby"
import { MdKeyboardArrowRight } from "react-icons/md"

// ************ Box style for blogposts ************//
export const ArrowBox = styled.div`
  position: relative;
  background-color: #fff;
  border-top: 0px solid white;
  transition: .5s ease;
  
  &:before, &:after {
    bottom: 100%;
    left: 18%;
    border: solid white;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    transition: .5s ease;
  }

  &:before {
    border-color: transparent;
    ${'' /* triangle border */}
    border-bottom-color: transparent;  
    border-width: 24px;   
    margin-left: -24px;
  }

  &:after {
    border-color: transparent;
    ${'' /* triangle inside color */}
    border-bottom-color: #fff;
    ${'' /* 4px less than :before */}
    border-width: 18px;
    margin-left: -18px;
  }

  .group:hover > & {
    border-top: 0px solid #00aeef;
  }

  .group:hover > &:before {
    border-bottom-color: #00aeef;
  }

`

export const ArrowBox_featured = styled(ArrowBox)`
  background-color: #000;

  &:before, &:after {
    border-bottom-color: #000;
  }

`

export const IMG = styled.div`
  background-size: cover;
  background-position: center;

  .group:hover > & {
    -webkit-box-shadow: inset 0 -4px 0 #00aeef;
    -moz-box-shadow: inset 0 -4px 0 #00aeef;
    box-shadow: inset 0 -4px 0 #00aeef;
  }
`

export const CatBtn = styled_twin(Link)`
  ${tw`inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-800 text-gray-100 border-gray-800 border-1 hover:border-transparent`}
`

export const TagBtn = styled_twin(Link)`
  ${tw`inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-white text-gray-700 border-1 border-gray-300 hover:border-transparent`}
`

export const HomeBlogNav = styled_twin.div`
  ${tw`w-1/2 md:w-1/4 py-2 ipadp:py-3 hover:text-white border-b-2 border-black transition duration-700 ease-in-out`}
`

export const BlackButton = styled_twin.button`
  ${ ({ external }) => !external && tw`mt-8` };
  ${tw`bg-gray-900 relative inline-block hover:bg-highlight_2 text-center hover:text-white text-gray-100 font-semibold py-2 px-6 border-2 border-transparent shadow transition duration-500`}
`

export const GreyButton = styled_twin.button`
  ${ ({ external }) => !external && tw`mt-8` };
  ${tw`bg-gray-100 text-gray-700 hover:bg-highlight_2 text-center hover:text-white font-semibold py-2 px-6 border-2 border-transparent shadow transition duration-500`}
`

export const BlackWhiteButton = styled_twin.button`
  ${ ({ external }) => !external && tw`mt-8` };
  ${tw`bg-gray-900 text-center hover:text-highlight_2 hover:bg-white transition duration-500 shadow-lg hover:shadow-2xl text-gray-100 font-semibold py-2 px-6 border-2 border-transparent shadow`}

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
    backface-visibility: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  &:hover::before {
    transform: translate3d(10%, 10%, 0) scale3d(15, 15, 15);
  }

`

export const ButtonWithArrow = (props) => {
  switch(props.type){
    case 'BlackButton':
      return (
        <BlackButton {...props}>
        {props.children}
        <MdKeyboardArrowRight className="inline-block" />
        </BlackButton>
      )
    
    case 'GreyButton':
      return (
        <GreyButton {...props}>
        {props.children}
        <MdKeyboardArrowRight className="inline-block" />
        </GreyButton>
      )

    case 'BlackWhiteButton':
      return (
        <BlackWhiteButton {...props}>
        {props.children}
        <MdKeyboardArrowRight className="inline-block" />
        </BlackWhiteButton>
      )

    default:
      return (
        <BlackButton {...props}>
        {props.children}
        <MdKeyboardArrowRight className="inline-block" />
        </BlackButton>
      )
  }
}

ButtonWithArrow.propTypes = {
  children: PropTypes.any,
  type: PropTypes.any,
  props: PropTypes.any,
}