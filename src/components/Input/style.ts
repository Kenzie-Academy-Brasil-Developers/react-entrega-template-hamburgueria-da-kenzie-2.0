import styled from "styled-components";

export const StyledBoxInput = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  position: relative;

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-negative);
    margin-top: 5px;
  }

  input {
    width: 100%;
    height: 60px;
    position: relative;
    z-index: 2;

    font-weight: 400;
    font-size: 16px;

    background-color: var(--color-gray-1);
    color: var(--color-gray-5);

    border-radius: 8px;
    border: 2px solid var(--color-gray-1);
    padding-left: 15px;
  }
  input::placeholder {
    color: var(--color-gray-4);
  }

  label {
    width: max-content;
    height: fit-content;
    padding: 5px;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
    right: 0;

    background-color: var(--color-gray-0);
    color: var(--color-gray-4);

    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    transition: 0.5s;
  }

  input:focus {
    background-color: var(--color-gray-0);
  }

  input:focus + label {
    margin-top: 0px;
    top: -12px;
    z-index: 2;
    transition: 0.2s;
  }
`;
