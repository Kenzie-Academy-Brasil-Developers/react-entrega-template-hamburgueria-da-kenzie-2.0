import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "../Button";
import { Title } from "../Title";
import * as Styled from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { TotalCart } from "./TotalCart";
import { Card } from "./Card";

export const ModalCart = () => {
  const { cartListProducts, functionCloseModal } = useContext(CartContext);

  return (
    <Styled.StyledContainerModalWrap>
      <Styled.StyledModal>
        <header>
          <Title colorTitle="Grey5" type="Heading3">
            Carrinho de compras
          </Title>
          <Button
            type="button"
            variant="IconDefault"
            action={functionCloseModal}
            arialLabel="Fechar"
          >
            <CloseIcon color="action" />
          </Button>
        </header>

        {cartListProducts.length === 0 ? (
          <Styled.StyledBoxCart>
            <Title type="Heading3" colorTitle="Grey5">
              Sua sacola está vazia
            </Title>
            <Title type="Body" colorTitle="Grey3">
              Adicione itens
            </Title>
          </Styled.StyledBoxCart>
        ) : (
          <Styled.StyledBoxCart>
            <ul>
              {cartListProducts.map((product) => {
                return <Card key={product.id} product={product} />;
              })}
            </ul>
            <TotalCart />
          </Styled.StyledBoxCart>
        )}
      </Styled.StyledModal>
    </Styled.StyledContainerModalWrap>
  );
};
