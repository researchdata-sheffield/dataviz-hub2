import styled from "styled-components";

export const BumpChartWrap = styled.div`
  width: 100%;
  height: 400px;
  text-align: right;
  margin-top: 20px;

  @media (min-width: 1024px) {
    width: 49%;
    margin-top: 0px;
  }
`;

export const ChartUtility = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: #d4d4d4;
  margin-top: 50px;
  padding-bottom: 30px;
  justify-content: center;

  @media (min-width: 768px) {
    padding-bottom: 0px;
  }

  .line-legend {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-size: 0.7rem;

    @media (min-width: 768px) {
      width: 32%;
      justify-content: space-between;
    }
  }

  .SDI-selector {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 0.83rem;
    margin-top: 10px;
    line-height: 1.1;
    align-items: center;

    @media (min-width: 768px) {
      width: 55%;
      margin-top: 0px;
      justify-content: flex-end;
    }
  }
`;
