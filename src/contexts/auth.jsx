import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [player, setPlayer] = useState("");
  const [admin, setAdmin] = useState(false);

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

    setToken(response.data.token);
    setPlayer(response.data.player);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("player@id", response.data.player.id);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  };

  const Logout = async () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const VerifyAdmin = async () => {
    const id = localStorage.getItem("player@id");
    const response = await api.get(`/players/${id}/admin`);
    setAdmin(response.data);
    return response.data;
  };

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(token), admin, Login, Logout, VerifyAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
