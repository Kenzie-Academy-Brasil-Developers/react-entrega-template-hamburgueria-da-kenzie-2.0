import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;

  background-color: #f5f5f5;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  img {
    width: 159px;
    height: 37px;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;

  padding: 0 100px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
