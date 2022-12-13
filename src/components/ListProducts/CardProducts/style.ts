import styled from "styled-components";

export const StyledCard = styled.li`
  min-width: 250px;
  height: 350px;

  border: 2px solid var(--color-gray-2);
  border-radius: 5px;

  &:hover {
    border: 2px solid var(--color-primary);
    border-radius: 5px;

    button {
      border: 2px solid var(--color-primary);
      background-color: var(--color-primary);
      color: var(--color-gray-0);
    }
    button:hover {
      border: 2px solid var(--color-primary-hover);
      background-color: var(--color-primary-hover);
    }
  }

  @media (max-width: 570px) {
    min-width: 250px;
  }
`;

export const StyledBoxImg = styled.div`
  width: 100%;
  height: 150px;

  background-color: var(--color-gray-1);

  border-radius: 5px 5px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: fit-content;
    height: 100%;
  }
`;

export const StyledBoxInfos = styled.div`
  width: 100%;
  height: 200px;
  padding: 30px 25px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
