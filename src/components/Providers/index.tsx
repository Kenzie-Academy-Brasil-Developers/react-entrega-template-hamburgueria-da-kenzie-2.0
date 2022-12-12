import { ReactNode } from "react";
import { CartProvider } from "../../contexts/CartContext";
import { UserProvider } from "../../contexts/UserContext";

interface iProviders {
  children: ReactNode;
}

export const Providers = ({ children }: iProviders) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};
