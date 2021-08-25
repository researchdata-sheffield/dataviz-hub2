import React, { useState, useEffect } from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";
import regionJSONData from "./SDI_1990_2019.json";
import quintilesJSONData from "./quintiles.json";

const ResultDiv = styled.div`
  margin: 1.5rem auto;
  display: flex;
  width: 300px;
  text-align: center;
  justify-content: center;

  .childDiv {
    h2 {
      font-size: 1.1rem;
      margin-bottom: 0.7rem;
      font-weight: 600;
    }
    h3 {
      font-size: 0.92rem;
    }
  }
`;

const search = () => {
  const [currentRegion, setRegion] = useState("");
  const [currentData, setData] = useState(null);
  const [levels, setLevels] = useState(null);

  const onChangeRegion = debounce((event) => {
    const region = event.target.value;
    setRegion(region);
  }, 500);

  useEffect(() => {
    if (currentRegion == "") {
      setData(null);
      setLevels(null);
      return;
    }
    const result = regionJSONData.filter(
      (region) => region.Location == currentRegion
    );

    if (result.length > 0) {
      const levels = {
        1990: updateLevel(result[0]["1990"]),
        2010: updateLevel(result[0]["2010"]),
        2019: updateLevel(result[0]["2019"])
      };

      setData(result[0]);
      setLevels(levels);
    }
  }, [currentRegion]);

  const updateLevel = (sdi) => {
    let level = "Unknown";

    quintilesJSONData.forEach((quintile) => {
      if (quintile["lower_bound"] <= sdi && sdi <= quintile["upper_bound"]) {
        level = quintile["sdi_quintile"];
      }
    });

    return level;
  };

  return (
    <div style={{ color: "white", margin: "2rem auto" }}>
      <h2 style={{ fontSize: "1.1rem" }}>
        Curious about certain regions&apos; SDI?
      </h2>
      <div style={{ margin: "1rem auto" }}>
        <input
          list="regions"
          onChange={onChangeRegion}
          style={{
            color: "black",
            fontSize: ".95rem",
            padding: ".2rem .5rem",
            width: "350px",
            borderRadius: ".25rem"
          }}
          placeholder="Double click to select | Type to search"
        />
        <datalist id="regions">
          {regionJSONData.map((region, idx) => (
            <option
              key={`region-${region.Location}-${idx}`}
              value={region.Location}
            />
          ))}
        </datalist>
      </div>
      {currentData && (
        <ResultDiv>
          <div style={{ width: "100px" }} className="childDiv">
            <h2>Year</h2>
            <h3>1990</h3>
            <h3>2010</h3>
            <h3>2019</h3>
          </div>
          <div style={{ width: "100px" }} className="childDiv">
            <h2>SDI</h2>
            <h3>{currentData["1990"]}</h3>
            <h3>{currentData["2010"]}</h3>
            <h3>{currentData["2019"]}</h3>
          </div>
          <div style={{ width: "100px" }} className="childDiv">
            <h2>Level</h2>
            <h3>{levels["1990"]}</h3>
            <h3>{levels["2010"]}</h3>
            <h3>{levels["2019"]}</h3>
          </div>
        </ResultDiv>
      )}
      {currentRegion && !currentData && (
        <h2 style={{ fontSize: ".9rem", margin: "auto" }}>No results.</h2>
      )}
    </div>
  );
};

export default search;
