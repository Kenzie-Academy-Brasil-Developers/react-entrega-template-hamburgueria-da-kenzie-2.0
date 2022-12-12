import { createContext, ReactNode } from "react";

interface iPropsCartProvider {
  children: ReactNode;
}

interface iCartContext {}

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iPropsCartProvider) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
