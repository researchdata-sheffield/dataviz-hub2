import React from "react";
import Summary from "./summary";
import DatasetResult from "./datasetResult";

/**
 * Visualisation component
 * @returns
 */
const Visualisation = () => {
  return (
    <div
      id="visualisation"
      style={{
        maxWidth: "1180px",
        background: "linear-gradient(345deg, #FEE140 0%, #FA709A 100%)",
        padding: "30px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px"
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          fontSize: "2.5rem",
          fontWeight: "900",
          fontFamily: "TUoS Blake",
          color: "#1a1919",
          fontStyle: "italic"
        }}
      >
        Assess FAIRness of datasets in ORDA
      </h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/FAIR_data_principles.jpg/640px-FAIR_data_principles.jpg"
        width="300"
        style={{
          borderRadius: "15px",
          marginBottom: "30px"
        }}
      />
      <Summary />
      <DatasetResult />
    </div>
  );
};

export default Visualisation;
