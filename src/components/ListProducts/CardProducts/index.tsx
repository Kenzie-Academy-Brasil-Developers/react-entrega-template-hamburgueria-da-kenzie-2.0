import { Button } from "../../Button";
import { Title } from "../../Title";
import { StyledCard, StyledBoxImg, StyledBoxInfos } from "./style";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

interface iProducts {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

interface iProps {
  product: iProducts;
}

export const CardProduct = ({ product }: iProps) => {
  const { id, name, category, price, img } = product;

  const { addProductToCartList } = useContext(CartContext);

  return (
    <StyledCard>
      <StyledBoxImg>
        <img src={img} alt={`imagem ${name}`} />
      </StyledBoxImg>

      <StyledBoxInfos>
        <Title colorTitle="Grey5" type="Heading3">
          {name}
        </Title>
        <Title colorTitle="Grey3" type="Caption">
          {category}
        </Title>
        <Title colorTitle="Sucess" type="Body-600">
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Title>
        <Button
          type="button"
          variant="Grey2Medium"
          name="Adicionar"
          action={() => {
            addProductToCartList(product);
          }}
        />
      </StyledBoxInfos>
    </StyledCard>
  );
};
