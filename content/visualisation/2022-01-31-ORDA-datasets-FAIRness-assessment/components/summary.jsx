import React from "react";
import { SummaryWrapper, SummaryBox } from "./styles";
import { getColour } from "../helper";
import { useFetch } from "@utils/hooks/useFetch";

const Summary = () => {
  const [loading, statsData] = useFetch(
    "https://raw.githubusercontent.com/researchdata-sheffield/dataviz-hub2-data/main/visualisation/2022-01-31-ORDA-datasets-FAIRness-assessment/statistics.json"
  );

  if (loading || !statsData) {
    return;
  }

  return (
    <SummaryWrapper
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: "auto"
      }}
    >
      <h1 className="title">Overview</h1>
      <SummaryBox className="summaryBox">
        <h1>373</h1>
        <h3>Number of datasets</h3>
      </SummaryBox>
      {Object.keys(statsData).map((sectionName, i) => {
        let sectionColourLevel = getColour(
          statsData[sectionName].average,
          statsData[sectionName].score
        );

        return (
          <SummaryBox key={`${i}-${sectionName}`} className="summaryBox">
            <h1 style={{ color: sectionColourLevel.colour }}>
              {statsData[sectionName].average.toFixed(2)}
              <span> / {statsData[sectionName].score}</span>
            </h1>
            <h3>
              Avg. {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}{" "}
              Score
            </h3>
          </SummaryBox>
        );
      })}
    </SummaryWrapper>
  );
};

export default Summary;
