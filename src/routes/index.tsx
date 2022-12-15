import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { HomePage } from "../pages/home";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<HomePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
