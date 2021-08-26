import styled from "styled-components";

export const FlowchartDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  display: ${(props) => (props.displayChart === true ? "flex" : "none")};
  flex-wrap: wrap;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
  overflow-y: scroll;
`;

export const FlowchartWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 70vh;
  color: black;

  @media (min-width: 768px) {
    min-height: 100vh;
    width: 66.666667%;
  }
  @media (min-width: 1441px) {
    width: 75%;
  }
}
`;

export const UtilityBtn = styled.button`
  z-index: 10;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 4rem;
  color: white;
  display: flex;
  cursor: pointer;
  font-size: 1.875rem;
  line-height: 2.25rem;
  align-self: center;
  align-items: center;

  span {
    text-shadow: 0px 1px 5px #000;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-left: 0.75rem;
  }

  FaToggleOn {
    filter: drop-shadow(0px 1px 7px rgb(0, 0, 0));
  }

  FaToggleOff {
    color: #969696;
  }
`;

export const DescriptionBox = styled.div`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, 0%);
  left: 50%;
  bottom: 20px;
  width: 350px;
  box-shadow: 0 10px 50px -5px #00aeef;
  transition: visibility 0.2s, opacity 0.3s linear;
  background: white;
  padding: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  z-index: 50;

  h1 {
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export const HelpDiv = styled.div`
  width: 650px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10;
  padding: 1.25rem;
  position: fixed;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 0.675rem;
`;

export const HelpText = styled.div`
  h1 {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 0.75rem;
    color: rgb(55, 65, 81);
    line-height: 1.25rem;
    font-size: 0.875rem;
  }
`;

export const Sidebar = styled.div`
  width: 100%;
  background-color: white;
  padding: 0.75rem;
  overflow-y: auto;
  height: 100vh;

  @media (min-width: 768px) {
    width: 33.333333%;
  }
  @media (min-width: 1441px) {
    width: 25%;
  }
`;

export const SidebarUtility = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;

  button {
    margin: 0.5rem;
    border-radius: 0.375rem;
    padding: 0.25rem 0.5rem;
    color: white;
    font-weight: 600;
    background-color: rgb(219, 39, 119);

    &:hover {
      background-color: rgb(236, 72, 153);
    }
  }
`;

export const PathTrackingDiv = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  .nodeLabel {
    padding-right: 0.75rem;
    width: 75%;

    div {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
      color: white;
      border-radius: 0.375rem;
      cursor: pointer;
      border: solid 2px #00aeef;
      background: rgba(0, 0, 0, 0.94);
    }
  }

  .edgeLabel {
    width: 25%;
    padding: 0.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    background-color: rgb(219, 234, 254);
    color: rgb(29, 78, 216);
    border: 1px solid rgb(191, 219, 254);
    border-radius: 0.375rem;
  }
`;

export const ColourBox = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: ${(props) =>
    props.type == "help" ? "rgb(254, 202, 202)" : "rgb(167, 243, 208)"};
  background-color: ${(props) =>
    props.type == "help" ? "rgb(254, 226, 226)" : "rgb(209, 250, 229)"};
  color: ${(props) =>
    props.type == "help" ? "rgb(185, 28, 28)" : "rgb(4, 120, 87)"};

  h1 {
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
