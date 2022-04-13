import React from "react";
import loadable from "@loadable/component";
const ResponsiveBump = loadable(() => import("@nivo/bump"), {
  resolveComponent: (components) => components.ResponsiveBump
});

const bumpChart = ({ theme, data, gender }) => {
  const riskColour = (item) => {
    switch (item.category) {
      case "Environmental":
        return "#A9FF6B";
      case "Metabolic":
        return "#70DBFF";
      case "Behavioural":
        return "#F99494";
    }
  };

  const customTooltip = (item) => {
    const { id, color, data } = item.serie;

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
            {data &&
              data.data.map((rank, idx) => (
                <h3 key={`${id}-${idx}`}>{rank.y || "unknown"}</h3>
              ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <ResponsiveBump
      theme={theme}
      data={data}
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
        legend: gender == "male" && "ranking",
        legendPosition: gender == "male" && "middle",
        legendOffset: gender == "male" && -40
      }}
    />
  );
};

export default bumpChart;
