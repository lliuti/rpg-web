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

export const AssignRitual = () => {
  const [character, setCharacter] = useState("");
  const [ritual, setRitual] = useState("");

  const [assignableRituals, setAssignableRituals] = useState([]);
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
    setRitual("");
    fetchAssignableRituals(e.target.value);
  };

  const fetchAssignableRituals = async (id) => {
    const response = await api.get(`/characters/${id}/rituals/assignable`);
    setAssignableRituals(response.data);
  };

  const handleRitualChange = (e) => {
    setRitual(e.target.value);
  };

  const handleAssign = async () => {
    if (character == "" || ritual == "") {
      return;
    }

    const response = await api.post(
      `/characters/${character}/rituals/${ritual}`
    );

    setCharacter("");
    setRitual("");
    fetchAssignableRituals();
  };

  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.assignRitualContainer}>
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
          <h1>Atribuir Ritual</h1>
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
              <InputLabel id="attack-select-label">Ritual</InputLabel>
              <Select
                labelId="ritual-select-label"
                id="ritual-select"
                value={ritual}
                label="Ritual"
                onChange={handleRitualChange}
              >
                {assignableRituals?.map((ritual) => (
                  <MenuItem key={ritual.id} value={`${ritual.id}`}>
                    {ritual.name}
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
