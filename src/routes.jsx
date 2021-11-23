import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import Main from "./pages/Main/index";
import CreateCharacter from "./pages/CreateCharacter/index";
import Sheet from "./pages/Sheet/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-character" element={<CreateCharacter />} />
        <Route path="/characters/xpto" element={<Sheet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
