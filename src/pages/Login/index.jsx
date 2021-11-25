import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/useAuth";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const context = useAuth();

  useEffect(() => {
    document.title = "RPG - LOGIN";
  }, []);

  const handleLogin = () => {
    context.Login(username, password);
    navigate(process.env.REACT_APP_PUBLIC_URL + "/");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Container>
      <div className={styles.formBox}>
        <h1>Login</h1>

        <div className={styles.gridTwoItems}>
          <TextField
            id="usernameInput"
            label="Usuario"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="usernamePassword"
            label="Senha"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
          />
        </div>

        <div className={styles.gridTwoItems}>
          <Button
            variant="text"
            onClick={() =>
              navigate(process.env.REACT_APP_PUBLIC_URL + "/register")
            }
          >
            CRIAR CONTA
          </Button>
          <Button onClick={handleLogin} variant="contained">
            ENTRAR
          </Button>
        </div>
      </div>
    </Container>
  );
};
