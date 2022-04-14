import React from "react";
import loadable from "@loadable/component";
const ResponsiveChoroplethCanvas = loadable(() => import("@nivo/geo"), {
  resolveComponent: (components) => components.ResponsiveChoroplethCanvas
});
import Shark from "./images/shark.svg";
import { useFetch, loadingLayer } from "@utils/hooks/useFetch";

const sourceInfo = {
  position: "absolute",
  bottom: 0,
  margin: "1rem",
  fontSize: "0.72rem",
  color: "#fff",
  lineHeight: 1,
  whiteSpace: "nowrap",
  zIndex: "20"
};

const visWrapper = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  zIndex: 0,
  height: "100%",
  borderRadius: "20px",
  overflow: "hidden",
  position: "absolute",
  left: "0",
  top: "0"
};

const plotTitle = {
  color: "white",
  lineHeight: 1.25,
  padding: "1rem",
  fontSize: "3.5rem",
  fontWeight: 800,
  textAlign: "left",
  zIndex: "20",
  position: "relative"
};

// the current presence of all sawfishes is unknown
const unknownArray = [
  "Brunei",
  "Djibouti",
  "Taiwan, China",
  "El Salvador",
  "Timor-Leste",
  "Japan",
  "Haiti",
  "Iraq",
  "China",
  "Egypt",
  "South Korea",
  "Dominican Republic",
  "Kuwait",
  "Solomon Islands",
  "Tanzania"
];

/**
 * Visualisation component
 * @returns
 */
const ExtinctionMap = () => {
  const url =
    "https://raw.githubusercontent.com/researchdata-sheffield/dataviz-hub2-data/main/visualisation/2021-10-20-Marine-Fishes-Near-Extinction";
  const [loading, worldCountries] = useFetch(`${url}/world_countries.json`);
  const [loadingProb, probabilityData] = useFetch(`${url}/prediction.json`);

  if (loading || loadingProb || !worldCountries || !probabilityData) {
    return loadingLayer();
  }

  return (
    <div
      id="visualisation"
      style={{
        backgroundImage: `linear-gradient(215deg, #d0d0d0 20%, #c6c6c6 60%, #000 100%)`,
        minWidth: "800px",
        minHeight: "800px",
        maxWidth: "1100px",
        maxHeight: "1100px",
        borderRadius: "20px",
        backgroundSize: "cover",
        position: "relative",
        aspectRatio: "1"
      }}
    >
      <h1 style={plotTitle}>
        Overfishing and habitat loss drive range contraction of iconic marine
        fishes to{" "}
        <span
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(16, 27, 66) 31%, rgb(189, 0, 38) 100%)"
          }}
        >
          near extinction
        </span>
      </h1>
      <div
        style={{
          width: "100%",
          height: "40vh",
          zIndex: "10",
          position: "absolute",
          top: 0,
          left: 0,
          background: "linear-gradient(0deg, #fff0 20%, #1e1e1e 85%)",
          borderRadius: "20px"
        }}
      ></div>
      <div style={visWrapper}>
        <ResponsiveChoroplethCanvas
          data={probabilityData}
          features={worldCountries.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="YlOrRd"
          domain={[0, 1]}
          unknownColor="#101b42"
          label="properties.name"
          valueFormat=".3f"
          value="median"
          projectionType="mercator"
          projectionScale={210}
          projectionTranslation={[0.405, 0.6]}
          projectionRotation={[5, -10, -15]}
          enableGraticule={true}
          graticuleLineColor="rgba(0, 0, 0, .2)"
          borderColor="#101b42"
          legends={[
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 30,
              translateY: -80,
              itemsSpacing: 0,
              itemWidth: 92,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemOpacity: 0.95,
              symbolSize: 18,
              itemTextColor: "#D9D9D9",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#fff"
                  }
                }
              ]
            }
          ]}
          tooltip={function (e) {
            const { color, data, label, value } = e.feature;

            if (!value) {
              return <></>;
            }

            return (
              <div
                style={{
                  backgroundColor: "white",
                  padding: "1rem",
                  borderRadius: ".5rem",
                  color: "black"
                }}
              >
                <div style={{ alignItems: "center" }}>
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: color,
                      borderRadius: ".25rem",
                      display: "inline-block"
                    }}
                  ></span>
                  <h1
                    style={{
                      display: "inline-block",
                      fontWeight: "800",
                      fontSize: "1.2rem",
                      marginLeft: "5px"
                    }}
                  >
                    {label}
                    {unknownArray.indexOf(label) > -1 && "*"}
                  </h1>
                </div>
                <div style={{ fontSize: ".85rem", marginTop: "5px" }}>
                  <h2 style={{ fontSize: ".85rem", marginBottom: "2px" }}>
                    Predicted probability of extinction:
                  </h2>
                  <p>
                    Median:{" "}
                    <span style={{ fontSize: ".95rem", fontWeight: "600" }}>
                      {data.median}
                    </span>
                  </p>
                  <p>
                    Minimum:{" "}
                    <span style={{ fontSize: ".95rem", fontWeight: "600" }}>
                      {data.min}
                    </span>
                  </p>
                  <p>
                    Maximum:{" "}
                    <span style={{ fontSize: ".95rem", fontWeight: "600" }}>
                      {data.max}
                    </span>
                  </p>
                </div>
                {unknownArray.indexOf(label) > -1 && (
                  <p style={{ marginTop: "10px", fontSize: ".75rem" }}>
                    * The current presence of all sawfishes is unknown.
                  </p>
                )}
              </div>
            );
          }}
        />
      </div>
      <h3
        style={{
          fontSize: ".75rem",
          color: "white",
          position: "absolute",
          left: 0,
          bottom: "2.5%",
          margin: "1.5rem"
        }}
      >
        Predicted probability of extinction
      </h3>
      <img
        src={Shark}
        alt="Shark image"
        style={{
          opacity: "0.15",
          maxWidth: "180px",
          position: "absolute",
          bottom: "13%",
          right: "100px",
          margin: "1.5rem"
        }}
      />
      <h1
        style={{ fontWeight: 800, left: 0, fontSize: ".9rem", ...sourceInfo }}
      >
        Dataviz.Shef
      </h1>
      <h1 style={{ right: 0, ...sourceInfo }}>Source: Science Advances</h1>
    </div>
  );
};

export default ExtinctionMap;
