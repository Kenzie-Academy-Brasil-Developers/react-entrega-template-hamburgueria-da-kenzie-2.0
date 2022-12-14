import { Title } from "../../Title";
import { StyledCard } from "./styled";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "../../Button";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface iCartProducts {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
  counter?: any;
}

interface iPropsCard {
  product: iCartProducts;
}

export const Card = ({ product }: iPropsCard) => {
  const { removeProductToCartList, addProductToCartList } =
    useContext(CartContext);
  const { category, id, img, name, price, counter } = product;
  return (
    <StyledCard>
      <div>
        <figure>
          <img src={img} alt="" />
        </figure>
        <div>
          <Title colorTitle="Grey5" type="Heading3">
            {name}
          </Title>
          <div>
            <Button
              type="button"
              variant="IconDefault"
              action={() => {
                removeProductToCartList(product, false);
              }}
            >
              <RemoveIcon color="error" />
            </Button>
            <Title type="Caption" colorTitle="Grey5">
              {counter}
            </Title>
            <Button
              type="button"
              variant="IconDefault"
              action={() => {
                addProductToCartList(product);
              }}
            >
              <AddIcon color="error" />
            </Button>
          </div>
        </div>
      </div>
      <Button
        type="button"
        variant="IconDefault"
        action={() => {
          removeProductToCartList(product, true);
        }}
      >
        <DeleteIcon color="disabled" />
      </Button>
    </StyledCard>
  );
};
