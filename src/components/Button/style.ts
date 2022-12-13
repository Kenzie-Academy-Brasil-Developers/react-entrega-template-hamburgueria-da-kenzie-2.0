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

`;

export const StyledButtonPrimaryDefault = styled.button`
  ${cssDefault}

  font-size: 16px;

  width: 100%;
  height: 60px;

  border: 2px solid var(--color-primary);
  background-color: var(--color-primary);
  color: var(--color-gray-0);

  &:hover {
    border: 2px solid var(--color-primary-hover);
    background-color: var(--color-primary-hover);
  }

  &:disabled {
    border: 2px solid var(--color-primary-disableb);
    background-color: var(--color-primary-disableb);
  }
`;

export const StyledButtonPrimaryMedium = styled.button`
  ${cssDefault}

  font-size: 14px;

  height: 40px;

  border: 2px solid var(--color-primary);
  background-color: var(--color-primary);
  color: var(--color-gray-0);

  &:hover {
    border: 2px solid var(--color-primary-hover);
    background-color: var(--color-primary-hover);
  }

  &:disabled {
    border: 2px solid var(--color-primary-disableb);
    background-color: var(--color-primary-disableb);
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
