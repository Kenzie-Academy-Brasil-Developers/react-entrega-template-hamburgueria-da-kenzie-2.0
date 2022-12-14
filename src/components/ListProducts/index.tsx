import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { Title } from "../Title";
import { CardProduct } from "./CardProducts";
import { StyledList, StyledContainerList } from "./style";

export const ListProducts = () => {
  const { listProducts } = useContext(UserContext);
  const { cartListProducts } = useContext(CartContext);
  return (
    <>
      <StyledContainerList>
        {listProducts.length > 0 ? (
          <>
            <StyledList>
              {listProducts.map((product) => {
                return <CardProduct key={product.id} product={product} />;
              })}
            </StyledList>
          </>
        ) : (
          <Title colorTitle="Grey5" type="Heading1">
            Carregando...
          </Title>
        )}
      </StyledContainerList>
    </>
  );
};
