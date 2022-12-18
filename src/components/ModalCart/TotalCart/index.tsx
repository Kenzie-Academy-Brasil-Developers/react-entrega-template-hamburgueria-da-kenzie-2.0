import { StyledTotalCart } from "./styled";
import { Button } from "../../Button";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { Title } from "../../Title";

export const TotalCart = () => {
  const { clearCartList, cartListProducts } = useContext(CartContext);

  const totalCart = cartListProducts.reduce((acumulator, previuos) => {
    return acumulator + previuos.price * previuos.counter;
  }, 0);
  return (
    <StyledTotalCart>
      <div>
        <Title type="Heading3" colorTitle="Grey5">
          Total
        </Title>
        <Title type="Heading3" colorTitle="Grey5">
          {totalCart.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Title>
      </div>

      <Button
        type="button"
        variant="PrimaryDefault"
        name="Remover todos"
        action={clearCartList}
      />
    </StyledTotalCart>
  );
};
