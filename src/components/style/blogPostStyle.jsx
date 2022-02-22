import styled from "styled-components";
import { Link as gatsby_Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import tw, { styled as styled_twin } from "twin.macro";
import { ArrowButton } from "./styleComponent";
import ModalImage from "react-modal-image";
import { FaTwitter } from "react-icons/fa";

/**
 * Wrap for Learning path items
 * @param {*} props
 * @returns
 */
export const LPWrap = (props) => {
  return (
    <div className="flex flex-wrap w-full justify-start my-8">
      {props.children}
    </div>
  );
};

LPWrap.propTypes = {
  children: PropTypes.any
};

export const LPItem = (props) => {
  return (
    <a
      href={props.href}
      className={`${
        props.className ? props.className : "md:mx-2"
      } w-3/4 md:w-1/4 lg:w-3/10 mb-8 flex flex-col p-4 shadow-md hover:shadow-2xl rounded-xl transition duration-500 text-lg hover:bg-white group text-white hover:text-gray-100 hover:-translate-y-1`}
      style={{
        fontWeight: "600",
        background: `${
          props.Lab
            ? "linear-gradient(225deg, rgba(237,255,0,1) 2%, rgba(0,160,255,1) 96%)"
            : [
                props.Workflow
                  ? "linear-gradient(225deg, rgba(47,255,43,1) 4%, rgba(0,160,255,1) 96%)"
                  : "linear-gradient(225deg, rgba(255,121,180,1) 10%, rgba(41,197,255,1) 100%)"
              ]
        }`
      }}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.children}
      <a href={props.href} rel="noopener noreferrer" target="_blank">
        <ArrowButton className="mt-5 p-0 text-sm bg-transparent text-white hover:underline">
          {props.video ? "watch videos" : "read more"}
        </ArrowButton>
      </a>
    </a>
  );
};

LPItem.propTypes = {
  children: PropTypes.any,
  href: PropTypes.any,
  video: PropTypes.any,
  className: PropTypes.any,
  Lab: PropTypes.any,
  Workflow: PropTypes.any
};

// Underline effect Link
export const Link = styled(gatsby_Link)`
  color: black;
  padding-bottom: 4px;
  background: linear-gradient(
    225deg,
    rgba(255, 121, 180, 1) 10%,
    rgba(41, 197, 255, 1) 100%
  );
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: right 85%;
  text-shadow: none;
  transition: 0.3s linear;

  &:hover {
    color: #00aeef;
    animation: inline-link-hover.6s ease-out 1;
  }
`;

// Underline effect 'a' tag
export const LinkWithEffect = styled.a`
  color: black;
  padding-bottom: 4px;
  background: linear-gradient(
    225deg,
    rgba(255, 121, 180, 1) 10%,
    rgba(41, 197, 255, 1) 100%
  );
  ${"" /* (to right,#00aeef 0%,#00aeef 98%) */}
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: right 85%;
  text-shadow: none;
  transition: 0.3s linear;

  &:hover,
  &:link:active,
  &:visited:active,
  &:visited:hover {
    color: #00aeef;
    animation: inline-link-hover 0.6s ease-out 1;
  }

  &:visited {
    color: black;
    ${"" /* #595959 */}
  }
`;

/* Two version of underline effect 'a'
* 1. anchor within page (use the anchor prop)
* 2. external page (default)
* & one version of normal 'a'
  3. external page (use the a prop)
*/
export const A = (props) => {
  const { href } = props;

  // anchor link
  if (props.anchor === true) {
    if (props.noEffect) {
      return (
        <a {...props} rel="noopener noreferrer" key={href}>
          {props.children}
        </a>
      );
    } else {
      return (
        <LinkWithEffect {...props} rel="noopener noreferrer" key={href}>
          {props.children}
        </LinkWithEffect>
      );
    }
  }
  // external
  if (props.a) {
    return (
      <a {...props} target="_blank" rel="noopener noreferrer" key={href}>
        {props.children}
      </a>
    );
  }
  // default
  if (props.noEffect) {
    return (
      <a {...props} target="_blank" rel="noopener noreferrer" key={href}>
        {props.children}
      </a>
    );
  } else {
    return (
      <LinkWithEffect
        {...props}
        target="_blank"
        rel="noopener noreferrer"
        key={href}
      >
        {props.children}
      </LinkWithEffect>
    );
  }
};

export const H1 = styled.h1`
  display: block;
  font-size: 2.5rem;
  margin: 3rem 0 1rem 0;
  font-weight: 800;
  line-height: 2rem;
`;

export const H2 = styled.h2`
  display: block;
  font-size: 2.2rem;
  margin: 2rem 0 1rem 0;
  font-weight: 700;
`;

export const H3 = styled.h3`
  display: block;
  font-size: 1.9rem;
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
`;

export const H4 = styled.h4`
  display: block;
  font-size: 1.7rem;
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
`;

export const H5 = styled.h5`
  display: block;
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem 0;
  font-weight: 500;
`;

export const H6 = styled.h6`
  display: block;
  font-size: 1.3rem;
  margin: 1.5rem 0 1rem 0;
  font-weight: 500;
`;

export const P = styled.p`
  display: block;
  margin: 1em 0;
  word-wrap: break-word;
  white-space: normal;
  line-height: 2rem;
`;

export const Ol = styled.ol`
  display: block;
  list-style-type: decimal;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 30px;
  line-height: 2.25rem;

  .li {
    list-style-type: square;
  }
`;

export const Li = styled.li`
  display: list-item;
`;

export const Ul = styled.ul`
  display: block;
  list-style-type: disc;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 30px;
  line-height: 2.25rem;

  .li {
    list-style-type: square;
  }
`;

export const Hr = styled.hr`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
  border-width: 1px;
  border-color: #eee;
`;
export const Del = styled.del`
  text-decoration: line-through;
`;
export const Pre = styled.pre`
  display: block;
  font-family: monospace;
  white-space: pre;
  margin: 1em 0;
`;

export const BlockQuote = styled.blockquote`
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;

  &:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }

  & p {
    display: inline;
  }
`;

export const IMG = (props) => (
  <img style={{ margin: "3rem auto 1rem auto" }} {...props} />
);

export const IMGM = (props) => {
  const { src, className, ...props_noRef } = props;
  return (
    <ModalImage
      small={src}
      large={src}
      {...props_noRef}
      hideZoom="true"
      showRotate="true"
      className={`${className} mt-10 mb-3 mx-auto`}
    >
      {props.children}
    </ModalImage>
  );
};

export const EM = styled_twin.em`
  div:has(> img) + & {
    font-size: .9rem;
    color: #464646;
  }
`;

export const Table = styled.table`
  ${tw`my-10 text-base`};
  display: block;
  overflow-x: auto;

  & tr {
    border-top: 1px solid #cccccc;
    background-color: white;
    margin: 0;
    padding: 0;
  }

  & tr:nth-child(2n) {
    background-color: #f8f8f8;
  }

  & tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  & tr td {
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  & tr th :first-child,
  & tr td :first-child {
    margin-top: 0;
  }

  & tr th :last-child,
  & tr td :last-child {
    margin-bottom: 0;
  }
`;

export const TwitterBtn = (props) => {
  return (
    <a {...props}>
      <div className="py-0 px-3 text-sm font-semibold flex items-center bg-brand-blue rounded-md text-white hover:bg-highlight transition duration-500">
        <FaTwitter className="inline-block text-lg mr-1" /> Follow
      </div>
    </a>
  );
};

A.propTypes = {
  children: PropTypes.any,
  anchor: PropTypes.any,
  href: PropTypes.string,
  a: PropTypes.any,
  rel: PropTypes.any,
  noEffect: PropTypes.any
};

IMGM.propTypes = {
  props: PropTypes.any,
  children: PropTypes.any,
  src: PropTypes.any,
  className: PropTypes.any
};
