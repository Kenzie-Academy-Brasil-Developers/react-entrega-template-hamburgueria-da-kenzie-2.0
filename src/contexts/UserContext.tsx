import React, { createContext, ReactNode, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

interface iPropsUserProvider {
  children: ReactNode;
}

interface iUserContext {
  onSubmitLogin: SubmitHandler<iLoginSubmit>;
  onSubmitRegister: SubmitHandler<iRegisterSubmit>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

interface iLoginSubmit {
  email: string;
  password: string;
}

interface iRegisterSubmit {
  name: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
}

interface iDefaultErrorResponse {
  message: string;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iPropsUserProvider) => {
  const [loggedUser, setLoggedUser] = useState({} as iRegisterSubmit);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("@TOKEN");

  const onSubmitLogin: SubmitHandler<iLoginSubmit> = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      toast.success("Login realizado com sucesso!");
      localStorage.setItem("KenzieBurguer@TOKEN", response.data.accessToken);
      setLoggedUser(response.data.user);
      console.log(response.data);
      navigate("/home");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(currentError.response?.data);
      toast.error("Ops! Algo deu errado, faça o login novamente");
    } finally {
      setLoading(false);
    }
  };

  const onSubmitRegister: SubmitHandler<iRegisterSubmit> = async (data) => {
    delete data.passwordConfirmation;

    try {
      setLoading(true);
      const response = await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(currentError.response?.data);
      toast.error("Ops! Algo deu errado, faça o cadastro novamente");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{ onSubmitLogin, setLoading, loading, onSubmitRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};
