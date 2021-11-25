import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

import { api } from "../../../services/api";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const EditCharacterDetails = ({ details }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleUpdateSheet = async () => {
    const response = await api.put(`/characters/${details.character_id}/info`, {
      name,
      age,
      occupation,
    });

    console.log(response.data);
  };

  useEffect(() => {
    setDefaultState();
  }, [details]);

  const setDefaultState = () => {
    setName(details.name);
    setAge(details.age);
    setOccupation(details.occupation);
  };

  return (
    <div className={styles.characterDetailsContainer}>
      <h1>Informacoes Pessoais 📝</h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="nameInput"
          label="Nome"
          value={name}
          defaultValue={details.name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />

        <TextField
          id="ageInput"
          label="Idade"
          value={age}
          defaultValue={details.age}
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
          value={occupation}
          defaultValue={details.occupation}
          onChange={(e) => setOccupation(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />

        <TextField
          id="archetypeInput"
          label="Arquétipo"
          value={details.archetype || ""}
          defaultValue={details.archetype}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <Button onClick={handleUpdateSheet} variant="outlined">
        ATUALIZAR
      </Button>
    </div>
  );
};
