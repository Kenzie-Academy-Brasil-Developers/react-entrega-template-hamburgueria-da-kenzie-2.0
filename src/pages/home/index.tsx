import { Header } from "../../components/Header";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ListProducts } from "../../components/ListProducts";
import { ModalCart } from "../../components/ModalCart";
export const HomePage = () => {
  const { openModal } = useContext(CartContext);

  return (
    <>
      {openModal && <ModalCart />}
      <Header />
      <ListProducts />
    </>
  );
};
