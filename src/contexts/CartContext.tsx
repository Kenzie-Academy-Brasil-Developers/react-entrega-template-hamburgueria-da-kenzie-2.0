import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

interface iPropsCartProvider {
  children: ReactNode;
}

interface iCartContext {
  cartListProducts: iCartProducts[];
  addProductToCartList: (product: iCartProducts) => void;
  removeProductToCartList: (product: iCartProducts, all: boolean) => void;
  clearCartList: () => void;
  openModal: boolean;
  functionOpenModal: () => void;
  functionCloseModal: () => void;
  functionClearCartList: () => void;
}

interface iCartProducts {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
  counter?: any;
}

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iPropsCartProvider) => {
  const [cartListProducts, setCartListProducts] = useState<iCartProducts[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const addProductToCartList = (product: iCartProducts) => {
    const arrayTempCopyCartListProduct = [...cartListProducts];

    const searchId = arrayTempCopyCartListProduct.find(
      (item) => item.id === product.id
    );

    if (searchId) {
      searchId.counter = searchId.counter + 1;
    } else {
      product.counter = 1;
      arrayTempCopyCartListProduct.push(product);
      toast.success("Produto adicionado no carrinho com sucesso!");
    }
    setCartListProducts(arrayTempCopyCartListProduct);
  };

  const removeProductToCartList = (product: iCartProducts, all: boolean) => {
    const arrayTempCopyCartListProduct = [...cartListProducts];
    if (all) {
      const filterArray = arrayTempCopyCartListProduct.filter(
        (item) => item.id !== product.id
      );
      setCartListProducts(filterArray);
      toast.success("Produto removido do carrinho com sucesso!");
    } else {
      const searchId = arrayTempCopyCartListProduct.find(
        (item) => item.id === product.id
      );

      if (searchId) {
        if (searchId.counter > 1) {
          searchId.counter = searchId.counter - 1;
          setCartListProducts(arrayTempCopyCartListProduct);
        } else {
          const filterArray = arrayTempCopyCartListProduct.filter(
            (item) => item.id !== product.id
          );
          setCartListProducts(filterArray);
        }
      }
    }
  };

  const clearCartList = () => {
    setCartListProducts([]);
    toast.success("Todos os produtos foram removidos com sucesso!");
  };

  const functionOpenModal = () => {
    setOpenModal(true);
  };

  const functionCloseModal = () => {
    setOpenModal(false);
  };

  const functionClearCartList = () => {
    setCartListProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartListProducts,
        addProductToCartList,
        removeProductToCartList,
        clearCartList,
        openModal,
        functionOpenModal,
        functionCloseModal,
        functionClearCartList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
