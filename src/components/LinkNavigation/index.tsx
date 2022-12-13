import { StyledLinkGrey1Default, StyledLinkUnderline } from "./style";

interface iLinkNavigation {
  to: string;
  name: string;
  variant: "Grey1Default" | "Underline";
}

export function LinkNavigation({ to, name, variant }: iLinkNavigation) {
  switch (variant) {
    case "Grey1Default":
      return <StyledLinkGrey1Default to={to}>{name}</StyledLinkGrey1Default>;
      break;

    case "Underline":
      return <StyledLinkUnderline to={to}>{name}</StyledLinkUnderline>;
      break;
  }
}
