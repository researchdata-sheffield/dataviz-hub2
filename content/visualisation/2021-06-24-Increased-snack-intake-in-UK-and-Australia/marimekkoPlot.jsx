/**
 * dataviz.shef.ac.uk
 * This visualisation is covered by a CC BY-SA 4.0 license.
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
const ResponsiveMarimekko = loadable(() => import("@nivo/marimekko"), {
  resolveComponent: (components) => components.ResponsiveMarimekko
});
import Snack from "./snacks.svg";
import AUFlag from "./australia.svg";
import UKFlag from "./united-kingdom.svg";

export const data = [
  {
    country: "United Kingdom",
    Increased: 53,
    Decreased: 26,
    NoChanges: 20,
    population: 66.65
  },
  {
    country: "Australia",
    Increased: 49,
    Decreased: 25,
    NoChanges: 26,
    population: 25.36
  }
];

/**
 * This component uses tailwindcss (https://tailwindcss.com/) framework for styling of some elements.
 * Visit the website for reference of className.
 * E.g. className="p-5 relative" translates to "padding: 1.25rem; position: relative"
 */
const marimekkoPlot = () => {
  const plotTitle = {
    color: "white",
    lineHeight: 1.25,
    fontSize: "1.5rem",
    fontWeight: 700
  };

  const visWrapper = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 10,
    height: "350px"
  };

  const sourceInfo = {
    position: "absolute",
    bottom: 0,
    margin: "1rem",
    fontSize: "0.72rem",
    color: "rgb(55, 65, 81)",
    lineHeight: 1,
    whiteSpace: "nowrap"
  };

  const theme = {
    textColor: "#000"
  };

  return (
    <div
      id="visualisation"
      style={{
        backgroundColor: "#FAD961",
        backgroundImage:
          "linear-gradient(325deg, #FFC800 0%, #FF7800 50%, #ea3a05 100%)",
        height: "550px",
        width: "550px",
        borderRadius: "20px",
        backgroundSize: "cover",
        padding: "1rem",
        position: "relative",
        margin: "0 auto"
      }}
    >
      <h1 style={plotTitle}>
        People turned to{" "}
        <span
          style={{
            backgroundImage:
              "linear-gradient(90deg, #7B3F00 31%, rgb(255, 37, 0) 100%)",
            backgroundColor: "#ff6e00"
          }}
        >
          sweets, chocolate and salty snacks
        </span>{" "}
        during the Covid-19 lockdowns in the UK and Australia
      </h1>
      <h3 style={{ color: "white", marginTop: "0.5rem", fontSize: "0.85rem" }}>
        “Increased snack intake was associated with higher levels of perceived
        stress ...”
      </h3>

      <div style={visWrapper}>
        <ResponsiveMarimekko
          data={data}
          theme={theme}
          id="country"
          value="population"
          dimensions={[
            {
              id: "Increased intake",
              value: "Increased"
            },
            {
              id: "Decreased intake",
              value: "Decreased"
            },
            {
              id: "No changes",
              value: "NoChanges"
            }
          ]}
          enableGridY={false}
          innerPadding={9}
          axisTop={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 10,
            legend: "Nation population (million)",
            legendOffset: 36,
            legendPosition: "middle"
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Percentage of Respondents (%)",
            legendOffset: -40,
            legendPosition: "middle"
          }}
          margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
          colors={{ scheme: "yellow_green_blue" }}
          borderWidth={0}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          defs={[
            {
              id: "lines",
              type: "patternLines",
              background: "rgba(255, 255, 255, 1)",
              color: "#7fcdbb",
              rotation: -45,
              lineWidth: 4,
              spacing: 8
            }
          ]}
          fill={[
            {
              match: {
                id: "Increased intake"
              },
              id: "lines"
            }
          ]}
          tooltip={function (e) {
            let country = e.bar.datum.data.country;
            let flag = country == "United Kingdom" ? UKFlag : AUFlag;

            return (
              <div
                style={{
                  backgroundColor: "white",
                  padding: ".5rem",
                  borderRadius: ".375rem",
                  color: "black"
                }}
              >
                <img src={flag} style={{ maxWidth: "20px" }} />
                {` ${e.bar.id}: ${e.bar.value}%`}
              </div>
            );
          }}
          motionConfig="wobbly"
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 80,
              itemsSpacing: 0,
              itemWidth: 140,
              itemHeight: 18,
              itemTextColor: "#333",
              itemDirection: "right-to-left",
              itemOpacity: 1,
              symbolSize: 20,
              symbolShape: "square",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000"
                  }
                }
              ]
            }
          ]}
        />
      </div>
      <img
        src={Snack}
        alt="Snack"
        style={{
          opacity: "0.07",
          maxWidth: "150px",
          position: "absolute",
          bottom: 0,
          right: 0,
          margin: "1.5rem"
        }}
      />
      <img
        src={UKFlag}
        alt="UK flag"
        style={{ position: "absolute", top: "30%", left: "39%", width: "20px" }}
      />
      <img
        src={AUFlag}
        alt="Australia flag"
        style={{ position: "absolute", top: "30%", left: "71%", width: "20px" }}
      />
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

export default marimekkoPlot;

marimekkoPlot.propTypes = {
  data: PropTypes.any
};
