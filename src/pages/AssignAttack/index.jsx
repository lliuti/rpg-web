import { useState, useEffect } from "react";
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

  const [assignableAttacks, setAssignableAttacks] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const response = await api.get("/dashboard/characters");
    setCharacters(response.data);
  };

  const handleCharacterChange = (e) => {
    setCharacter(e.target.value);
    setAttack("");
    fetchAssignableAttacks(e.target.value);
  };

  const fetchAssignableAttacks = async (id) => {
    const response = await api.get(`/characters/${id}/attacks/assignable`);
    setAssignableAttacks(response.data);
  };

  const handleAttackChange = (e) => {
    setAttack(e.target.value);
  };

  const handleAssign = async () => {
    if (character == "" || attack == "") {
      return;
    }

    const response = await api.post(
      `/characters/${character}/attacks/${attack}`
    );

    setCharacter("");
    setAttack("");
    fetchAssignableAttacks();
  };

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
                {characters?.map((character) => (
                  <MenuItem key={character.id} value={`${character.id}`}>
                    {character.name}
                  </MenuItem>
                ))}
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
                {assignableAttacks?.map((attack) => (
                  <MenuItem key={attack.id} value={`${attack.id}`}>
                    {attack.name}
                  </MenuItem>
                ))}
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
