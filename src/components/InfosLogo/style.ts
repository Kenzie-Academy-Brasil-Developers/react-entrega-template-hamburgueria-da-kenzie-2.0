import styled from "styled-components";

export const StyledBoxInfos = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 25px;

  img:nth-child(1) {
    width: 244px;
    height: 57px;
  }

  img:nth-child(3) {
    width: 182px;
    height: 79px;
    display: none;
  }

  @media (min-width: 800px) {
    img:nth-child(3) {
      display: flex;
    }
  }
`;

export const StyledBoxtextInfos = styled.div`
  width: 100%;
  max-width: 377px;
  height: fit-content;

  display: flex;
  gap: 20px;

  background-color: var(--color-gray-0);
  border: 1px solid var(--color-gray-2);
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  padding: 20px 15px;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--color-gray-4);
  }

  div {
    min-width: 60px;
    min-height: 60px;
    border-radius: 5px;
    background-color: rgba(59, 201, 219, 0.1);

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 24px;
      max-height: 24px;
    }
  }
`;
