/**
 * dataviz.shef.ac.uk
 * This visualisation is covered by a CC BY-SA 4.0 license.
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
const ResponsiveRadar = loadable(() => import("@nivo/radar"), {
  resolveComponent: (components) => components.ResponsiveRadar
});
import Dish from "./food-dish.svg";

export const data = [
  {
    key: "Hunger",
    Sheffield: 2.51,
    Hull: 12.79,
    Cardiff: 3.98,
    Cambridge: 1.07,
    "Glasgow City": 5.3
    //"Westminster": 3.32
  },
  {
    key: "Struggle",
    Sheffield: 8.1,
    Hull: 20.73,
    Cardiff: 10.67,
    Cambridge: 4.35,
    "Glasgow City": 15.17
    //"Westminster": 12.22
  },
  {
    key: "Worried",
    Sheffield: 11.43,
    Hull: 13.99,
    Cardiff: 10.77,
    Cambridge: 11.02,
    "Glasgow City": 8.4
    //"Westminster": 12.96
  }
];

/**
 * This component uses tailwindcss (https://tailwindcss.com/) framework for styling of some elements.
 * Visit the website for reference of className.
 * E.g. className="p-5 relative" translates to "padding: 1.25rem; position: relative"
 */
const radarPlot = () => {
  const plotTitle = {
    color: "white",
    lineHeight: 1.25,
    fontSize: "1.6rem",
    fontWeight: 900,
    textAlign: "center"
  };

  const visWrapper = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 10,
    height: "480px"
  };

  const sourceInfo = {
    position: "absolute",
    bottom: 0,
    margin: "1rem",
    fontSize: "0.72rem",
    color: "rgb(255, 255, 255)",
    lineHeight: 1,
    whiteSpace: "nowrap"
  };

  const percentageInfo = {
    position: "absolute",
    left: "48%",
    color: "#fff",
    fontSize: ".82rem",
    textShadow: "0px 1px 3px #000"
  };

  const theme = {
    dots: {
      text: {
        fill: "#fff",
        fontSize: 11,
        fontWeight: 600,
        textShadow: "0px 0px 2px #000"
      }
    },
    tooltip: {
      container: {
        background: "#2d374d",
        color: "#fff",
        boxShadow: "0 3px 9px rgba(0, 0, 0, 0.5)"
      }
    },
    grid: {
      line: {
        stroke: "rgba(255, 255, 255, .75)",
        strokeDasharray: "6 4"
      }
    },
    axis: {
      ticks: {
        text: {
          fill: "rgba(255, 255, 255, .70)"
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
          "linear-gradient(135deg, #790115 0%, #991120 30%, #CA1000 60%, #E6AC00 100%)",
        minHeight: "550px",
        width: "550px",
        borderRadius: "20px",
        backgroundSize: "cover",
        padding: "1rem",
        position: "relative",
        margin: "0 auto"
      }}
    >
      <h1 style={plotTitle}>
        MILLIONS of UK residents struggle to afford or access food in 2021
      </h1>

      <div style={visWrapper}>
        <ResponsiveRadar
          data={data}
          theme={theme}
          keys={["Sheffield", "Hull", "Cardiff", "Cambridge", "Glasgow City"]}
          indexBy="key"
          maxValue="auto"
          margin={{ top: 60, right: 70, bottom: 40, left: 70 }}
          curve="linearClosed"
          borderWidth={0}
          borderColor={{ from: "color", modifiers: [] }}
          gridLevels={3}
          gridShape="circular"
          gridLabelOffset={26}
          enableDots={true}
          dotSize={10}
          dotColor={{ theme: "background" }}
          dotBorderWidth={1}
          dotBorderColor={{ theme: "background" }}
          enableDotLabel={true}
          dotLabel={(e) => {
            if (e.index == "Worried") return;
            return e.key;
          }}
          dotLabelYOffset={-10}
          colors={{ scheme: "yellow_green_blue" }}
          fillOpacity={0.7}
          blendMode="multiply"
          animate={true}
          motionConfig="slow"
          isInteractive={true}
          legends={[
            {
              anchor: "top-left",
              direction: "column",
              translateX: -50,
              translateY: -35,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: "#fff",
              symbolSize: 12,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#ededed"
                  }
                }
              ]
            }
          ]}
        />
      </div>
      <img
        src={Dish}
        alt="Food dish"
        style={{
          opacity: "0.15",
          maxWidth: "180px",
          position: "absolute",
          top: "13%",
          right: 0,
          margin: "1.5rem"
        }}
      />
      <h3
        style={{
          right: "5%",
          top: "25%",
          position: "absolute",
          textAlign: "right",
          fontSize: ".75rem",
          color: "rgba(255,255,255,.75)",
          width: "220px",
          lineHeight: "1.6"
        }}
      >
        % adults experiencing hunger, <br />
        struggled to have food, <br />
        worried about having
        <br />
        enough food in
        <br />
        five UK cities.
      </h3>
      <h3 style={{ bottom: "10%", ...percentageInfo }}>21%</h3>
      <h3 style={{ bottom: "20%", ...percentageInfo }}>14%</h3>
      <h3 style={{ bottom: "30%", ...percentageInfo }}>&nbsp;7%</h3>
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

export default radarPlot;

radarPlot.propTypes = {
  data: PropTypes.any
};
