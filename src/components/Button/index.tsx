import { ReactNode } from "react";
import {
  StyledButtonPrimaryDefault,
  StyledButtonPrimaryMedium,
  StyledButtonGrey1Default,
  StyledButtonGrey2Medium,
} from "./style";

interface iButtonProps {
  name?: string;
  type: "button" | "submit";
  variant: "PrimaryDefault" | "PrimaryMedium" | "Grey1Default" | "Grey2Medium";
  action?: () => void;
  children?: ReactNode;
  disabled?: boolean;
}
export const Button = ({
  name,
  type,
  variant,
  disabled,
  action,
  children,
}: iButtonProps) => {
  switch (variant) {
    case "PrimaryDefault":
      return (
        <StyledButtonPrimaryDefault
          onClick={action}
          type={type}
          disabled={disabled}
        >
          {name}
          {children}
        </StyledButtonPrimaryDefault>
      );
      break;
    case "PrimaryMedium":
      return (
        <StyledButtonPrimaryMedium
          onClick={action}
          type={type}
          disabled={disabled}
        >
          {name}
          {children}
        </StyledButtonPrimaryMedium>
      );
      break;

    case "Grey1Default":
      return (
        <StyledButtonGrey1Default
          onClick={action}
          type={type}
          disabled={disabled}
        >
          {name}
          {children}
        </StyledButtonGrey1Default>
      );
      break;
    case "Grey2Medium":
      return (
        <StyledButtonGrey2Medium
          onClick={action}
          type={type}
          disabled={disabled}
        >
          {name}
          {children}
        </StyledButtonGrey2Medium>
      );
      break;
  }
};
