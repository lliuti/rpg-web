import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/index";
import { Register } from "./pages/Register/index";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
