import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CardProduct } from "./CardProducts";
import { StyledList, StyledContainerList } from "./style";

export const ListProducts = () => {
  const { listProducts } = useContext(UserContext);
  return (
    <>
      <StyledContainerList>
        {listProducts.length > 0 ? (
          <StyledList>
            {listProducts.map((product) => {
              return <CardProduct key={product.id} product={product} />;
            })}
          </StyledList>
        ) : (
          <h1>Carregando...</h1>
        )}
      </StyledContainerList>
    </>
  );
};
