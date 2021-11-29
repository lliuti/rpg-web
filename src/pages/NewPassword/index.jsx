import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./styles.module.scss";
import { api } from "../../services/api";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const NewPassword = () => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const { player_id } = useParams();

  const handleNewPassword = async () => {
    if (password !== confirmPassword) {
      alert("Senha diferente de Confirmar Senha");
      return;
    }

    setLoading(true);

    try {
      await api.post(`/players/${player_id}/update-password`, {
        newPassword: password,
      });

      setLoading(false);
      navigate("/login");
    } catch (err) {
      setOpenSnackbar(true);
      setLoading(false);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const actionSnackbar = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="error"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Container>
      <div className={styles.formBox}>
        <h1>Atualizar a antiga senha para uma nova</h1>
        <p>Escreva nos campos abaixo uma nova senha para sua conta</p>
        <div className={styles.gridTwoItems}>
          <TextField
            id="passwordInput"
            label="Senha"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="confirmPasswordInput"
            label="Confirmar Senha"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className={styles.gridOneItem}>
          <LoadingButton
            loading={loading}
            variant="contained"
            color="primary"
            onClick={handleNewPassword}
          >
            ATUALIZAR
          </LoadingButton>
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        color="error"
        message="Não foi possível enviar email!"
        action={actionSnackbar}
      />
    </Container>
  );
};
