import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import React from "react";
import PropTypes from "prop-types";

export const VisWrap = styled.div`
  .fair-logo {
    width: 300px;
    margin-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    .fair-logo {
      width: 200px;
      border-radius: 15px;
      position: absolute;
      top: 0;
      right: 0;
      margin: 15px;
    }
  }
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;

  .summaryBox {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .summaryBox:not(:last-child) {
    margin-right: 10px;
  }

  .title {
    width: 100%;
    font-weight: 600;
    font-size: 1.1rem;
    color: #222;
    margin-bottom: 0px;
  }
`;

export const SummaryBox = styled.div`
  min-width: 150px;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  background: #0f131c;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  ${"" /* box-shadow: 2px 2px 5px 2px #000; */}
  flex-grow: 1;
  flex-basis: 0;

  h1 {
    font-weight: 900;
    font-size: 2.5rem;
    color: white;

    span {
      font-weight: 700;
      font-size: 1rem;
      color: #cecece;
    }
  }
  h3 {
    font-size: 0.85rem;
    color: #cecece;
  }
`;

export const ResultWrapper = styled.div`
  margin: auto;

  .title {
    width: 100%;
    font-weight: 600;
    font-size: 1.1rem;
    color: #222;
    margin-bottom: 15px;
  }

  .searchBar {
    position: relative;
    margin: 0;
    width: max-content;
    background: white;
    color: #1a1919;
    padding: 0.5rem;
    border-radius: 5px 5px 0 0;

    &:focus-within {
      .search-results {
        opacity: 1;
        z-index: 999;
      }
    }

    :hover {
      .search-results {
        opacity: 1;
        z-index: 999;
      }
    }
  }
`;

export const CustomInput = styled.input`
  color: black;
  font-size: 0.95rem;
  padding: 0.2rem 0.5rem;
  width: 100%;
  border-radius: 0.25rem;
  margin-right: 10px;

  @media (min-width: 640px) {
    width: 600px;
  }
`;

export const SearchResults = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  height: 0;
  position: absolute;
  z-index: 0;
  min-height: 200px;
  max-height: 350px;
  width: 100%;
  overflow-y: scroll;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  background: white;

  .result-item {
    padding: 5px 10px;
    transition: 0.5s ease;
    cursor: pointer;
    line-height: 1.2;
    font-weight: 300;
    font-size: 0.95rem;
    width: 100%;
    text-align: left;
    color: #1a1919;

    :hover {
      background: #111827;
      color: white;
    }
  }

  .result-item:not(:last-child) {
    border-bottom: 1px solid #e8e8e8;
  }
`;

export const ResultDiv = styled.div`
  margin-top: 100px;
  padding: 15px;
  background: transparent;
  border-radius: 15px;
  box-shadow: none;
  transition: 0.5s ease;

  &:hover {
    margin-top: 50px;
    background: white;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }

  .date {
    font-size: 0.85rem;
    font-weight: 300;
    padding: 3px 5px;
    color: #1a1919;
    background: #eaeaea;
    border-radius: 5px;
  }
  .title {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 5px;
    margin-bottom: 0;
  }
  .doi {
    color: grey;
    font-size: 0.9rem;
    font-style: italic;
  }

  ${"" /* Styles for dataset summary */}
  .summary {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    margin-top: 30px;

    .gauge {
      flex: 1;
      padding-left: 15px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));

      @media only screen and (max-width: 850px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }

      & > div {
        max-width: 220px;
        margin: auto;
      }
    }
  }
`;

export const BreakdownWrapper = styled.div`
  margin-top: 50px;

  .title {
    font-size: 1rem;
    font-weight: 600;
  }

  .breakdown-row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;

    .logo {
      position: relative;
      padding: 15px;
      width: 150px;
      height: 150px;

      h1 {
        font-size: 1.4rem;
        font-weight: 600;
        text-transform: lowercase;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        color: #44403a;
        font-style: italic;

        span {
          font-size: 1.8rem;
          text-transform: uppercase;
          color: #000;
          font-weight: 900;
        }
      }

      .logo__icon {
        color: #c6c6c6;
        font-size: 4rem;
        position: absolute;
        right: 30%;
        bottom: 40%;
        transform: translate(50%, 50%);
      }
    }

    .sub-metrics {
      flex: 1;
      padding: 0 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;

      .metric-circle {
        color: #1a1919;

        canvas {
          cursor: pointer !important;
        }

        &:not(:last-child) {
          margin-right: 20px;
        }

        h3 {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export const StyledTooltip = styled(ReactTooltip)`
  max-width: 550px;
  max-height: 100vh;
  padding: 15px !important;
  border-radius: 15px !important;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .tooltip-content {
    .info {
      span {
        padding: 2px 5px;
        border-radius: 5px;
        color: black;
        background: white;
        font-size: 0.8rem;
      }
      span:not(:last-child) {
        margin-right: 5px;
      }
    }

    .title {
      color: white;
      font-weight: 700;
    }

    .subtitle {
      text-decoration: underline;
      margin-top: 10px;
    }

    ul li {
      list-style: inside;
    }
  }
`;

export const StyledReactTooltip = (props) => {
  return (
    <StyledTooltip
      type="dark"
      place="top"
      effect="float"
      globalEventOff="click"
      {...props}
    />
  );
};

StyledReactTooltip.propTypes = {
  props: PropTypes.any
};
