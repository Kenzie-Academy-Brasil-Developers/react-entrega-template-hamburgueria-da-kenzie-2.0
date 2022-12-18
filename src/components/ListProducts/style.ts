import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;

  width: 100%;
  height: fit-content;

  padding: 20px 5px;

  overflow-x: auto;

  @media (min-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const StyledContainerList = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;

  padding: 50px 15px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h4 {
    margin-top: 50px;
  }

  @media (min-width: 800px) {
    padding: 50px 100px;
  }
`;

export const StyledBoxResults = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  h2 > span {
    color: #828282;
  }

  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
