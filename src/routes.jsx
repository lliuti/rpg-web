import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { useAuth } from "./contexts/useAuth";
import { Login } from "./pages/Login/index";
import { Register } from "./pages/Register/index";
import { Main } from "./pages/Main/index";
import { CreateCharacter } from "./pages/CreateCharacter/index";
import { Sheet } from "./pages/Sheet/index";
import { NotFound } from "./pages/NotFound/index";
import { Dashboard } from "./pages/Dashboard/index";
import { CreateRitual } from "./pages/CreateRitual/index";
import { CreateAttack } from "./pages/CreateAttack/index";
import { AssignAttack } from "./pages/AssignAttack/index";
import { AssignRitual } from "./pages/AssignRitual/index";

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={import.meta.env.VITE_APP_PUBLIC_URL + "/"}
          element={<ProtectedMain />}
        />
        <Route
          path={import.meta.env.VITE_APP_PUBLIC_URL + "/login"}
          element={<Login />}
        />
        <Route
          path={import.meta.env.VITE_APP_PUBLIC_URL + "/register"}
          element={<Register />}
        />
        <Route
          path={import.meta.env.VITE_APP_PUBLIC_URL + "/create-character"}
          element={<ProtectedCreateCharacter />}
        />
        <Route
          path={
            import.meta.env.VITE_APP_PUBLIC_URL + "/characters/:character_id"
          }
          element={<ProtectedSheet />}
        />
        <Route
          path={import.meta.env.VITE_APP_PUBLIC_URL + "/dashboard"}
          element={<ProtectedDashboard />}
        />
        <Route
          path={import.meta.env.VITE_APP_PUBLIC_URL + "/create-ritual"}
          element={<ProtectedCreateRitual />}
        />
        <Route
          path={import.meta.env.VITE_APP_PUBLIC_URL + "/assign-ritual"}
          element={<ProtectedAssignRitual />}
        />
        <Route
          path={import.meta.env.VITE_APP_PUBLIC_URL + "/create-attack"}
          element={<ProtectedCreateAttack />}
        />
        <Route
          path={import.meta.env.VITE_APP_PUBLIC_URL + "/assign-attack"}
          element={<ProtectedAssignAttack />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
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

const ProtectedDashboard = () => {
  const context = useAuth();
  context.VerifyAdmin();

  return context.admin ? <Dashboard /> : <Login />;
};

const ProtectedCreateRitual = () => {
  const context = useAuth();
  context.VerifyAdmin();

  return context.admin ? <CreateRitual /> : <Login />;
};

const ProtectedCreateAttack = () => {
  const context = useAuth();
  context.VerifyAdmin();

  return context.admin ? <CreateAttack /> : <Login />;
};

const ProtectedAssignAttack = () => {
  const context = useAuth();
  context.VerifyAdmin();

  return context.admin ? <AssignAttack /> : <Login />;
};

const ProtectedAssignRitual = () => {
  const context = useAuth();
  context.VerifyAdmin();

  return context.admin ? <AssignRitual /> : <Login />;
};
