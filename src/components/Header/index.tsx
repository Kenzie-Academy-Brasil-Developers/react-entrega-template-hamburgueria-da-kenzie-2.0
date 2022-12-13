import { StyledHeader, StyledContainer } from "./styled";
import logo from "../../assets/logo.svg";
import { Button } from "../Button";
import { IoLogOutOutline } from "react-icons/io5";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function Header() {
  const { handleLogout } = useContext(UserContext);
  return (
    <StyledHeader>
      <StyledContainer>
        <img src={logo} alt="" />
        <Button type="button" variant="IconDefault" action={handleLogout}>
          <IoLogOutOutline />
        </Button>
      </StyledContainer>
    </StyledHeader>
  );
}
