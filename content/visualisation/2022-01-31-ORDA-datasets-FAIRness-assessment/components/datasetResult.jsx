import React, { useState, useCallback, useEffect } from "react";
import { ResultWrapper, CustomInput, SearchResults, ResultDiv } from "./styles";
import debounce from "lodash.debounce";
import DatasetSummary from "./datasetSummary";
import DatasetBreakdown from "./datasetBreakdown";
import { useFetch, loadingLayer } from "@utils/hooks/useFetch";

const DatasetResult = () => {
  const [loading, assessmentData] = useFetch(
    "https://raw.githubusercontent.com/researchdata-sheffield/dataviz-hub2-data/main/visualisation/2022-01-31-ORDA-datasets-FAIRness-assessment/assessment_results.json"
  );
  const [currentDataset, setDataset] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  let timer;

  // Debounce search input
  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      debounceInput(searchValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };

  /**
   * Search through the assessment results
   */
  const debounceInput = useCallback(
    debounce((userInput) => {
      if (!searchValue) {
        setSearchResults([]);
      }

      let userInputLowerCase = userInput.toLowerCase();

      const filteredResults = assessmentData
        ? assessmentData.filter((result) => {
            return (
              result.figshare_details.title
                .toLowerCase()
                .includes(userInputLowerCase) ||
              result.request.object_identifier
                .toLowerCase()
                .includes(userInputLowerCase) ||
              result.figshare_details.published_date
                .toLowerCase()
                .includes(userInputLowerCase)
            );
          })
        : [];

      setSearchResults(filteredResults);
    }, 500),
    [assessmentData]
  );

  /**
   * Update the current dataset with user's choice
   * @param {*} figshare_id
   * @returns
   */
  const updateCurrentDataset = (figshare_id) => {
    const filteredResult = searchResults.filter(
      (result) => result.figshare_details.id == figshare_id
    );

    setDataset(filteredResult[0]);
  };

  const formatPublishedDate = (dateString) => {
    let newDate = new Date(dateString);
    return newDate.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit"
    });
  };

  if (loading) {
    return loadingLayer();
  }

  return (
    <ResultWrapper style={{ marginTop: "50px" }}>
      <h1 className="title">Assessment result by dataset</h1>
      <div className="searchBar">
        <div
          style={{ display: "flex", alignItems: "center", minWidth: "300px" }}
        >
          <CustomInput
            list="datasets"
            value={searchValue}
            onChange={onChangeInput}
            placeholder="Search by title, DOI, date (yyyy-mm-dd), ..."
          />
          <span>&#128269;</span>
        </div>
        <SearchResults className="search-results">
          {searchResults.length != 0 &&
            searchResults.slice(0, 10).map((dataset, idx) => (
              <button
                className="result-item"
                key={`dataset-${dataset.test_id}-${idx}`}
                onClick={() =>
                  updateCurrentDataset(dataset.figshare_details.id)
                }
              >
                {dataset.figshare_details.title} (
                {dataset.request.normalized_object_identifier})
              </button>
            ))}
        </SearchResults>
      </div>
      {Object.keys(currentDataset).length !== 0 && (
        <ResultDiv>
          <span className="date">
            {formatPublishedDate(
              currentDataset.figshare_details.published_date
            )}
          </span>
          <h1 className="title">{currentDataset.figshare_details.title}</h1>
          <a
            className="doi"
            href={currentDataset.figshare_details.doi}
            target="_blank"
            rel="noopener noreferrer"
          >
            {currentDataset.figshare_details.doi}
          </a>
          <DatasetSummary currentDataset={currentDataset} />
          <DatasetBreakdown currentDataset={currentDataset} />
        </ResultDiv>
      )}
    </ResultWrapper>
  );
};

export default DatasetResult;
