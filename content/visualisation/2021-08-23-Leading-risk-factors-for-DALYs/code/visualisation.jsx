import React, { useState } from "react"
import { ResponsiveBump } from "@nivo/bump"

import femaleJsonData from "./female.json"
import maleJsonData from "./male.json"

/**
 * dataviz.shef.ac.uk
 * This visualisation is covered by a CC BY-SA 4.0 license.
 * https://creativecommons.org/licenses/by-sa/4.0/
 */
const Visualisation = () => {
  const [maleData, setMaleData] = useState(maleJsonData["Low"])
  const [femaleData, setFemaleData] = useState(femaleJsonData["Low"])

  const sourceInfo = {
    position: "absolute",
    bottom: 0,
    margin: "1rem",
    fontSize: "0.72rem",
    color: "rgb(255, 255, 255)"
  }

  const genderSpan = {
    color: "#DBDBDB",
    background: "#424242",
    padding: ".15rem .25rem",
    fontSize: ".8rem",
    borderRadius: ".3rem"
  }

  const theme = {
    textColor: "#C9C9C9",
    tooltip: {
      container: {
        background: "#fff",
        color: "#000",
        boxShadow: "0 3px 9px rgba(0, 0, 0, 0.5)"
      }
    }
  }

  const legendStyle = {
    width: "20px",
    height: "4px",
    display: "inline-block",
    marginRight: "5px"
  }

  const riskColour = (item) => {
    switch (item.category) {
      case "Environmental":
        return "#A9FF6B"
      case "Metabolic":
        return "#70DBFF"
      case "Behavioural":
        return "#F99494"
    }
  }

  const customTooltip = (item) => {
    const { id, color, data } = item.serie

    return (
      <div
        style={{
          background: "white",
          padding: "1rem",
          borderRadius: ".5rem",
          minWidth: "180px",
          color: "black",
          marginBottom: "10px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px"
          }}
        >
          <span
            style={{
              backgroundColor: color,
              width: "20px",
              height: "20px",
              display: "inline-block",
              marginRight: "10px"
            }}
          ></span>
          <span style={{ fontWeight: "700", fontSize: "1.1rem" }}>{id}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#777" }}>Year</h2>
            <h3>1990</h3>
            <h3>2010</h3>
            <h3>2019</h3>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#777" }}>Ranking</h2>
            {data.map((rank, idx) => (
              <h3 key={`${id}-${idx}`}>{rank.y || "unknown"}</h3>
            ))}
          </div>
        </div>
      </div>
    )
  }

  function onInputChange(event) {
    const value = event.target.value
    setMaleData(maleJsonData[value])
    setFemaleData(femaleJsonData[value])
  }

  return (
    <div
      id="visualisation"
      style={{
        backgroundColor: "#212121",
        backgroundImage:
          "linear-gradient(135deg, #212121 0%,#212121 40%,#3a3a3a 77%,#434343 100%)",
        minHeight: "600px",
        height: "100%",
        minWidth: "400px",
        maxWidth: "1200px",
        borderRadius: "20px",
        backgroundSize: "cover",
        padding: "1rem",
        position: "relative"
      }}
    >
      <h1
        style={{
          color: "white",
          fontWeight: "700",
          fontSize: "1.8rem",
          lineHeight: "1.1",
          marginBottom: "25px"
        }}
      >
        Leading risk factors for disability-adjusted life years in different SDI
        countries
      </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          color: "white",
          justifyContent: "space-between"
        }}
      >
        <div style={{ width: "49%", height: "400px", textAlign: "right" }}>
          <span style={genderSpan}>Male</span>
          <ResponsiveBump
            theme={theme}
            data={maleData}
            margin={{ top: 30, right: 115, bottom: 30, left: 50 }}
            colors={(item) => riskColour(item)}
            tooltip={(item) => customTooltip(item)}
            lineWidth={3}
            activeLineWidth={6}
            inactiveLineWidth={3}
            inactiveOpacity={0.15}
            endLabelPadding={8}
            pointSize={6}
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
        <div style={{ width: "49%", height: "400px", textAlign: "right" }}>
          <span style={genderSpan}>Female</span>
          <ResponsiveBump
            theme={theme}
            data={femaleData}
            margin={{ top: 30, right: 115, bottom: 30, left: 50 }}
            colors={(item) => riskColour(item)}
            tooltip={(item) => customTooltip(item)}
            lineWidth={3}
            activeLineWidth={6}
            inactiveLineWidth={3}
            inactiveOpacity={0.15}
            endLabelPadding={8}
            pointSize={6}
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
              tickRotation: 0
            }}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          color: "#D4D4D4",
          marginTop: "50px",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: "32%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            fontSize: ".7rem"
          }}
        >
          <div>
            <span style={{ backgroundColor: "#A9FF6B", ...legendStyle }}></span>
            <span>Environmental</span>
          </div>
          <div>
            <span style={{ backgroundColor: "#F99494", ...legendStyle }}></span>
            <span>Behavioural</span>
          </div>
          <div>
            <span style={{ backgroundColor: "#70DBFF", ...legendStyle }}></span>
            <span>Metabolic</span>
          </div>
        </div>
        <div
          style={{
            width: "55%",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: ".83rem"
          }}
        >
          <span style={{ marginRight: "10px" }}>Countries with</span>
          <select
            style={{
              color: "black",
              textAlign: "center",
              fontSize: ".9rem",
              fontWeight: "700"
            }}
            type="radio"
            onChange={onInputChange}
            title="Select level of Sustainable Development Index countries"
          >
            <option value="Low" label="Low"></option>
            <option value="Low-middle" label="Low-middle"></option>
            <option value="Middle" label="Middle"></option>
            <option value="High-middle" label="High-middle"></option>
            <option value="High" label="High"></option>
          </select>
          <span style={{ marginLeft: "10px" }}>
            Sustainable Development Index
          </span>
        </div>
      </div>
      <h1
        style={{ fontWeight: 800, left: 0, fontSize: ".9rem", ...sourceInfo }}
      >
        Dataviz.Shef
      </h1>
      <h1 style={{ right: 0, ...sourceInfo }}>
        Source: The Lancet Global Health Metrics
      </h1>
    </div>
  )
}

Visualisation.propTypes = {}

export default Visualisation
