import React from "react";

const sourceInfo = {
  position: "absolute",
  bottom: 0,
  margin: "1rem",
  fontSize: "0.72rem",
  color: "#fff",
  lineHeight: 1,
  whiteSpace: "nowrap"
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
        backgroundImage: `linear-gradient(195deg, #20201f 20%, #745310 60%, #964B00 100%)`,
        minWidth: "500px",
        minHeight: "1000px",
        maxWidth: "550px",
        maxHeight: "1100px",
        borderRadius: "20px",
        backgroundSize: "cover",
        padding: "1rem",
        position: "relative"
      }}
    >
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

export default Visualisation;
