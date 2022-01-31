import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { BreakdownWrapper, StyledReactTooltip } from "./styles";
import { MdManageSearch, MdSettingsSuggest } from "react-icons/md";
import { GiCycle } from "react-icons/gi";
import { HiCursorClick } from "react-icons/hi";
import { getColour } from "../helper";
import { Liquid } from "@ant-design/plots";
import ReactTooltip from "react-tooltip";

const DatasetBreakdown = ({ currentDataset }) => {
  useEffect(() => {
    // re-render tooltip content when dataset changes
    ReactTooltip.rebuild();
  }, [currentDataset]);

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

  const getTooltipContent = (jsonContent) => {
    if (!jsonContent) {
      return "";
    }
    const parsedContent = JSON.parse(jsonContent);

    const warnings = parsedContent.test_debug.filter((log) =>
      log.includes("WARNING")
    );

    return (
      <div className="tooltip-content">
        <div className="info">
          <span>Maturity: {parsedContent.maturity}</span>
          <span
            style={{
              background:
                parsedContent.test_status == "pass" ? "#7dff6b" : "#fc3"
            }}
          >
            Status: {parsedContent.test_status}
          </span>
        </div>
        <h1 className="title">
          {parsedContent.metric_identifier}: {parsedContent.metric_name}
        </h1>
        <h2 className="subtitle">Metric tests:</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col" style={{ width: "50px" }}>
                Maturity
              </th>
              <th scope="col" style={{ width: "50px" }}>
                Score
              </th>
              <th scope="col" style={{ width: "50px" }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(parsedContent.metric_tests).map((test) => (
              <tr key={`${parsedContent.metric_identifier}-tests-${test}`}>
                <td>{parsedContent.metric_tests[test].metric_test_name}</td>
                <td style={{ textAlign: "center" }}>
                  {parsedContent.metric_tests[test].metric_test_maturity}
                </td>
                <td style={{ textAlign: "center" }}>
                  {parsedContent.metric_tests[test].metric_test_score}
                </td>
                <td style={{ textAlign: "center" }}>
                  {parsedContent.metric_tests[test].metric_test_status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {warnings.length !== 0 && (
          <>
            <h2 className="subtitle">
              Warnings that potentially reduced the score:{" "}
            </h2>
            <ul>
              {warnings.map((warning, idx) => (
                <li key={`${parsedContent.metric_identifier}-warning-${idx}`}>
                  {warning.split("WARNING: ")[1]}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
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
                  <>
                    <div
                      key={metric.metric_identifier}
                      className="metric-circle"
                      data-for={`tooltip-metric-${metric.metric_identifier}`}
                      data-tip={JSON.stringify(metric)}
                      data-event="click focus"
                      onMouseOut={() => ReactTooltip.hide()}
                    >
                      <Liquid {...createLiquidConfig(metric)} />
                    </div>

                    <StyledReactTooltip
                      id={`tooltip-metric-${metric.metric_identifier}`}
                      getContent={(dataTip) => getTooltipContent(dataTip)}
                    />
                  </>
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
