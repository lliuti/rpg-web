import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      api.defaults.headers.Authorization = `Bearer ${storedToken}`;
    }
  }, [token]);

  const Login = async (username, password) => {
    const response = await api.post("/login", {
      username,
      password,
    });

    setToken(response.data);
    localStorage.setItem("token", response.data);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  };

  const Logout = async () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ signed: Boolean(token), Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
