import { useState, useEffect } from "react";

import { api } from "../../../services/api";
import { useAuth } from "../../../contexts/useAuth";
import styles from "./styles.module.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const EditCharacterDetails = ({ details }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [archetype, setArchetype] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState();

  const context = useAuth();

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

  const handleUpdateSheet = async () => {
    setLoading(true);
    try {
      await api.put(`/characters/${details.character_id}/info`, {
        name,
        age: parseInt(age),
        occupation,
        archetype,
      });
      setLoading(false);
    } catch (err) {
      setOpen(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    setDefaultState();
  }, [details]);

  const setDefaultState = () => {
    setName(details.name);
    setAge(details.age);
    setOccupation(details.occupation);
    setArchetype(details.archetype);
  };

  const handleArchetypeChange = (event) => {
    setArchetype(event.target.value);
  };

  return (
    <div className={styles.characterDetailsContainer}>
      <h1>Informacoes Pessoais 📝</h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="nameInput"
          label="Nome"
          value={name ?? ""}
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />

        <TextField
          id="ageInput"
          label="Idade"
          value={age ?? ""}
          onChange={(e) => setAge(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="occupationInput"
          label="Ocupacao"
          value={occupation ?? ""}
          onChange={(e) => setOccupation(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />

        <FormControl>
          <InputLabel id="demo-simple-select-label">Arquétipo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={archetype ?? ""}
            label="Arquétipo"
            onChange={handleArchetypeChange}
          >
            <MenuItem value={"Combatente"}>Combatente</MenuItem>
            <MenuItem value={"Especialista"}>Especialista</MenuItem>
            <MenuItem value={"Ocultista"}>Ocultista</MenuItem>
            {context.admin && <MenuItem value={"Criatura"}>Criatura</MenuItem>}
          </Select>
        </FormControl>

        {/* <TextField
          id="archetypeInput"
          label="Arquétipo"
          value={details.archetype}
          defaultValue={details.archetype}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        /> */}
      </div>
      <LoadingButton
        loading={loading}
        onClick={handleUpdateSheet}
        variant="outlined"
      >
        ATUALIZAR
      </LoadingButton>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        color="error"
        message="Não foi possível atualizar as informacoes pessoais."
        action={action}
      />
    </div>
  );
};
