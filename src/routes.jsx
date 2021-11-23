import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./contexts/useAuth";
import { Login } from "./pages/Login/index";
import { Register } from "./pages/Register/index";
import { Main } from "./pages/Main/index";
import { CreateCharacter } from "./pages/CreateCharacter/index";
import { Sheet } from "./pages/Sheet/index";
import { NotFound } from "./pages/NotFound/index";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<ProtectedMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/create-character"
          element={<ProtectedCreateCharacter />}
        />
        <Route path="/characters/xpto" element={<ProtectedSheet />} />
      </Routes>
    </BrowserRouter>
  );
};

const ProtectedMain = () => {
  const context = useAuth();

  return context.signed ? <Main /> : <Login />;
};

const ProtectedCreateCharacter = () => {
  const context = useAuth();

  return context.signed ? <CreateCharacter /> : <Login />;
};

const ProtectedSheet = () => {
  const context = useAuth();

  return context.signed ? <Sheet /> : <Login />;
};
