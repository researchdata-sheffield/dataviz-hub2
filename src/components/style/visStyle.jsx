import styled from "styled-components";

export const ShareButton = styled.div`
  a {
    margin: 0;
  }
`;

export const VisGrid = styled.div`
  grid-auto-flow: dense;
  grid-template-rows: min-content;
  max-width: 88rem /* 1408px */;
  width: 100%;
  gap: 0.25rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .__outer {
    border-radius: 0.675rem /* 10.8px */;
    margin: 5px auto;

    @media (min-width: 768px) {
      margin: 0;
    }

    .__loading-image {
      max-width: 100px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
    }
  }

  #visualisation-invite {
    grid-row: span 1;
    grid-column: span 1;
    visibility: hidden;

    .__wrap {
      position: relative;
      border-radius: 0.675rem /* 10.8px */;
      text-align: center;
      display: flex;
      height: 100%;
      min-height: 300px;
      width: 100%;
      background-image: linear-gradient(
        135deg,
        #141e30 0%,
        #152033 6%,
        #20344c 65%,
        #243b55 100%
      );
      background-repeat: no-repeat;

      @media (min-width: 768px) {
        position: absolute;
        top: 0px;
        left: 0px;
      }

      &:hover .text {
        display: block;
      }

      .text {
        position: absolute;
        font-size: 0.875rem /* 14px */;
        line-height: 1.25rem /* 20px */;
        font-weight: 700;
        cursor: pointer;
        border-radius: 0.375rem /* 6px */;
        padding: 0.25rem 0.5rem;
        display: none;
        transform: translate(-50%, 0%);
        left: 50%;
        top: 70%;
      }
    }
  }
`;

export const VisItem = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  position: relative;

  ${(props) => {
    if (props.row == 1 && props.col > 1) {
      return `
        padding-bottom: calc(100% / ${props.col});
      `;
    }
    if (props.col == 1 && props.row > 1) {
      return `
        padding-bottom: calc(${props.row} * 100%);
      `;
    }
    if (props.col != 1 && props.row != 1) {
      return `
        padding-bottom: calc(${props.row} / ${props.col} * 100%);
      `;
    }

    return `
      padding-bottom: 100%;
    `;
  }}

  @media screen and (max-width: 768px) {
    padding-bottom: inherit;
  }

  .__inner {
    border-radius: 0.675rem;

    @media (min-width: 768px) {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: ;100%;
      background-image: linear-gradient(135deg, #141e30 0%,#152033 6%,#20344c 65%,#243b55 100%);
      background-repeat: no-repeat;
    }
  }

  img {
    height: 100%;
    width: 100%;
    objectFit: cover;
    objectPosition: center;
    transition: .2s ease-out;
    border-radius: 0.675rem;
  }
`;

export const VisDiv = styled.div`
  max-width: 550px;
  margin: auto;
`;

export const WordCloud = styled.div`
  text-align: center;
  width: ${(props) => props.width || "50%"};
  height: ${(props) => props.height || "55%"};
  border-radius: ${(props) => props.radius || "10px"};
  overflow-y: hidden;
  overflow-x: clip;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: ${(props) => props.width || "60%"};
    height: ${(props) => props.height || "55%"};
  }

  &::before {
    content: "";
    height: 100%;
    width: 50%;
    float: left;
    shape-outside: polygon(
      0 0,
      100% 0,
      60% 4%,
      40% 10%,
      20% 20%,
      10% 28.2%,
      5% 34.4%,
      0 50%,
      5% 65.6%,
      10% 71.8%,
      20% 80%,
      40% 90%,
      60% 96%,
      100% 100%,
      0% 100%
    );
  }
  div.word-cloud-wrap {
    text-align: center;
    display: contents;
  }

  div.word-cloud-wrap::before {
    content: "";
    height: 100%;
    width: 50%;
    float: right;
    shape-outside: polygon(
      100% 0,
      0 0,
      40% 4%,
      60% 10%,
      80% 20%,
      90% 28.2%,
      95% 34.4%,
      100% 50%,
      95% 65.6%,
      90% 71.8%,
      80% 80%,
      60% 90%,
      40% 96%,
      0 100%,
      100% 100%
    );
  }

  .word {
    white-space: normal;
    border-radius: 5px;
    display: inline-block;
    line-height: 1;
    transition: 0.3s ease;
    font-family: "Source Serif Pro", serif;
    vertical-align: middle;
    padding: ${(props) => (props.backgroundColour === true ? "8px 13px" : "")};

    &:hover {
      color: #fff !important;
      background-color: ${(props) =>
        props.backgroundColour === true ? "#000" : ""} !important;
    }
  }
`;

const visHelperButton = styled.button`
  position: fixed;
  bottom: 20px;
  width: 50px;
  height: 50px;
  text-decoration: none;
  border-radius: 35px;
  z-index: 99;
  text-align: center;
  visibility: invisible;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

export const VisTagMenuBtn = styled(visHelperButton)`
  opacity: 0;
  right: 140px;

  background-image: linear-gradient(
    135deg,
    rgb(255, 121, 180) 15%,
    rgb(255, 134, 250) 36%,
    rgb(41, 197, 255) 85%
  );

  &:hover {
    /*     background: rgba(0, 0, 0, 0.9); */
    background-image: linear-gradient(
      45deg,
      rgb(255, 121, 180) 15%,
      rgb(255, 134, 250) 36%,
      rgb(41, 197, 255) 85%
    );
  }
`;

export const VisFooterBtn = styled(visHelperButton)`
  opacity: 0;
  right: 80px;
`;

export const VisBackBtn = styled(visHelperButton)`
  right: 80px;
  opacity: 1;
`;

export const EmbedCode = styled.div`
  display: hidden;
`;
