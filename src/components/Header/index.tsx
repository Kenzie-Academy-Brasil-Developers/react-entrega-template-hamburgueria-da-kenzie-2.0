import { StyledHeader, StyledContainer } from "./styled";
import logo from "../../assets/logo.svg";
import { Button } from "../Button";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";

import { useOutClick } from "../../hooks/useOutClick";

export function Header() {
  const { handleLogout, submitInputSearch } = useContext(UserContext);
  const { cartListProducts, functionOpenModal } = useContext(CartContext);

  const [viewInput, setViewInput] = useState(false);
  const [inputSearch, setInputsearch] = useState("");

  const modalRef = useOutClick(() => {
    if (window.screen.width < 800) {
      setViewInput(false);
    }
  });

  const resizeWindow = () => {
    if (window.screen.width >= 800) {
      setViewInput(true);
    } else {
      setViewInput(false);
    }
  };

  const submitForm = (e: any) => {
    submitInputSearch(e, inputSearch);
    setInputsearch("");
    setViewInput(false);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  return (
    <StyledHeader ref={modalRef}>
      <StyledContainer viewInput={viewInput}>
        <img src={logo} alt="" />
        <div>
          <div>
            <form
              onSubmit={(e) => {
                submitForm(e);
              }}
            >
              <input
                type="text"
                placeholder="O que você deseja?"
                value={inputSearch}
                onChange={(e) => {
                  setInputsearch(e.target.value);
                }}
              />
              <Button type="submit" variant="IconDefault">
                <SearchIcon />
              </Button>
            </form>
          </div>
          <Button
            type="button"
            variant="IconDefault"
            action={() => {
              setViewInput(true);
            }}
          >
            <SearchIcon color="disabled" />
          </Button>
          <Button
            type="button"
            variant="IconDefault"
            action={functionOpenModal}
          >
            <Badge color="success" badgeContent={cartListProducts.length}>
              <ShoppingCartIcon color="disabled" />
            </Badge>
          </Button>
          <Button type="button" variant="IconDefault" action={handleLogout}>
            <LogoutIcon color="disabled" />
          </Button>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
}
