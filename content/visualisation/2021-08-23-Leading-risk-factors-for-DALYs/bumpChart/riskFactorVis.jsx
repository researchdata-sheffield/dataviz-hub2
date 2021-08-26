import React, { useState } from "react";
import BumpChart from "./bumpChart";

import femaleJsonData from "./female.json";
import maleJsonData from "./male.json";

/**
 * dataviz.shef.ac.uk
 * This visualisation is covered by a CC BY-SA 4.0 license.
 * https://creativecommons.org/licenses/by-sa/4.0/
 */
const RiskFactorVis = () => {
  const [maleData, setMaleData] = useState(maleJsonData["Low"]);
  const [femaleData, setFemaleData] = useState(femaleJsonData["Low"]);

  const sourceInfo = {
    position: "absolute",
    bottom: 0,
    margin: "1rem",
    fontSize: "0.72rem",
    color: "rgb(255, 255, 255)",
    lineHeight: "1"
  };

  const genderSpan = {
    color: "#DBDBDB",
    background: "#424242",
    padding: ".15rem .25rem",
    fontSize: ".8rem",
    borderRadius: ".3rem"
  };

  const theme = {
    textColor: "#C9C9C9",
    tooltip: {
      container: {
        background: "#fff",
        color: "#000",
        boxShadow: "0 3px 9px rgba(0, 0, 0, 0.5)"
      }
    }
  };

  const legendStyle = {
    width: "20px",
    height: "4px",
    display: "inline-block",
    marginRight: "5px"
  };

  function onInputChange(event) {
    const value = event.target.value;
    setMaleData(maleJsonData[value]);
    setFemaleData(femaleJsonData[value]);
  }

  return (
    <div
      id="visualisation"
      style={{
        backgroundColor: "#212121",
        backgroundImage:
          "linear-gradient(135deg, #212121 0%,#212121 40%,#3a3a3a 77%,#434343 100%)",
        minHeight: "600px",
        height: "100%",
        minWidth: "400px",
        maxWidth: "1200px",
        borderRadius: "20px",
        backgroundSize: "cover",
        padding: "1rem",
        position: "relative"
      }}
    >
      <h1
        style={{
          color: "white",
          fontWeight: "700",
          fontSize: "1.8rem",
          lineHeight: "1.1",
          marginBottom: "25px"
        }}
      >
        Leading risk factors for disability-adjusted life years in different SDI
        countries
      </h1>
      {/* Charts */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          color: "white",
          justifyContent: "space-between"
        }}
      >
        <div style={{ width: "49%", height: "400px", textAlign: "right" }}>
          <span style={genderSpan}>Male</span>
          <BumpChart theme={theme} data={maleData} gender="male" />
        </div>
        <div style={{ width: "49%", height: "400px", textAlign: "right" }}>
          <span style={genderSpan}>Female</span>
          <BumpChart theme={theme} data={femaleData} gender="female" />
        </div>
      </div>
      {/* Legend & Selection box */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          color: "#D4D4D4",
          marginTop: "50px",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: "32%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            fontSize: ".7rem"
          }}
        >
          <div>
            <span style={{ backgroundColor: "#A9FF6B", ...legendStyle }}></span>
            <span>Environmental</span>
          </div>
          <div>
            <span style={{ backgroundColor: "#F99494", ...legendStyle }}></span>
            <span>Behavioural</span>
          </div>
          <div>
            <span style={{ backgroundColor: "#70DBFF", ...legendStyle }}></span>
            <span>Metabolic</span>
          </div>
        </div>
        <div
          style={{
            width: "55%",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: ".83rem"
          }}
        >
          <span style={{ marginRight: "10px" }}>Countries with</span>
          <select
            style={{
              color: "black",
              textAlign: "center",
              fontSize: ".9rem",
              fontWeight: "700"
            }}
            type="radio"
            onChange={onInputChange}
            title="Select level of Socio-Demographic Index countries"
          >
            <option value="Low" label="Low"></option>
            <option value="Low-middle" label="Low-middle"></option>
            <option value="Middle" label="Middle"></option>
            <option value="High-middle" label="High-middle"></option>
            <option value="High" label="High"></option>
          </select>
          <span style={{ marginLeft: "10px" }}>Socio-demographic Index</span>
        </div>
      </div>
      <h1
        style={{ fontWeight: 800, left: 0, fontSize: ".9rem", ...sourceInfo }}
      >
        Dataviz.Shef
      </h1>
      <h1 style={{ right: 0, ...sourceInfo }}>
        Source: The Lancet Global Health Metrics
      </h1>
    </div>
  );
};

RiskFactorVis.propTypes = {};

export default RiskFactorVis;
