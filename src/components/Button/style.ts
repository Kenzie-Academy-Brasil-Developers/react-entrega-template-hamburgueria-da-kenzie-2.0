import styled from "styled-components";

const cssDefault: string = `

cursor: pointer;
border-radius: 8px;
padding: 0 20px;

display: flex;
align-items: center;
justify-content: center;

font-weight: 600;
line-height: 19px;

transition: 500ms linear;

`;

export const StyledButtonPrimaryDefault = styled.button`
  ${cssDefault}

  font-size: 16px;

  width: 100%;
  height: 60px;

  border: 2px solid var(--color-primary);
  background-color: var(--color-primary);
  color: var(--color-gray-5);

  &:hover {
    border: 2px solid var(--color-primary-hover);
    background-color: var(--color-primary-hover);
    color: var(--color-gray-5);
  }

  &:disabled {
    border: 2px solid var(--color-primary-disableb);
    background-color: var(--color-primary-disableb);
    color: var(--color-gray-0);
  }
`;

export const StyledButtonPrimaryMedium = styled.button`
  ${cssDefault}

  font-size: 14px;

  height: 40px;

  border: 2px solid var(--color-primary);
  background-color: var(--color-primary);
  color: var(--color-gray-5);

  &:hover {
    border: 2px solid var(--color-primary-hover);
    background-color: var(--color-primary-hover);
    color: var(--color-gray-5);
  }

  &:disabled {
    border: 2px solid var(--color-primary-disableb);
    background-color: var(--color-primary-disableb);
    color: var(--color-gray-0);
  }
`;

export const StyledButtonGrey1Default = styled.button`
  ${cssDefault}

  font-size: 16px;

  width: 100%;
  height: 60px;

  border: 2px solid var(--color-gray-1);
  background-color: var(--color-gray-1);
  color: var(--color-gray-3);

  &:hover {
    border: 2px solid var(--color-gray-2);
    background-color: var(--color-gray-2);
  }

  &:disabled {
    border: 2px solid var(--color-gray-3);
    background-color: var(--color-gray-3);
    color: var(--color-gray-2);
  }
`;

export const StyledButtonGrey2Medium = styled.button`
  ${cssDefault}

  font-size: 16px;

  height: 40px;

  border: 2px solid var(--color-gray-2);
  background-color: var(--color-gray-2);
  color: var(--color-gray-3);

  &:hover {
    border: 2px solid var(--color-gray-3);
    background-color: var(--color-gray-3);
    color: var(--color-gray-2);
  }

  &:disabled {
    border: 2px solid var(--color-gray-4);
    background-color: var(--color-gray-4);
    color: var(--color-gray-2);
  }
`;

export const StyledButtonIconDefault = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 28px;

  height: 40px;

  border: none;

  background-color: transparent;

  transition: 500ms linear;

  &:hover {
    color: var(--color-gray-4);
  }

  &[aria-label] {
    position: relative;
  }

  &[aria-label]::after {
    content: attr(aria-label);
    display: none;
    position: absolute;
    top: 110%;
    /* left: 0px; */
    right: 0px;
    z-index: 5000;
    pointer-events: none;
    padding: 8px 10px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-gray-0);
    background-color: var(--color-primary-disableb);
  }

  &[aria-label]:hover::after {
    display: block;
  }
`;
