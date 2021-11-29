import { Routes, Route, HashRouter } from "react-router-dom";
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
import { AssignAttackRitual } from "./pages/AssignAttackRitual/index";
import { EditSheet } from "./pages/EditSheet/index";
import { ForgotPassword } from "./pages/ForgotPassword/index";
import { NewPassword } from "./pages/NewPassword/index";

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<ProtectedMain />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route
          path={"/create-character"}
          element={<ProtectedCreateCharacter />}
        />
        <Route
          path={"/characters/:character_id"}
          element={<ProtectedSheet />}
        />
        <Route
          path={"/characters/:character_id/edit"}
          element={<ProtectedEditSheet />}
        />
        <Route path={"/dashboard"} element={<ProtectedDashboard />} />
        <Route path={"/create-ritual"} element={<ProtectedCreateRitual />} />
        <Route path={"/create-attack"} element={<ProtectedCreateAttack />} />
        <Route path={"/assign"} element={<ProtectedAssignAttackRitual />} />
        <Route path={"/player/forgot-password"} element={<ForgotPassword />} />
        <Route
          path={"/players/:player_id/new-password"}
          element={<NewPassword />}
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

const ProtectedEditSheet = () => {
  const context = useAuth();
  return context.admin ? <EditSheet /> : <Login />;
};

const ProtectedDashboard = () => {
  const context = useAuth();
  return context.admin ? <Dashboard /> : <Login />;
};

const ProtectedCreateRitual = () => {
  const context = useAuth();
  return context.admin ? <CreateRitual /> : <Login />;
};

const ProtectedCreateAttack = () => {
  const context = useAuth();
  return context.admin ? <CreateAttack /> : <Login />;
};

const ProtectedAssignAttackRitual = () => {
  const context = useAuth();
  return context.admin ? <AssignAttackRitual /> : <Login />;
};
