import styles from "./styles.module.scss";

import TextField from "@mui/material/TextField";

export const CharacterDetails = ({ details }) => {
  return (
    <div className={styles.characterDetailsContainer}>
      <h1>Informacoes Pessoais 📝</h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="nameInput"
          label="Nome"
          defaultValue={details.name}
          value={details.name}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />

        <TextField
          id="ageInput"
          label="Idade"
          defaultValue={details.age}
          value={details.age}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="occupationInput"
          label="Ocupacao"
          defaultValue={details.occupation}
          value={details.occupation}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />

        <TextField
          id="archetypeInput"
          label="Arquétipo"
          defaultValue={details.archetype}
          value={details.archetype}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
    </div>
  );
};
