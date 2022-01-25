import React from "react";
import { ResultWrapper, CustomInput, SearchResults } from "./styles";
import AssessmentResults from "./assessment_results.json";
import debounce from "lodash.debounce";

const DatasetResult = () => {
  const onChangeInput = debounce((event) => {
    console.log(event);
  }, 1000);

  return (
    <ResultWrapper style={{ marginTop: "50px" }}>
      <h1 className="title">Individual result</h1>
      <div className="searchBar">
        <CustomInput
          list="datasets"
          onChange={onChangeInput}
          placeholder="Search by title, DOI, date, ..."
        />
        &#128269;
        <SearchResults className="search-results">
          {AssessmentResults.slice(0, 5).map((dataset, idx) => (
            <div
              className="result-item"
              key={`dataset-${dataset.test_id}-${idx}`}
            >
              {dataset.figshare_details.title} (
              {dataset.request.normalized_object_identifier})
            </div>
          ))}
        </SearchResults>
      </div>
    </ResultWrapper>
  );
};

export default DatasetResult;
