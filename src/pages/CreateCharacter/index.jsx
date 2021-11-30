import { useState, useEffect, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../contexts/useAuth";
import styles from "./styles.module.scss";

import LoadingButton from "@mui/lab/LoadingButton";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import ArrowBack from "@mui/icons-material/ArrowBack";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const CreateCharacter = () => {
  const [archetype, setArchetype] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [occupation, setOccupation] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const context = useAuth();

  useEffect(() => {
    document.title = "RPG - CREATE CHARACTER";
  }, []);

  const handleArchetypeChange = (event) => {
    setArchetype(event.target.value);
  };

  const handleCreateCharacter = async () => {
    setLoading(true);
    try {
      await api.post("/characters", {
        name,
        occupation,
        age: parseInt(age),
        archetype,
      });

      setLoading(false);
      navigate("/");
    } catch (err) {
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
      <div className={styles.formBox}>
        <h1>Criar Personagem</h1>
        <div className={styles.gridTwoItems}>
          <TextField
            id="nameInput"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="occupationInput"
            label="Ocupacao"
            variant="outlined"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
        <div className={styles.gridTwoItems}>
          <TextField
            id="ageInput"
            label="Idade"
            variant="outlined"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Arquétipo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={archetype}
              label="Arquétipo"
              onChange={handleArchetypeChange}
            >
              <MenuItem value={"Combatente"}>Combatente</MenuItem>
              <MenuItem value={"Especialista"}>Especialista</MenuItem>
              <MenuItem value={"Ocultista"}>Ocultista</MenuItem>
              {context.admin && (
                <MenuItem value={"Criatura"}>Criatura</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>
        <div className={styles.gridTwoItems}>
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate("/")}
            startIcon={<ArrowBack />}
          >
            VOLTAR
          </Button>
          <LoadingButton
            loading={loading}
            onClick={handleCreateCharacter}
            variant="outlined"
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
        message="Não foi possível cadastrar um novo personagem!"
        action={action}
      />
    </Container>
  );
};
