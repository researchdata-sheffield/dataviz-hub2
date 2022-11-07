import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";
import { Link as gatsby_Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MdKeyboardArrowRight } from "react-icons/md";

// TODO: make this global with css variables
const COLOURS = {
  "brand-blue": "#9ADBE8",
  "brand-black": "#131E29",
  "brand-purple": "#440099"
};

export const PostBox = styled.div`
  display: block;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 150px, white);
  }
`;

// ************ Box style for blogposts ************//
export const ArrowBox = styled.div`
  position: relative;
  background-color: #fff;
  border-top: 0px solid white;

  &:before,
  &:after {
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
    ${"" /* triangle border */}
    border-bottom-color: transparent;
    border-width: 20px;
    margin-left: -20px;
  }

  &:after {
    border-color: transparent;
    ${"" /* triangle inside color */}
    border-bottom-color: #fff;
    ${"" /* 4px less than :before */}
    border-width: 15px;
    margin-left: -15px;
  }

  .group:hover > & {
    border-top: 0px solid ${COLOURS["brand-purple"]};
  }

  .group:hover > &:before {
    border-bottom-color: ${COLOURS["brand-purple"]};
  }
`;

export const ArrowBox_featured = styled(ArrowBox)`
  background-color: ${COLOURS["brand-black"]};

  &:after {
    border-bottom-color: ${COLOURS["brand-black"]};
  }

  .group:hover > & {
    border-top: 0px solid ${COLOURS["brand-black"]};
  }
`;

export const IMG = styled(GatsbyImage)`
  transition: 0.5s ease;
  background-size: cover;
  background-position: center;
  ${tw`group-hover:scale-110`}
`;

export const IMG_DIV = styled.div`
  position: relative;
  overflow: hidden;
  background: black;
  display: grid;
  min-height: 380px;
  max-height: 450px

  &::before {
    transition: .5s ease;
  }

  .group:hover > &::before {
    -webkit-box-shadow: inset 0 -3px 0 ${COLOURS["brand-purple"]};
    -moz-box-shadow: inset 0 -3px 0 ${COLOURS["brand-purple"]};
    box-shadow: inset 0 -3px 0 ${COLOURS["brand-purple"]};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    z-index: 1;
  }

  @media (max-width: 1280px) {
    min-height: 350px;
    max-height: 530px;
  }

  @media (min-width: 1300px) {
    min-height: 480px;
    max-height: 530px;
  }

  @media (min-width: 1440px) {
    min-height: 500px;
    max-height: 600px;
  }
`;

export const CatBtn = styled(gatsby_Link)`
  ${tw`inline-block hover:bg-brand-blue hover:text-brand-black py-1 px-2 mt-2 mr-2 bg-gray-800 text-gray-100 border-gray-800 border-1 hover:border-transparent rounded-full text-xs`}
`;

export const TagBtn = styled(gatsby_Link)`
  ${tw`inline-block hover:bg-brand-blue hover:text-brand-black py-1 px-2 mt-2 mr-2 bg-white text-gray-700 border-1 border-gray-200 hover:border-transparent rounded-full text-xs`}
`;

export const HomeBlogNav = styled.div`
  ${tw`w-1/2 md:w-1/4 py-2 lg:py-3 hover:text-white border-b-2 border-black transition duration-700 ease-in-out`}
`;

export const BlackButton = styled.button`
  ${({ external }) => !external && tw`mt-8`};
  ${tw`bg-gray-900 rounded-sm relative inline-block hover:bg-brand-blue text-center hover:text-white text-gray-100 font-semibold py-2 px-6 border-2 border-transparent transition duration-500`}
`;

export const GreyButton = styled.button`
  ${({ external }) => !external && tw`mt-8`};
  ${tw`bg-gray-100 rounded-sm text-gray-700 hover:bg-brand-blue text-center hover:text-white font-semibold py-2 px-6 border-2 border-transparent transition duration-500`}
`;

export const BlackWhiteButton = styled.button`
  ${({ external }) => !external && tw`mt-8`};
  ${tw`bg-gray-900 rounded-sm text-center hover:text-brand-blue hover:bg-white transition duration-500 shadow-lg hover:shadow-2xl text-gray-100 font-semibold py-2 px-6 border-2 border-transparent `}
`;

export const AnimateButton = styled.button`
  ${({ external }) => !external && tw`mt-8`};
  ${tw`bg-white text-black text-center font-semibold py-2 px-4 shadow`};
  border: none;
  z-index: 1;
  position: relative;
  text-align: center;
  overflow: hidden;
  transition: all 0.5s ease;
  display: inline-block;
  box-shadow: ${({ boxShadow }) =>
      boxShadow ? boxShadow : `rgba(255,121,180,1)`}
    4px 4px 0.1px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${({ hoverBC }) => (hoverBC ? hoverBC : `#111827`)};
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
`;

export const ArrowButton = (props) => {
  const arrowStyle =
    "inline-block group-hover:translate-x-1 transition duration-100";

  switch (props.type) {
    case "GreyButton":
      return (
        <GreyButton {...props}>
          {props.children}
          <MdKeyboardArrowRight className={arrowStyle} />
        </GreyButton>
      );

    case "BlackWhiteButton":
      return (
        <BlackWhiteButton {...props}>
          {props.children}
          <MdKeyboardArrowRight className={arrowStyle} />
        </BlackWhiteButton>
      );

    case "AnimateButton":
      return (
        <AnimateButton {...props}>
          {props.children}
          <MdKeyboardArrowRight className={arrowStyle} />
        </AnimateButton>
      );

    default:
      return (
        <BlackButton {...props}>
          {props.children}
          <MdKeyboardArrowRight className={arrowStyle} />
        </BlackButton>
      );
  }
};
ArrowButton.propTypes = {
  children: PropTypes.any,
  type: PropTypes.any,
  props: PropTypes.any
};

export const A_footer = (props) => {
  return (
    <a
      {...props}
      className={`${props.className} text-gray-400 hover:text-brand-blue`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};
A_footer.propTypes = {
  children: PropTypes.any,
  href: PropTypes.any,
  className: PropTypes.any
};
