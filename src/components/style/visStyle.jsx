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