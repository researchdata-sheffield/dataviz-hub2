import React, { useState } from "react";
import { Sunburst } from "@ant-design/charts";
import { useFetch, loadingLayer } from "@utils/hooks/useFetch";
import styled from "styled-components";
import PoundPriceTag from "./pound-price-tag.svg";
import WineBottle from "./wine-bottle-glass.svg";

const sourceInfo = {
  position: "absolute",
  bottom: 0,
  margin: "1rem",
  fontSize: "0.72rem",
  color: "#BDBDBD",
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

const OptionBtn = styled.button`
  color: #262626;
  font-size: 0.75rem;
  background: ${(props) => (props.value == props.type ? "#fb989F" : "white")};
  padding: 0.1rem 0.3rem;
  margin-top: 5px;
  border-radius: 2px;
  border: 1px solid
    ${(props) => (props.value == props.type ? "#fb989F" : "white")};
`;

const transformValue = (data) => {
  if (data["absoluteChange"]) {
    data["absoluteChangeLog"] =
      Math.log10(Math.abs(data["absoluteChange"])) || 0.1;
  }

  if (data["children"]) {
    data["children"].forEach((child) => {
      return transformValue(child);
    });
  }

  return data;
};

/**
 * Visualisation component
 * @returns
 */
const SunburstChart = () => {
  const [loading, JSONdata] = useFetch(
    "https://raw.githubusercontent.com/researchdata-sheffield/dataviz-hub2-data/main/visualisation/2021-09-06-Modeling-the-Effects-of-Alcohol-Pricing-Policies/data.json"
  );
  const [valueOption, setValueOption] = useState("percentageChange");

  if (loading || !JSONdata) {
    return loadingLayer();
  }

  const tooltipStyle = (data) => {
    return {
      margin: ".5rem .2rem",
      padding: ".2rem .5rem",
      fontSize: ".88rem",
      lineHeight: "1.2",
      borderLeft: `8px solid ${data[0]?.color}`
    };
  };

  const chartConfig = {
    data: transformValue(JSONdata),
    innerRadius: 0.3,
    hierarchyConfig: {
      field: "absoluteChangeLog",
      ignoreParentValue: true
    },
    meta: {
      type: "linear"
    },
    interactions: [{ type: "element-active" }],
    label: {
      layout: [{ type: "limit-in-shape" }],
      style: {
        fontSize: 11
      }
    },
    drilldown: {
      enabled: true,
      breadCrumb: {
        rootText: "Policy",
        textStyle: {
          fill: "#A8A8A8"
        },
        position: "bottom-left"
      }
    },

    state: {
      active: {
        style: {
          stroke: "#fff",
          lineWidth: 2
        }
      }
    },
    tooltip: {
      position: "bottom",
      customContent: (title, data) => {
        if (!data) {
          return;
        }

        if (
          !data[0]?.data?.data["policy"] &&
          !data[0]?.data?.data["category"]
        ) {
          return (
            <div style={{ ...tooltipStyle(data) }}>
              <span>{data[0]?.name || ""}: </span>
              <span style={{ fontWeight: "700", fontSize: ".95rem" }}>
                {valueOption == "absoluteChange" &&
                  (data[0]?.name.includes("Expenditure") ||
                    data[0]?.data?.data["expenditure"]) &&
                  "£"}
                {data[0]?.data?.data[valueOption] || ""}
                {valueOption == "percentageChange" && "%"}
              </span>
            </div>
          );
        }

        if (data[0]?.data?.data["policy"]) {
          return (
            <div style={{ ...tooltipStyle(data) }}>
              Policy: {data[0].name.replace("MUP", "Minimum Unit Price")}
            </div>
          );
        }

        if (data[0]?.data?.data["category"]) {
          return (
            <div style={{ ...tooltipStyle(data) }}>
              Category: {data[0].name}
            </div>
          );
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
        maxHeight: "600px",
        height: "100%",
        minWidth: "550px",
        maxWidth: "580px",
        borderRadius: "20px",
        backgroundSize: "cover",
        padding: "1rem",
        position: "relative",
        margin: "0 auto"
      }}
    >
      <h1 style={plotTitle}>
        Alcohol pricing policies are estimated to be{" "}
        <span style={{ color: "#FB989F" }}>more effective</span> at reducing
        consumption and harm{" "}
        <span style={{ color: "#FB989F" }}>for men than women</span>
      </h1>
      <div
        style={{
          height: "430px",
          marginTop: "20px",
          zIndex: "10",
          position: "relative"
        }}
      >
        <Sunburst {...chartConfig} />
      </div>
      <div
        style={{
          position: "absolute",
          right: 0,
          marginRight: "1rem",
          bottom: "10%",
          display: "flex",
          flexDirection: "column",
          zIndex: 20
        }}
      >
        <OptionBtn
          type="percentageChange"
          value={valueOption}
          onClick={() => setValueOption("percentageChange")}
        >
          % Change
        </OptionBtn>
        <OptionBtn
          type="absoluteChange"
          value={valueOption}
          onClick={() => setValueOption("absoluteChange")}
        >
          Absolute Change
        </OptionBtn>
      </div>
      <img
        src={PoundPriceTag}
        alt="Pound price tag"
        style={{
          opacity: "0.2",
          maxWidth: "40px",
          position: "absolute",
          bottom: "3%",
          left: "15%",
          margin: "1rem"
        }}
      />
      <img
        src={WineBottle}
        alt="Wine bottle glass image"
        style={{
          opacity: "0.2",
          maxWidth: "100px",
          position: "absolute",
          bottom: "8%",
          left: "0",
          margin: "1rem"
        }}
      />
      <h1
        style={{ fontWeight: 800, left: 0, fontSize: ".9rem", ...sourceInfo }}
      >
        Dataviz.Shef
      </h1>
      <h1 style={{ right: 0, ...sourceInfo }}>
        Source: Society for the Study of Addiction
      </h1>
    </div>
  );
};

export default SunburstChart;
