import { StyledHeader, StyledContainer } from "./styled";
import logo from "../../assets/logo.svg";
import { Button } from "../Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

export function Header() {
  const { handleLogout } = useContext(UserContext);
  const { cartListProducts, functionOpenModal } = useContext(CartContext);
  return (
    <StyledHeader>
      <StyledContainer>
        <img src={logo} alt="" />
        <Button type="button" variant="IconDefault" action={functionOpenModal}>
          <Badge color="success" badgeContent={cartListProducts.length}>
            <ShoppingCartIcon color="disabled" />
          </Badge>
        </Button>
        <Button type="button" variant="IconDefault" action={handleLogout}>
          <LogoutIcon color="disabled" />
        </Button>
      </StyledContainer>
    </StyledHeader>
  );
}
