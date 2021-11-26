import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/useAuth";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import { api } from "../../services/api";

export const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const context = useAuth();

  useEffect(() => {
    document.title = "RPG - CREATE ACCOUNT";
  }, []);

  const handleCreateAccount = async () => {
    if (name == "" && username == "" && email == "" && password == "") {
      return;
    }

    const lowerUsername = username.toLowerCase();
    const lowerEmail = email.toLowerCase();

    const response = await api.post("/players", {
      name,
      username: lowerUsername,
      email: lowerEmail,
      password,
    });

    context.Login(username, password);
    navigate("/");
  };

  return (
    <Container sx={{ pb: 10 }}>
      <div className={styles.formBox}>
        <h1>Registrar</h1>
        <div className={styles.gridTwoItems}>
          <TextField
            id="nameInput"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="usernameInput"
            label="Usuario"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.gridTwoItems}>
          <TextField
            id="emailInput"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="passwordInput"
            label="Senha"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.gridTwoItems}>
          <Button variant="text" onClick={() => navigate("/login")}>
            LOGIN
          </Button>
          <Button onClick={handleCreateAccount} variant="contained">
            REGISTRAR
          </Button>
        </div>
      </div>
    </Container>
  );
};
