import React from "react";
import PropTypes from "prop-types";
import { BreakdownWrapper } from "./styles";
import { MdManageSearch, MdSettingsSuggest } from "react-icons/md";
import { GiCycle } from "react-icons/gi";
import { HiCursorClick } from "react-icons/hi";
import { getColour } from "./helper";
import { Liquid } from "@ant-design/plots";

const DatasetBreakdown = ({ currentDataset }) => {
  /**
   * Filter relevant metric tests for particular principle (F,A,I,R) using the metric identifier
   * @param {*} code
   * @returns
   */
  const filterSubMetrics = (code) => {
    return currentDataset.results.filter((res) =>
      res.metric_identifier.split("-")[1].includes(code)
    );
  };

  const createLiquidConfig = (metric) => {
    let percentToUse =
      parseFloat(metric.score.earned) / parseFloat(metric.score.total);
    let colourToUse = getColour(metric.score.earned, metric.score.total).colour;

    return {
      percent: percentToUse,
      shape: "diamond",
      height: 150,
      width: 150,
      outline: {
        border: 2,
        distance: 4,
        style: {
          stroke: colourToUse,
          strokeOpacity: 0.65
        }
      },
      wave: {
        length: 77
      },
      theme: {
        styleSheet: {
          brandColor: colourToUse
        }
      },
      statistic: {
        title: {
          formatter: () => {
            return metric.metric_identifier.split("-").slice(1).join("-");
          },
          style: () => {
            return {
              fontSize: "15px",
              lineHeight: 1,
              borderRadius: "5px",
              padding: "3px 5px",
              marginTop: "10px"
            };
          }
        },
        content: {
          offsetY: 10,
          style: {
            fontSize: "12px",
            color: "#4B535E"
          },
          formatter: () => `${metric.score.earned}/${metric.score.total}`
        }
      },
      pattern: {
        type: percentToUse < 0.9 ? "" : "line"
      }
    };
  };

  const principleData = [
    {
      capitalLetter: "F",
      letters: "indable",
      iconName: "MdManageSearch"
    },
    {
      capitalLetter: "A",
      letters: "ccessible",
      iconName: "HiCursorClick"
    },
    {
      capitalLetter: "I",
      letters: "nteroperable",
      iconName: "MdSettingsSuggest"
    },
    {
      capitalLetter: "R",
      letters: "eusable",
      iconName: "GiCycle"
    }
  ];

  const createIcon = (code) => {
    switch (code) {
      case "F":
        return <MdManageSearch className="logo__icon" />;
      case "A":
        return <HiCursorClick className="logo__icon" />;
      case "I":
        return <MdSettingsSuggest className="logo__icon" />;
      case "R":
        return <GiCycle className="logo__icon" />;
    }
  };

  return (
    <BreakdownWrapper>
      <h1 className="title">Breakdown</h1>
      {principleData.map((data) => {
        return (
          <div
            className="breakdown-row"
            key={`${data.capitalLetter}${data.letters}-principle`}
          >
            <div className="logo">
              <h1>
                <span>{data.capitalLetter}</span>
                {data.letters}
              </h1>
              {createIcon(data.capitalLetter)}
            </div>
            <div className="sub-metrics">
              {filterSubMetrics(data.capitalLetter).map((metric) => {
                return (
                  <Liquid
                    key={metric.metric_identifier}
                    className="metric-circle"
                    {...createLiquidConfig(metric)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </BreakdownWrapper>
  );
};

export default DatasetBreakdown;

DatasetBreakdown.propTypes = {
  currentDataset: PropTypes.any
};
