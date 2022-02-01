import React, { useState, useCallback, useEffect } from "react";
import { ResultWrapper, CustomInput, SearchResults, ResultDiv } from "./styles";
import AssessmentResults from "../data/assessment_results.json";
import debounce from "lodash.debounce";
import DatasetSummary from "./datasetSummary";
import DatasetBreakdown from "./datasetBreakdown";

const DatasetResult = () => {
  const [currentDataset, setDataset] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  let timer;

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      debounceInput(searchValue);
    }, 1000);

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

      const filteredResults = AssessmentResults.filter((result) => {
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
      });

      setSearchResults(filteredResults);
    }, 500),
    []
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
    return null;
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

  return (
    <ResultWrapper style={{ marginTop: "50px" }}>
      <h1 className="title">Assessment result by dataset</h1>
      <div className="searchBar">
        <CustomInput
          list="datasets"
          value={searchValue}
          onChange={onChangeInput}
          placeholder="Search by title, DOI, date (yyyy-mm-dd), ..."
        />
        &#128269;
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
