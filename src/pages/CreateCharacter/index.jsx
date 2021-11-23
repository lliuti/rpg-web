import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleArchetypeChange = (event) => {
    setArchetype(event.target.value);
  };

  return (
    <Container>
      <div className={styles.formBox}>
        <h1>Criar Personagem</h1>
        <div className={styles.gridTwoItems}>
          <TextField id="nameInput" label="Nome" variant="outlined" />
          <TextField id="occupationInput" label="Ocupacao" variant="outlined" />
        </div>
        <div className={styles.gridTwoItems}>
          <TextField
            id="ageInput"
            label="Idade"
            variant="outlined"
            type="number"
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
            onClick={() => navigate("/")}
            startIcon={<ArrowBack />}
          >
            VOLTAR
          </Button>
          <Button variant="contained">CRIAR</Button>
        </div>
      </div>
    </Container>
  );
};
