import { useContext } from "react";
import { AuthContext } from "./auth";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
