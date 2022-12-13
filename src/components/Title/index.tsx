import { ReactNode } from "react";
import * as Styled from "./style";

interface iTitle {
  children: ReactNode;
  type:
    | "Heading1"
    | "Heading2"
    | "Heading3"
    | "Headline"
    | "Body"
    | "Body-600"
    | "Caption";
  colorTitle: "Grey5" | "Grey3" | "Grey0" | "Sucess" | "Negative";
}

export const Title = ({ children, type, colorTitle }: iTitle) => {
  switch (type) {
    case "Heading1":
      return (
        <Styled.StyledHeading1 colorTitle={colorTitle}>
          {children}
        </Styled.StyledHeading1>
      );
      break;
    case "Heading2":
      return (
        <Styled.StyledHeading2 colorTitle={colorTitle}>
          {children}
        </Styled.StyledHeading2>
      );
      break;
    case "Heading3":
      return (
        <Styled.StyledHeading3 colorTitle={colorTitle}>
          {children}
        </Styled.StyledHeading3>
      );
      break;
    case "Headline":
      return (
        <Styled.StyledHeadline colorTitle={colorTitle}>
          {children}
        </Styled.StyledHeadline>
      );
      break;
    case "Body":
      return (
        <Styled.StyledBody colorTitle={colorTitle}>
          {children}
        </Styled.StyledBody>
      );
      break;
    case "Body-600":
      return (
        <Styled.StyledBody600 colorTitle={colorTitle}>
          {children}
        </Styled.StyledBody600>
      );
      break;
    case "Caption":
      return (
        <Styled.StyledCaption colorTitle={colorTitle}>
          {children}
        </Styled.StyledCaption>
      );
      break;
  }
};
