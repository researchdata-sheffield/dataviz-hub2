import React from "react"
//import PropTypes from 'prop-types'
import { ResponsiveBump } from "@nivo/bump"

import femaleData from "./female.json"

const Visualisation = () => {
  const sourceInfo = {
    position: "absolute",
    bottom: 0,
    margin: "1rem",
    fontSize: "0.72rem",
    color: "rgb(255, 255, 255)"
  }

  const theme = {
    textColor: "#C9C9C9"
  }

  return (
    <div
      id="visualisation"
      style={{
        backgroundColor: "#212121",
        backgroundImage:
          "linear-gradient(135deg, #212121 0%,#212121 40%,#3a3a3a 77%,#434343 100%)",
        minHeight: "550px",
        height: "100%",
        minWidth: "1100px",
        maxWidth: "1200px",
        borderRadius: "0px",
        backgroundSize: "cover",
        padding: "1rem",
        position: "relative"
      }}
    >
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%", height: "450px" }}>
          <ResponsiveBump
            theme={theme}
            data={femaleData["Middle"]}
            margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
            colors={{ scheme: "yellow_green_blue" }}
            lineWidth={3}
            activeLineWidth={6}
            inactiveLineWidth={3}
            inactiveOpacity={0.15}
            pointSize={10}
            activePointSize={16}
            inactivePointSize={0}
            pointColor={{ theme: "background" }}
            pointBorderWidth={3}
            activePointBorderWidth={3}
            pointBorderColor={{ from: "serie.color" }}
            enableGridX={true}
            enableGridY={false}
            axisTop={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendPosition: "middle",
              legendOffset: -36
            }}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendPosition: "middle",
              legendOffset: 32
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "ranking",
              legendPosition: "middle",
              legendOffset: -40
            }}
          />
        </div>
        <div style={{ width: "50%", height: "450px" }}></div>
      </div>
      <h1
        style={{ fontWeight: 800, left: 0, fontSize: ".9rem", ...sourceInfo }}
      >
        Dataviz.Shef
      </h1>
      <h1 style={{ right: 0, ...sourceInfo }}>
        Source: The University of Sheffield - News
      </h1>
    </div>
  )
}

Visualisation.propTypes = {}

export default Visualisation
