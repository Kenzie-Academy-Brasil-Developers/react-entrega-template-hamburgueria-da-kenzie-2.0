import React, { createContext, ReactNode, useState, useEffect } from "react";
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
  handleLogout: () => void;
  functionValidationPageLogin: () => void;
  listProducts: iProducts[];
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

interface iProducts {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iPropsUserProvider) => {
  const [listProducts, setListProducts] = useState<iProducts[]>([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmitLogin: SubmitHandler<iLoginSubmit> = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      toast.success("Login realizado com sucesso!");
      localStorage.setItem("KenzieBurguer@TOKEN", response.data.accessToken);
      requestListProducts();
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
      navigate("/login");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(currentError.response?.data);
      toast.error("Ops! Algo deu errado, faça o cadastro novamente");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    toast.success("Logout realizado com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
    });
    localStorage.removeItem("KenzieBurguer@TOKEN");
    navigate("/login");
  };

  const validationToken = async () => {
    const token = localStorage.getItem("KenzieBurguer@TOKEN");
    if (token) {
      try {
        const response = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return true;
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  };

  const requestListProducts = async () => {
    const token = localStorage.getItem("KenzieBurguer@TOKEN");
    try {
      const response = await api.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setListProducts(response.data);
      navigate("/home");
    } catch (error) {
      localStorage.removeItem("KenzieBurguer@TOKEN");
      navigate("/login");
    }
  };

  const functionValidation = async () => {
    const test = await validationToken();
    if (test) {
      requestListProducts();
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  const functionValidationPageLogin = async () => {
    const test = await validationToken();
    if (test) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    functionValidation();
  }, []);

  return (
    <UserContext.Provider
      value={{
        onSubmitLogin,
        setLoading,
        loading,
        onSubmitRegister,
        handleLogout,
        functionValidationPageLogin,
        listProducts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
