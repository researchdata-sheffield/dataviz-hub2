import React from "react";
//import styled from "styled-components";
import Chicken from "./images/chicken.svg";
import Rice from "./images/grain-rice.svg";
import Mushroom from "./images/mushroom.svg";
import Seafood from "./images/seafood.svg";
import Water from "./images/water-droplet.svg";

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
        style={{
          color: "#fff",
          lineHeight: 1.1,
          fontSize: "2.3rem",
          fontWeight: "700",
          marginBottom: "2rem",
          paddingBottom: ".5rem"
        }}
      >
        Improved rice cooking approach to{" "}
        <span style={{ color: "#EE9381" }}>maximise arsenic removal</span> while
        preserving NUTRIENT elements
      </h1>
      <div
        style={{
          padding: "1rem 0",
          width: "100%",
          display: "flex",
          justifyContent: "space-between"
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
            fontSize: ".79rem",
            fontWeight: "600",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
        >
          <h3>33</h3>
          <h1 style={{ fontWeight: "800", fontSize: "2.1rem" }}>As</h1>
          <h3>Arsenic</h3>
          <h3>74.922</h3>
        </div>
        <div
          style={{
            width: "65%",
            color: "#DBDBDB",
            alignSelf: "center",
            fontSize: ".87rem"
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>&#128161;</span> Arsenic is
          classified as a Group-A carcinogen that can cause lung and skin
          cancer.
        </div>
      </div>
      <h1
        style={{
          color: "#DBDBDB",
          textAlign: "center",
          margin: "1rem 0 .5rem 0",
          fontSize: ".87rem"
        }}
      >
        It can be found in ...
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img style={{ ...imageStyle, width: "35px" }} src={Chicken} />
        <img style={{ ...imageStyle, width: "50px" }} src={Seafood} />
        <img style={{ ...imageStyle, width: "75px" }} src={Rice} />
        <img style={{ ...imageStyle, width: "50px" }} src={Water} />
        <img style={{ ...imageStyle, width: "35px" }} src={Mushroom} />
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

export default Visualisation;
