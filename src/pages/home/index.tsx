import { Header } from "../../components/Header";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ListProducts } from "../../components/ListProducts";
export const HomePage = () => {
  const { functionValidationPageLogin, listProducts } = useContext(UserContext);

  useEffect(() => {
    functionValidationPageLogin();
  }, []);

  return (
    <>
      <Header />
      <ListProducts />
    </>
  );
};
