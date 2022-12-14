import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Button } from "../Button";
import { Title } from "../Title";
import { CardProduct } from "./CardProducts";
import { StyledList, StyledContainerList, StyledBoxResults } from "./style";

export const ListProducts = () => {
  const { listProducts, currentSearch, clearSearch } = useContext(UserContext);

  const arrayRender =
    currentSearch !== ""
      ? listProducts.filter((item) => {
          return (
            item.category.toLowerCase().includes(currentSearch.toLowerCase()) ||
            item.name.toLowerCase().includes(currentSearch.toLowerCase())
          );
        })
      : [...listProducts];

  return (
    <>
      <StyledContainerList>
        {currentSearch !== "" && (
          <StyledBoxResults>
            <Title type="Heading1" colorTitle="Grey5">
              Resultados para: <span>{currentSearch}</span>
            </Title>
            <Button
              type="button"
              variant="PrimaryMedium"
              name="Limpar Busca"
              action={clearSearch}
            />
          </StyledBoxResults>
        )}
        {listProducts.length > 0 && arrayRender.length === 0 && (
          <Title colorTitle="Negative" type="Heading3">
            Nenhum produto foi encontrado na pesquisa!
          </Title>
        )}
        {listProducts.length > 0 ? (
          <>
            <StyledList>
              {arrayRender.map((product) => {
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
