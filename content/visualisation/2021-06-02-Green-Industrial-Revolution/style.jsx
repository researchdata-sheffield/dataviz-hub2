import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 0;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

export const InfoDiv = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;

  @media (min-width: 768px) {
    margin-top: 5rem;
  }

  div {
    margin: auto 2rem;
    text-align: right;

    h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 1.875rem;
      line-height: 2.25rem;
      font-weight: 700;
      color: white;

      @media (min-width: 768px) {
        font-size: 3.2rem;
        line-height: 1;
      }
    }

    h3 {
      margin-top: 0;
      font-weight: 400;
      font-size: 0.85rem;
      line-height: 1;
      color: rgb(156, 163, 175);
    }
  }
`;

export const SubTitle = styled.div`
  margin-top: 1rem;
  color: rgb(156, 163, 175);
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;

  @media (min-width: 768px) {
    margin-top: 4rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  span {
    font-size: 1.125rem /* 18px */;
    line-height: 1.75rem /* 28px */;
    color: rgb(52, 211, 153);
  }
`;

export const SourceTitle = styled.h1`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1.25rem;
  color: rgb(156, 163, 175);
  font-size: 0.75rem;
  line-height: 1rem;
  white-space: nowrap;
`;

export const BrandTitle = styled(SourceTitle)`
  font-weight: 800;
  left: 0;
`;
