import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Radar, Gauge } from "@ant-design/plots";
import { mapPrinciple } from "../helper";
import { useFetch } from "@utils/hooks/useFetch";

const DatasetSummary = ({ currentDataset }) => {
  const [loading, statsData] = useFetch(
    "https://raw.githubusercontent.com/researchdata-sheffield/dataviz-hub2-data/main/visualisation/2022-01-31-ORDA-datasets-FAIRness-assessment/statistics.json"
  );
  const [radarData, setRadarData] = useState([]);

  useEffect(() => {
    processStatistics(statsData, currentDataset);
  }, [currentDataset, statsData]);

  /**
   * Prepare average and dataset statistics
   * @param {*} data
   * @returns
   */
  const processStatistics = (avgData, datasetData) => {
    let stats = [];

    if (!avgData) {
      return;
    }

    Object.keys(avgData).forEach((principle) => {
      let scorePercent =
        (avgData[principle]["average"] / avgData[principle]["score"]) * 100;
      stats.push({
        principle: principle.toUpperCase(),
        itemType: "average",
        percentage: parseFloat(scorePercent.toFixed(2))
      });
    });

    ["F", "A", "I", "R", "FAIR"].forEach((code) => {
      stats.push({
        principle: mapPrinciple(code),
        itemType: "current dataset",
        percentage: parseFloat(
          datasetData["summary"]["score_percent"][code].toFixed(2)
        )
      });
    });

    setRadarData(stats);
    return stats;
  };

  const radarConfig = {
    data: radarData || [],
    xField: "principle",
    yField: "percentage",
    seriesField: "itemType",
    width: 450,
    meta: {
      percentage: {
        min: 0,
        max: 100
      }
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null
          }
        }
      }
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: "line",
          style: {
            lineDash: null
          }
        },
        alternateColor: "rgba(0, 0, 0, 0.04)"
      }
    },
    area: {},
    point: {
      size: 2
    }
  };

  /**
   * Create configuration for Gauges
   */
  const createGaugeConfig = (code) => {
    const ticks = [0, 0.1, 0.5, 0.9, 1];
    const color = ["#ff8e50", "#fc3", "#e7ff3f", "#7dff6b"];
    const scorePercent =
      parseFloat(currentDataset.summary.score_percent[code]) / 100;
    const principleName = mapPrinciple(code);

    return {
      percent: scorePercent,
      width: 200,
      height: 200,
      type: "meter",
      innerRadius: 0.75,
      meter: {
        steps: 100,
        stepRatio: 0.9
      },
      range: {
        ticks: ticks,
        color: color
      },
      indicator: {
        pointer: {
          style: {
            stroke: "#D0D0D0"
          }
        },
        pin: {
          style: {
            stroke: "#D0D0D0"
          }
        }
      },
      statistic: {
        title: {
          formatter: ({ percent }) => {
            if (percent < ticks[1]) {
              return "Incomplete";
            }
            if (percent < ticks[2]) {
              return "Initial";
            }
            if (percent < ticks[3]) {
              return "Moderate";
            }
            return "Advanced";
          },
          style: ({ percent }) => {
            let colorToUse = color[3];

            if (percent < ticks[1]) {
              colorToUse = color[0];
            }
            if (percent < ticks[2]) {
              colorToUse = color[1];
            }
            if (percent < ticks[3]) {
              colorToUse = color[2];
            }

            return {
              fontSize: "13px",
              lineHeight: 1,
              background: "rgb(83, 82, 82)",
              borderRadius: "5px",
              padding: "3px 5px",
              marginTop: "10px",
              color: colorToUse,
              textTransform: "uppercase"
            };
          }
        },
        content: {
          offsetY: 36,
          style: {
            fontSize: "12px",
            color: "#191a1c",
            fontWeight: "600"
          },
          formatter: () =>
            `${principleName} (Score earned: ${currentDataset.summary.score_earned[code]}/${currentDataset.summary.score_total[code]})`
        }
      }
    };
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="summary">
      <Radar {...radarConfig} />
      <div className="gauge">
        {["F", "A", "I", "R"].map((principle) => (
          <Gauge
            key={`principle-${principle}`}
            {...createGaugeConfig(principle)}
          />
        ))}
      </div>
    </div>
  );
};

export default DatasetSummary;

DatasetSummary.propTypes = {
  currentDataset: PropTypes.any
};
