import React from "react";
import Summary from "./components/summary";
import DatasetResult from "./components/datasetResult";
import FairLogo from "./FAIR_comparison.png";
import { VisWrap } from "./components/styles";
/**
 * Visualisation component
 * @returns
 */
const FairnessVis = () => {
  return (
    <VisWrap
      id="visualisation"
      style={{
        minWidth: "500px",
        maxWidth: "1180px",
        background: "linear-gradient(345deg, #c6e7ff 0%, #fff0a5 100%)",
        padding: "30px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
        position: "relative"
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "900",
          fontFamily: "Source Serif Pro",
          color: "#1a1919",
          fontStyle: "italic"
        }}
      >
        Assess FAIRness of datasets in ORDA
      </h1>
      <h4
        style={{
          fontSize: ".85rem",
          fontWeight: "500",
          fontStyle: "italic",
          marginBottom: "30px",
          color: "#1a1919"
        }}
      >
        Assessment date: 26/11/21
      </h4>
      <img className="fair-logo" src={FairLogo} />
      <Summary />
      <DatasetResult />
    </VisWrap>
  );
};

export default FairnessVis;
