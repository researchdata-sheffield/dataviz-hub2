import React, { useState, useEffect } from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";
import { useFetch, loadingLayer } from "@utils/hooks/useFetch";

const ResultDiv = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-around;

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

const CustomInput = styled.input`
  color: black;
  font-size: 0.95rem;
  padding: 0.2rem 0.5rem;
  width: 100%;
  border-radius: 0.25rem;

  @media (min-width: 640px) {
    width: 350px;
  }
`;

const Search = () => {
  const url =
    "https://raw.githubusercontent.com/researchdata-sheffield/dataviz-hub2-data/main/visualisation/2021-08-23-Leading-risk-factors-for-DALYs/search";
  const [loadingRegion, regionJSONData] = useFetch(`${url}/SDI_1990_2019.json`);
  const [loadingQuintile, quintilesJSONData] = useFetch(
    `${url}/quintiles.json`
  );
  const [currentRegion, setRegion] = useState(null);
  const [currentData, setData] = useState(null);
  const [levels, setLevels] = useState(null);

  /**
   * If input region changed, update region's data and SDI levels
   */
  useEffect(() => {
    if (!currentRegion || !regionJSONData || !quintilesJSONData) {
      return;
    }
    const result = regionJSONData.filter(
      (region) => region.Location == currentRegion
    );

    if (result.length > 0) {
      const newLevels = {
        1990: updateLevel(result[0]["1990"]),
        2010: updateLevel(result[0]["2010"]),
        2019: updateLevel(result[0]["2019"])
      };

      setData(result[0]);
      setLevels(newLevels);
    }
  }, [currentRegion]);

  const onChangeRegion = debounce((event) => {
    const region = event.target.value;

    if (regionJSONData) {
      setRegion(region);
    }
  }, 500);

  /**
   * Get the level of current SDI value based on quintiles
   * @param {number} sdi sdi value
   * @returns {string} level (Low / Low-middle / Middle / High-middle / High)
   */
  const updateLevel = (sdi) => {
    let level = "Unknown";

    quintilesJSONData.forEach((quintile) => {
      if (quintile["lower_bound"] <= sdi && sdi <= quintile["upper_bound"]) {
        level = quintile["sdi_quintile"];
      }
    });

    return level;
  };

  if (
    loadingRegion ||
    loadingQuintile ||
    !regionJSONData ||
    !quintilesJSONData
  ) {
    return loadingLayer();
  }

  return (
    <div
      style={{
        color: "white",
        margin: "3rem auto",
        background: "#1a2131",
        padding: "1rem 2rem",
        borderRadius: ".5rem",
        display: "block",
        width: "max-content",
        boxShadow: currentRegion ? "0 25px 50px -12px rgb(0 0 0 / 47%)" : "none"
      }}
    >
      <h2 style={{ fontSize: "1.1rem", color: "#b5b5b5", fontWeight: "700" }}>
        Curious about certain region&apos;s SDI?
      </h2>
      <div style={{ margin: "1rem auto" }}>
        <CustomInput
          list="regions"
          onChange={onChangeRegion}
          placeholder="Double click to select | Type to search"
        />
        <datalist id="regions">
          {regionJSONData &&
            regionJSONData.map((region, idx) => (
              <option
                key={`region-${region.Location}-${idx}`}
                value={region.Location}
              />
            ))}
        </datalist>
      </div>
      {currentData && (
        <>
          <ResultDiv>
            <div className="childDiv">
              <h2>Year</h2>
              <h3>1990</h3>
              <h3>2010</h3>
              <h3>2019</h3>
            </div>
            <div className="childDiv">
              <h2>SDI</h2>
              <h3>{currentData["1990"]}</h3>
              <h3>{currentData["2010"]}</h3>
              <h3>{currentData["2019"]}</h3>
            </div>
            <div className="childDiv">
              <h2>Level</h2>
              <h3>{levels["1990"]}</h3>
              <h3>{levels["2010"]}</h3>
              <h3>{levels["2019"]}</h3>
            </div>
          </ResultDiv>
          <h3
            style={{
              fontSize: ".85rem",
              color: "#ADADAD",
              margin: "auto",
              lineHeight: "1.2",
              maxWidth: "350px"
            }}
          >
            Note: the latest Quintiles might not accurately reflect the level at
            older years.
          </h3>
        </>
      )}
      {currentRegion && !currentData && (
        <h2 style={{ fontSize: ".9rem", margin: "auto" }}>No results.</h2>
      )}
    </div>
  );
};

export default Search;
