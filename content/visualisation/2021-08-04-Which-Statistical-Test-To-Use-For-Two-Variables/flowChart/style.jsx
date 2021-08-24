import styled from "styled-components"

export const FlowchartDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  display: ${(props) => (props.displayChart == true ? "flex" : "none")};
  flex-wrap: wrap;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
  overflow-y: scroll;
`

export const FlowchartWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 70vh;
  color: black;

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`
