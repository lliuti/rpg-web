import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import ArrowBack from "@mui/icons-material/ArrowBack";

export const CreateCharacter = () => {
  const [archetype, setArchetype] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [occupation, setOccupation] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "RPG - CREATE CHARACTER";
  }, []);

  const handleArchetypeChange = (event) => {
    setArchetype(event.target.value);
  };

  const handleCreateCharacter = async () => {
    const response = await api.post("/characters", {
      name,
      occupation,
      age: parseInt(age),
      archetype,
    });

    navigate("/");
  };

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
          <Button onClick={handleCreateCharacter} variant="outlined">
            CRIAR
          </Button>
        </div>
      </div>
    </Container>
  );
};
