import styled from "styled-components";

/**
 * Styles for Learning path section
 */

export const CardWrapper = styled.div`
  transition: 0.3s ease;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1.25rem 1.25rem 0 1.25rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.375rem;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

    .frontCard {
      visibility: hidden;
      transform: translateY(-10rem);
      opacity: 0;
    }

    .backCard {
      transform: translateY(0);
      visibility: visible;
      opacity: 100;
    }
  }

  &:focus {
    .frontCard {
      visibility: hidden;
      transform: translateY(-10rem);
      opacity: 0;
    }

    .backCard {
      transform: translateY(0);
      visibility: visible;
      opacity: 100;
    }
  }

  @media (max-width: 1280px) {
    padding: 2.5rem;
  }
`;

export const FrontCard = styled.div`
  transition: 0.3s ease;
  transform: translateY(0);
  opacity: 100;

  .title {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    margin-top: 1.25rem /* 20px */;
    font-weight: 700;

    @media (max-width: 1280px) {
      padding: 2.5rem;
      font-size: 1.5rem /* 24px */;
      line-height: 2rem /* 32px */;
    }
  }

  .description {
    color: rgba(209, 213, 219, 1);
    font-size: 1rem;
    line-height: 1rem;
    margin-top: 0.75rem;

    @media (max-width: 1280px) {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }
`;

export const BackCard = styled.div`
  transition: 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem;
  text-align: left;
  transform: translateY(10rem);
  visibility: hidden;
  opacity: 0;

  .title {
    margin-bottom: 0.25rem;
    font-weight: 700;
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;

    @media (max-width: 1280px) {
      font-size: 1.5rem /* 24px */;
      line-height: 2rem /* 32px */;
    }
  }

  .description {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  .moreBtn {
    margin-top: 1.25rem;
    padding: 0.25rem 0.75rem;
    background: black;
    font-size: 0.875rem;
    line-height: 1.25rem;

    &:hover {
      background: #00aeef;
    }

    @media (max-width: 1280px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const StatusSpan = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  background: black;
  margin-top: -0.75rem;
  margin-right: 0.75rem;
  padding: 0.25rem 0.5rem;
  font-weight: 700;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #00aeef;
`;
