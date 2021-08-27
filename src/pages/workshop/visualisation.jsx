import React from "react";
import { Sunburst } from "@ant-design/charts";
import JSONdata from "./data.json";

const sourceInfo = {
  position: "absolute",
  bottom: 0,
  margin: "1rem",
  fontSize: "0.72rem",
  color: "rgb(255, 255, 255)",
  lineHeight: 1,
  whiteSpace: "nowrap"
};

const plotTitle = {
  color: "white",
  lineHeight: 1.1,
  fontSize: "1.6rem",
  fontWeight: 700,
  textAlign: "center"
};

const Visualisation = () => {
  var chartConfig = {
    data: JSONdata,
    innerRadius: 0.3,
    hierarchyConfig: {
      field: "absoluteChange",
      ignoreParentValue: false
    },
    interactions: [{ type: "element-active" }],
    drilldown: {
      enabled: true,
      breadCrumb: {
        rootText: "Begin",
        textStyle: {
          fill: "white"
        }
      }
    },
    state: {
      active: {
        style: {
          stroke: "#fff",
          lineWidth: 2
        }
      }
    }
  };

  return (
    <div
      id="visualisation"
      style={{
        backgroundColor: "#df3b57",
        backgroundImage:
          "linear-gradient(135deg, #1c000a 0%, #2a0010 20%, #460001 50%, #54001f 80%, #70002a 100%)",
        minHeight: "550px",
        height: "100%",
        maxWidth: "580px",
        borderRadius: "20px",
        backgroundSize: "cover",
        padding: "1rem",
        position: "relative"
      }}
    >
      <h1 style={plotTitle}>
        Alcohol pricing policies are estimated to be{" "}
        <span style={{ color: "#FB989F" }}>more effective</span> at reducing
        consumption and harm{" "}
        <span style={{ color: "#FB989F" }}>for men than women</span>
      </h1>
      <div style={{ height: "420px", marginTop: "20px" }}>
        <Sunburst {...chartConfig} />
      </div>
      <h1
        style={{ fontWeight: 800, left: 0, fontSize: ".9rem", ...sourceInfo }}
      >
        Dataviz.Shef
      </h1>
      <h1 style={{ right: 0, ...sourceInfo }}>
        Source: The University of Sheffield - News
      </h1>
    </div>
  );
};

export default Visualisation;
