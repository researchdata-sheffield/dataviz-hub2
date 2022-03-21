import React from "react";
import loadable from "@loadable/component";
const ResponsiveBar = loadable(() => import("@nivo/bar"), {
  resolveComponent: (components) => components.ResponsiveBar
});
import Chicken from "./images/chicken.svg";
import Rice from "./images/grain-rice.svg";
import Mushroom from "./images/mushroom.svg";
import Seafood from "./images/seafood.svg";
import Water from "./images/water-droplet.svg";

import GreenLeaf from "./images/advantages/green-leaf.svg";
import House from "./images/advantages/house.svg";
import Rocket from "./images/advantages/rocket.svg";
import Molecule from "./images/advantages/molecule.svg";

const sourceInfo = {
  position: "absolute",
  bottom: 0,
  margin: "1rem",
  fontSize: "0.72rem",
  color: "#fff",
  lineHeight: 1,
  whiteSpace: "nowrap"
};

const imageStyle = {
  margin: "0 10px"
};

const data = [
  {
    riceType: "Brown",
    "Raw Rice": 0.255,
    "Unwashed and Absorbed": 0.23,
    "Washed and Absorbed": 0.205,
    "Pre-soaked and Absorbed": 0.215,
    "Parboiled and Absorbed": 0.12
  },
  {
    riceType: "White",
    "Raw Rice": 0.175,
    "Unwashed and Absorbed": 0.12,
    "Washed and Absorbed": 0.105,
    "Pre-soaked and Absorbed": 0.1,
    "Parboiled and Absorbed": 0.05
  }
];

const visWrapper = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  position: "relative",
  zIndex: 10,
  height: "270px",
  marginTop: "60px"
};

const advantageCard = {
  position: "relative",
  width: "28%",
  borderRadius: ".375rem",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  padding: ".5rem",
  fontSize: ".82rem",
  lineHeight: "1.1",
  textAlign: "center",
  minHeight: "100px",
  margin: "14px 7px 0 7px",
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
};

const theme = {
  textColor: "#DBDBDB",
  fontSize: 10.5,
  axis: {
    ticks: {
      text: {
        fill: "rgba(255, 255, 255, .80)"
      }
    }
  }
};

/**
 * Visualisation component
 * @returns
 */
const ImprovedApproach = () => {
  return (
    <div
      id="visualisation"
      style={{
        backgroundImage: `linear-gradient(195deg, #20201f 20%, #745310 60%, #964B00 100%)`,
        width: "550px",
        height: "1100px",
        borderRadius: "20px",
        backgroundSize: "cover",
        padding: "1rem",
        position: "relative",
        margin: "0 auto"
      }}
    >
      <h1
        style={{
          color: "#fff",
          lineHeight: 1.0,
          fontSize: "2.2rem",
          fontWeight: "700",
          marginBottom: "2rem"
        }}
      >
        Improved rice cooking approach to{" "}
        <span style={{ color: "#EE9381", fontWeight: "800" }}>
          maximise arsenic removal
        </span>{" "}
        while preserving NUTRIENT elements
      </h1>
      <div
        style={{
          padding: "1rem 0",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start"
        }}
      >
        <div
          style={{
            width: "30%",
            padding: ".5rem",
            background: "#742110",
            textAlign: "center",
            borderRadius: ".375rem",
            color: "#DBDBDB",
            fontSize: ".75rem",
            fontWeight: "600",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            alignSelf: "center"
          }}
        >
          <h3>33</h3>
          <h1 style={{ fontWeight: "800", fontSize: "2.3rem" }}>As</h1>
          <h3>Arsenic</h3>
          <h3>74.922</h3>
        </div>
        <div
          style={{
            width: "65%",
            color: "#DBDBDB",
            alignSelf: "center",
            fontSize: ".83rem",
            lineHeight: "1.2"
          }}
        >
          <span style={{ fontSize: "1.5rem" }}>&#128161;</span> Inorganic
          Arsenics are highly toxic and classified as a{" "}
          <span style={{ color: "#EE9381" }}>Group-A carcinogen</span> that can
          cause lung and skin cancer. It can be found in ...
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5px",
              boxShadow:
                "0 5px 10px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)",
              padding: ".5rem",
              borderRadius: ".5rem",
              alignItems: "center"
            }}
          >
            <img
              style={{ ...imageStyle, width: "40px" }}
              src={Chicken}
              alt="Poultry"
            />
            <img
              style={{ ...imageStyle, width: "40px" }}
              src={Seafood}
              alt="Seafood"
            />
            <img
              style={{ ...imageStyle, width: "45px" }}
              src={Rice}
              alt="Rice"
            />
            <img
              style={{ ...imageStyle, width: "30px" }}
              src={Water}
              alt="contaminated water"
            />
            <img
              style={{ ...imageStyle, width: "35px" }}
              src={Mushroom}
              alt="Mushroom"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: ".77rem",
          marginTop: "50px",
          color: "#D1D1D1"
        }}
      >
        <h3 style={{ marginTop: "5px" }}>
          Advantage of the Parboiled and Absorbed (PBA) method
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          padding: "0 1rem",
          marginTop: "5px"
        }}
      >
        <div
          style={{ ...advantageCard, background: "white", color: "#545454" }}
        >
          <h3 style={{ zIndex: 1 }}>Saving water, energy, and cooking time</h3>
          <img
            style={{
              width: "35px",
              position: "absolute",
              right: 0,
              bottom: 0,
              margin: ".5rem"
            }}
            src={GreenLeaf}
            alt="Go Green"
          />
        </div>
        <div
          style={{ ...advantageCard, background: "white", color: "#545454" }}
        >
          <h3>Practical in domestic</h3>
          <img
            style={{ width: "35px", marginTop: "5px" }}
            src={House}
            alt="House icon"
          />
        </div>
        <div
          style={{ ...advantageCard, background: "black", color: "#A3A3A3" }}
        >
          <h3>
            Effective in reducing inorganic Arsenic(s) with a{" "}
            <span
              style={{
                color: "#dabc84",
                fontWeight: "700",
                fontSize: "1.2rem"
              }}
            >
              54%
            </span>{" "}
            and{" "}
            <span
              style={{ color: "#fff", fontWeight: "700", fontSize: "1.5rem" }}
            >
              73%
            </span>{" "}
            reduction
          </h3>
        </div>
        <div
          style={{ ...advantageCard, background: "#1a1a1a", color: "#A6A6A6" }}
        >
          <h3
            style={{
              zIndex: 1,
              background: "rgba(25, 25, 25, .5)",
              textAlign: "right",
              textShadow: "0px 0px 40px #000"
            }}
          >
            Raising margin of exposure by{" "}
            <span
              style={{
                color: "#dabc84",
                fontWeight: "700",
                fontSize: "1.6rem"
              }}
            >
              x2.2
            </span>{" "}
            and{" "}
            <span
              style={{ color: "#fff", fontWeight: "700", fontSize: "2rem" }}
            >
              x3.7
            </span>
          </h3>
          <img
            style={{
              width: "45px",
              position: "absolute",
              left: "0%",
              bottom: 0,
              margin: ".5rem"
            }}
            src={Rocket}
            alt="Rocket icon"
          />
        </div>
        <div
          style={{
            ...advantageCard,
            background: "#723E03",
            color: "#EBEBEB",
            textAlign: "left",
            fontSize: ".78rem"
          }}
        >
          <h3>
            <span
              style={{ fontSize: "1.1rem", fontWeight: "800", color: "white" }}
            >
              ONLY
            </span>{" "}
            method{" "}
            <span>
              suited to all rice varieties in order to obtain a desirable MOE
              for all population groups
            </span>
          </h3>
        </div>
        <div
          style={{
            ...advantageCard,
            background: "#ffd203",
            color: "#000",
            textAlign: "left",
            fontSize: ".75rem",
            alignItems: "end"
          }}
        >
          <img
            style={{
              width: "25px",
              position: "absolute",
              left: "30%",
              top: 0,
              margin: ".5rem"
            }}
            src={Molecule}
            alt="Molecule icon"
          />
          <h3 style={{ zIndex: "1" }}>
            Loss of nutrients was{" "}
            <span style={{ fontWeight: "700" }}>similar or less</span> than in
            comparison to other methods
          </h3>
        </div>
      </div>

      <div style={visWrapper}>
        <h1
          style={{
            color: "white",
            fontSize: "1.2rem",
            lineHeight: "1.1",
            fontWeight: "600",
            textAlign: "center",
            padding: "0 1rem"
          }}
        >
          Concentration of inorganic Arsenic(s) under different cooking
          treatments
        </h1>
        <ResponsiveBar
          data={data}
          theme={theme}
          keys={[
            "Raw Rice",
            "Unwashed and Absorbed",
            "Washed and Absorbed",
            "Pre-soaked and Absorbed",
            "Parboiled and Absorbed"
          ]}
          indexBy="riceType"
          margin={{ top: 10, right: 160, bottom: 50, left: 60 }}
          padding={0.15}
          groupMode="grouped"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          valueFormat={{ format: "", enabled: false }}
          colors={{ scheme: "green_blue" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          borderColor={{ from: "color", modifiers: [["darker", "0.3"]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Rice variant",
            legendPosition: "middle",
            legendOffset: 32
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "iAs (mg/kg)",
            legendPosition: "middle",
            legendOffset: -50
          }}
          enableGridY={false}
          gridYValues={[0, 0.1, 0.2, 0.3]}
          enableLabel={false}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                    itemTextColor: "#fff"
                  }
                }
              ]
            }
          ]}
          tooltip={({ color, id, indexValue }) => {
            return (
              <div
                style={{
                  background: "#2d374d",
                  color: "#fff",
                  boxShadow: "0 3px 9px rgba(0, 0, 0, 0.5)",
                  borderRight: `16px solid ${color}`,
                  padding: ".5rem",
                  borderRadius: ".5rem",
                  fontSize: ".82rem"
                }}
              >
                <h1 style={{ margin: "2px auto", lineHeight: "1.1" }}>
                  Rice: {indexValue}
                </h1>
                <h1 style={{ margin: "2px auto", lineHeight: "1.1" }}>
                  Treatment: {id}
                </h1>
              </div>
            );
          }}
        />
      </div>
      <h1
        style={{ fontWeight: 800, left: 0, fontSize: ".9rem", ...sourceInfo }}
      >
        Dataviz.Shef
      </h1>
      <h1 style={{ right: 0, ...sourceInfo }}>
        Source: Science of The Total Environment
      </h1>
    </div>
  );
};

export default ImprovedApproach;
