import styled from "styled-components"

export const ArrowBox = styled.div`
  position: relative;
  background-color: #fff;
  border-top: 0px solid white;
  transition: .3s ease;
  
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
    border-width: 28px;   
    margin-left: -28px;
  }

  &:after {
    border-color: transparent;
    ${'' /* triangle inside color */}
    border-bottom-color: #fff;
    ${'' /* 4px less than :before */}
    border-width: 24px;
    margin-left: -24px;
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
    -webkit-box-shadow: inset 0 -3px 0 #00aeef;
    -moz-box-shadow: inset 0 -3px 0 #00aeef;
    box-shadow: inset 0 -3px 0 #00aeef;
  }
`