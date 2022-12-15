import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { userLoading, user } = useContext(UserContext);

  if (userLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};
