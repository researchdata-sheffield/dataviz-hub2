import styled from "styled-components";

export const SummaryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;

  .summaryBox:not(:last-child) {
    margin-right: 10px;
  }

  .title {
    width: 100%;
    font-weight: 600;
    font-size: 1.1rem;
    color: #222;
    margin-bottom: 15px;
  }
`;

export const SummaryBox = styled.div`
  min-width: 150px;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  background: #0f131c;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  ${"" /* box-shadow: 2px 2px 5px 2px #000; */}

  h1 {
    font-weight: 900;
    font-size: 2.5rem;
    color: white;

    span {
      font-weight: 700;
      font-size: 1rem;
      color: #cecece;
    }
  }
  h3 {
    font-size: 0.85rem;
    color: #cecece;
  }
`;

export const ResultWrapper = styled.div`
  margin: auto;

  .title {
    width: 100%;
    font-weight: 600;
    font-size: 1.1rem;
    color: #222;
    margin-bottom: 15px;
  }

  .searchBar {
    position: relative;
    margin: 0;
    width: max-content;
    background: white;
    padding: 0.5rem;
    border-radius: 5px 5px 0 0;

    :hover {
      .search-results {
        opacity: 1;
        height: auto;
      }
    }
  }
`;

export const CustomInput = styled.input`
  color: black;
  font-size: 0.95rem;
  padding: 0.2rem 0.5rem;
  width: 100%;
  border-radius: 0.25rem;
  margin-right: 10px;

  @media (min-width: 640px) {
    width: 600px;
  }
`;

export const SearchResults = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  height: 0;
  position: absolute;
  z-index: 999;
  max-height: 400px;
  width: 100%;
  overflow-y: scroll;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  background: white;

  .result-item {
    padding: 5px 10px;
    transition: 0.5s ease;
    cursor: pointer;
    font-weight: 300;
    width: 100%;
    text-align: left;

    :hover {
      background: #111827;
      color: white;
    }
  }

  .result-item:not(:last-child) {
    border-bottom: 1px solid #e8e8e8;
  }
`;

export const ResultDiv = styled.div`
  margin-top: 100px;
  padding: 15px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  transition: 0.5s ease;

  &:hover {
    margin-top: 50px;
  }

  .date {
    font-size: 0.85rem;
    font-weight: 300;
    padding: 3px 5px;
    background: #eaeaea;
    border-radius: 5px;
  }
  .title {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 5px;
    margin-bottom: 0;
  }
  .doi {
    color: grey;
    font-size: 0.9rem;
    font-style: italic;
  }
`;
