import styled from "styled-components";

export const StyledCard = styled.li`
  width: 100%;
  min-height: 115px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-items: flex-start;

  border: 2px solid #e0e0e0;
  padding: 5px;

  div {
    display: flex;
    gap: 10px;

    figure {
      min-width: 100px;
      max-width: 100px;
      min-height: 100px;
      max-height: 100px;
      img {
        width: 100%;
        height: 100%;
        background-color: var(--color-gray-1);
      }
    }

    div {
      width: 100%;
      height: 100px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      padding: 0 0px;

      div:nth-child(2) {
        height: 40px;
        width: 120px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0;
        background-color: var(--color-gray-1);
        p {
          text-align: center;
          width: 40px;
          background-color: white;
          padding: 5px 0px;
        }

        button {
          width: 40px;
          &[aria-label]::after {
            top: -90%;
          }
        }
      }
    }
  }
`;
