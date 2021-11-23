import styles from "./styles.module.scss";

import TextField from "@mui/material/TextField";

const CharacterDetails = () => {
  return (
    <div className={styles.characterDetailsContainer}>
      <h1>Informacoes Pessoais</h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="nameInput"
          label="Nome"
          defaultValue="Nome"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="ageInput"
          label="Idade"
          defaultValue="0"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="occupationInput"
          label="Ocupacao"
          defaultValue="Ocupacao"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="archetypeInput"
          label="Arquétipo"
          defaultValue="Arquétipo"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </div>
  );
};

export default CharacterDetails;
