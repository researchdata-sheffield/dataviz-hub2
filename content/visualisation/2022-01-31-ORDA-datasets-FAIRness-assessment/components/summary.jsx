import React from "react";
import data from "../data/statistics.json";
import { SummaryWrapper, SummaryBox } from "./styles";
import { getColour } from "../helper";

const Summary = () => {
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
      {Object.keys(data).map((sectionName, i) => {
        let sectionColourLevel = getColour(
          data[sectionName].average,
          data[sectionName].score
        );

        return (
          <SummaryBox key={`${i}-${sectionName}`} className="summaryBox">
            <h1 style={{ color: sectionColourLevel.colour }}>
              {data[sectionName].average.toFixed(2)}
              <span> / {data[sectionName].score}</span>
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
