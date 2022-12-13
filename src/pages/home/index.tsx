import { Header } from "../../components/Header";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
export const HomePage = () => {
  const { functionValidationPageLogin, listProducts } = useContext(UserContext);

  useEffect(() => {
    functionValidationPageLogin();
  }, []);

  return (
    <>
      <Header />
      {listProducts.length > 0 ? <h1>neto</h1> : <h1>Carregando...</h1>}
    </>
  );
};
