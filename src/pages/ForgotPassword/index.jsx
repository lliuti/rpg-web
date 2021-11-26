import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

import { api } from "../../services/api";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const ForgotPassword = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");

  const navigate = useNavigate();

  const handleSendEmail = async () => {
    const response = await api.post("/players/new-password-send-email", {
      usernameOrEmail: usernameOrEmail,
    });

    console.log(response.data);
  };

  return (
    <Container>
      <div className={styles.formBox}>
        <h1>Esqueci minha senha</h1>
        <p>
          Digite seu usuário ou seu email e clique no botão para receber um
          e-mail autorizando voce a resetar sua senha.
        </p>
        <div className={styles.gridTwoItems}>
          <TextField
            id="usernameOrEmailInput"
            label="Usuario/Email"
            variant="outlined"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
          />
          <Button onClick={handleSendEmail} variant="contained">
            ENVIAR EMAIL
          </Button>
        </div>
        <div className={styles.gridOneItem}>
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate("/login")}
          >
            VOLTAR
          </Button>
        </div>
      </div>
    </Container>
  );
};
