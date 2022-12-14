import { Header } from "../../components/Header";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { ListProducts } from "../../components/ListProducts";
import { ModalCart } from "../../components/ModalCart";
export const HomePage = () => {
  const { functionValidationPageLogin } = useContext(UserContext);
  const { openModal } = useContext(CartContext);

  useEffect(() => {
    functionValidationPageLogin();
  }, []);

  return (
    <>
      {openModal && <ModalCart />}
      <Header />
      <ListProducts />
    </>
  );
};
