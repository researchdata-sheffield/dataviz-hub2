import styled from "styled-components"


export const ShareButton = styled.div`
  a {
    margin: 0
  }
`

export const VisItem = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  position: relative;

  ${props => {
    if (props.row == 1 && props.col > 1) {
      return `
        padding-bottom: calc(100% / ${props.col});
      `
    }
    if (props.col == 1 && props.row > 1) {
      return `
        padding-bottom: calc(${props.row} * 100%);
      `
    }
    if (props.col != 1 && props.row != 1) {
      return `
        padding-bottom: calc(${props.row} / ${props.col} * 100%);
      `
    }

    return `
      padding-bottom: 100%;
    `
  }}

  @media screen and (max-width: 768px) {
    padding-bottom: inherit;
  }
`

export const VisDiv = styled.div`
  max-width: 550px;
  margin: auto;
`

export const WordCloud = styled.div`
  text-align: center;
  width: ${props => props.width || '50%'};
  height: ${props => props.height || '55%'};
  border-radius: ${props => props.radius || '10px'};
  overflow-y: hidden;
  overflow-x: clip;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  
  &::before{
    content: '';
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

  div.word-cloud-wrap::before{
    content: '';
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
    white-space: nowrap;
    display: inline-block;
    line-height: 1;
    transition: .3s ease;
    font-family: TUoS Blake;
    vertical-align: middle;
    
    &:hover {
      color: #00aeef !important;
    }
  }
`