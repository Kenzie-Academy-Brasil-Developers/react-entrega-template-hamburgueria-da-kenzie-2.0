import { createContext, ReactNode } from "react";

interface iPropsUserProvider {
  children: ReactNode;
}

interface iUserContext {}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iPropsUserProvider) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
