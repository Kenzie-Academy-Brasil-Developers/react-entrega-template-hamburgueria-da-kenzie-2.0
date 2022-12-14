import styled from "styled-components";

interface iPropsStyledContainer {
  viewInput: boolean;
}

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;

  background-color: var(--color-gray-1);
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  img {
    width: 159px;
    height: 37px;
  }
`;

export const StyledContainer = styled.div<iPropsStyledContainer>`
  width: 100%;
  max-width: 1440px;
  height: 100%;

  padding: 0 15px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 20px;

    button:nth-child(2) {
    }

    div:nth-child(1) {
      width: 100%;
      height: 80px;
      position: absolute;
      background-color: var(--color-gray-1);
      top: 0;
      left: 0;
      z-index: 100;

      display: flex;
      align-items: center;
      padding: 0 15px;

      transform: ${({ viewInput }) => {
        if (viewInput) {
          return "translateY(0)";
        } else {
          return "translateY(-100px)";
        }
      }};

      form {
        width: 100%;

        display: flex;
        flex-direction: row;

        position: relative;

        input {
          width: 100%;

          height: 60px;

          padding: 0px 80px 0px 15px;

          border: 2px solid var(--color-gray-2);
          border-radius: 8px;

          font-weight: 400;
          font-size: 16px;
          line-height: 19px;

          color: var(--color-gray-4);
        }

        button:nth-child(2) {
          width: 55px;
          height: 40px;

          color: white;
          background: var(--color-primary);
          border: 2px solid var(--color-primary);
          border-radius: 8px;

          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 1000;

          &:hover {
            background: var(--color-primary-hover);
            border: 2px solid var(--color-primary-hover);
          }
        }
      }
    }

    @media (min-width: 800px) {
      button:nth-child(2) {
        display: none;
      }
      div:nth-child(1) {
        position: unset;
        padding: 0;
        form {
          display: flex;
          width: 100%;
          max-width: 365px;
          transform: translateY(0);
          input {
            max-width: 365px;
          }
          button:nth-child(2) {
            display: flex;
          }
        }
      }
    }
  }

  @media (min-width: 800px) {
    padding: 0 100px;
  }
`;
