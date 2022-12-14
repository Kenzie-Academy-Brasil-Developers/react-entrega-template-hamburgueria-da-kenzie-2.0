import styled from "styled-components";

export const StyledContainerPageRegister = styled.div`
  width: 100%;
  max-width: 1200px;
  height: fit-content;

  display: flex;
  flex-direction: column;

  gap: 20px;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    gap: 50px;
  }
`;

export const StyledBoxForm = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: var(--color-gray-0);
  border: 2px solid var(--color-gray-1);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  form {
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledHeaderContainerPageRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
