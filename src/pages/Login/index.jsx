import { useState, useEffect, forwardRef } from "react";
import { useAuth } from "../../contexts/useAuth";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";

import LoadingButton from "@mui/lab/LoadingButton";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const context = useAuth();

  useEffect(() => {
    document.title = "RPG - LOGIN";
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    const lowerUsername = username.toLowerCase().trim();
    const loginResponse = await context.Login(lowerUsername, password.trim());
    if (loginResponse === false) {
      setOpen(true);
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate("/");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="error"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Container>
      <div className={styles.formBox}>
        <h1>Login</h1>

        <div className={styles.gridTwoItems}>
          <TextField
            id="usernameInput"
            label="Usuario/Email"
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
          <Button variant="text" onClick={() => navigate("/register")}>
            CRIAR CONTA
          </Button>
          <LoadingButton
            loading={loading}
            onClick={handleLogin}
            variant="contained"
          >
            ENTRAR
          </LoadingButton>
        </div>
        <div className={styles.gridOneItem}>
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate("/player/forgot-password")}
          >
            ESQUECI MINHA SENHA
          </Button>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        color="error"
        message="Usuário/Email ou senha incorreto(s)!"
        action={action}
      />
    </Container>
  );
};
