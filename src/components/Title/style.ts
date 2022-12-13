import styled from "styled-components";

interface iProps {
  colorTitle: "Grey5" | "Grey3" | "Grey0" | "Sucess" | "Negative";
}

const functionSelectTitleColor = (props: string) => {
  switch (props) {
    case "Grey5":
      return "var(--color-gray-5)";
      break;
    case "Grey3":
      return "var(--color-gray-3)";
      break;

    case "Grey0":
      return "var(--color-gray-0)";
      break;

    case "Sucess":
      return "var(--color-primary)";
      break;
    case "Negative":
      return "var(--color-negative)";
      break;
  }
};

export const StyledHeading1 = styled.h2<iProps>`
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;

export const StyledHeading2 = styled.h3<iProps>`
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;

export const StyledHeading3 = styled.h4<iProps>`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;

export const StyledHeadline = styled.p<iProps>`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;

export const StyledBody = styled.p<iProps>`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;

export const StyledBody600 = styled.p<iProps>`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;

export const StyledCaption = styled.p<iProps>`
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;

  color: ${({ colorTitle }) => {
    return functionSelectTitleColor(colorTitle);
  }};
`;
