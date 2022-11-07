import styled from "styled-components";

export const SearchItem = styled.div`
  width: 363px;
  min-height: 420px;
  transition: 0.5s ease;
  text-align: left;
  position: relative;
  margin-bottom: 50px;

  h1:hover,
  p:hover {
    color: "#440099";
  }
`;

export const ItemThumb = styled.div`
  width: 100%;
  background-size: "cover",
  background-position: "center",
  border-radius: "10px",
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  min-height: "220px"
`;
