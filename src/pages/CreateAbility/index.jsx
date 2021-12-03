import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import InputLabel from "@mui/material/InputLabel";

import ArrowBack from "@mui/icons-material/ArrowBack";
import Container from "@mui/material/Container";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { api } from "../../services/api";

export const CreateAbility = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleCreate = async () => {
    setLoading(true);
    try {
      await api.post("/abilities", {
        name,
        description,
      });
      setName("");
      setDescription("");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setOpen(true);
      setLoading(false);
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
      <div className={styles.createAbilityContainer}>
        <div className={styles.topArea}>
          <h1>Criar Habilidade</h1>
        </div>
        <div className={styles.gridTwoItems}>
          <TextField
            id="nameInput"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="descriptionInput"
            label="Descricao"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.gridTwoItems}>
          <Button
            variant="text"
            onClick={() => navigate("/dashboard")}
            color="inherit"
            startIcon={<ArrowBack />}
          >
            VOLTAR
          </Button>
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={handleCreate}
            color="primary"
          >
            CRIAR
          </LoadingButton>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        color="error"
        message="Não foi possível cadastrar uma nova habilidade!"
        action={action}
      />
    </Container>
  );
};
