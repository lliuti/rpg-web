import { useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

import { api } from "../../services/api";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ForgotPassword = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleSendEmail = async () => {
    try {
      const response = await api.post("/players/new-password-send-email", {
        usernameOrEmail: usernameOrEmail,
      });
      setOpen(true);
    } catch (err) {
      return;
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
        color="success"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

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
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        color="success"
        message="Email enviado! (Voce pode fechar essa janela)"
        action={action}
      />
    </Container>
  );
};
