import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Container from "@mui/material/Container";

import { api } from "../../services/api";

export const AssignAttack = () => {
  const [character, setCharacter] = useState("");
  const [attack, setAttack] = useState("");

  const handleCharacterChange = (e) => {
    setCharacter(e.target.value);
  };
  const handleAttackChange = (e) => {
    setAttack(e.target.value);
  };

  const handleAssign = async () => {};

  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.assignAttackContainer}>
        <div className={styles.topArea}>
          <Button
            variant="outlined"
            onClick={() => navigate("/dashboard")}
            color="inherit"
            startIcon={<ArrowBack />}
            sx={{ mr: 4 }}
          >
            VOLTAR
          </Button>
          <h1>Atribuir Ataque</h1>
        </div>
        <div className={styles.assignContainer}>
          <div className={styles.gridTwoItems}>
            <FormControl>
              <InputLabel id="character-select-label">Personagem</InputLabel>
              <Select
                labelId="character-select-label"
                id="character-select"
                value={character}
                label="Personagem"
                onChange={handleCharacterChange}
              >
                <MenuItem value={"Dante"}>Dante</MenuItem>
                <MenuItem value={"Masda"}>Masda</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="attack-select-label">Ataque</InputLabel>
              <Select
                labelId="attack-select-label"
                id="attack-select"
                value={attack}
                label="Ataque"
                onChange={handleAttackChange}
              >
                <MenuItem value={"Sniper"}>Sniper</MenuItem>
                <MenuItem value={"Revolver"}>Revolver</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={styles.alignEnd}>
            <Button onClick={handleAssign} variant="outlined" sx={{ mt: 5 }}>
              ATRIBUIR
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
