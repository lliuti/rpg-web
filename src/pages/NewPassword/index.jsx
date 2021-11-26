import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./styles.module.scss";
import { api } from "../../services/api";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const { player_id } = useParams();

  const handleNewPassword = async () => {
    if (password !== confirmPassword) {
      alert("Senha diferente de Confirmar Senha");
      return;
    }

    const response = await api.post(`/players/${player_id}/update-password`, {
      newPassword: password,
    });

    console.log(response.data);
    navigate("/login");
  };

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
          <Button
            variant="contained"
            color="primary"
            onClick={handleNewPassword}
          >
            ATUALIZAR
          </Button>
        </div>
      </div>
    </Container>
  );
};
