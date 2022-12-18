import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLinkGrey1Default = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  line-height: 19px;
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

export const StyledLinkUnderline = styled(Link)`
  cursor: pointer;
  text-decoration: underline;

  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  color: var(--color-gray-3);

  &:hover {
    color: var(--color-primary-disableb);
  }
`;
