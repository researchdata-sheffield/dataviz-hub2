import React from "react";

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

/**
 * Visualisation component
 * @returns
 */
const Visualisation = () => {
  return (
    <div
      id="visualisation"
      style={{
        backgroundImage: `linear-gradient(215deg, #d0d0d0 20%, #c6c6c6 60%, #000 100%)`,
        minWidth: "640px",
        minHeight: "640px",
        maxWidth: "1100px",
        maxHeight: "1100px",
        borderRadius: "20px",
        backgroundSize: "cover",
        position: "relative",
        aspectRatio: "1"
      }}
    >
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
      <div style={visWrapper}></div>
      <h1
        style={{ fontWeight: 800, left: 0, fontSize: ".9rem", ...sourceInfo }}
      >
        Dataviz.Shef
      </h1>
      <h1 style={{ right: 0, ...sourceInfo }}>Source: Science Advances</h1>
    </div>
  );
};

export default Visualisation;
