import styles from "./styles.module.scss";
import TextField from "@mui/material/TextField";

const Defenses = () => {
  return (
    <div className={styles.defensesContainer}>
      <h1>Defesas / Resistencias 🛡</h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="defInput"
          label="Defesa"
          defaultValue="Defesa"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>

      <div className={styles.gridTwoItems}>
        <TextField
          id="physicalResInput"
          label="Fisico"
          defaultValue="Fisico"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="ballisticResInput"
          label="Balistico"
          defaultValue="Balistico"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>

      <div className={styles.gridTwoItems}>
        <TextField
          id="bloodResInput"
          label="Sangue"
          defaultValue="Sangue"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="knowledgeResInput"
          label="Conhecimento"
          defaultValue="Conhecimento"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>

      <div className={styles.gridTwoItems}>
        <TextField
          id="deathResInput"
          label="Morte"
          defaultValue="Morte"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="energyResInput"
          label="Energia"
          defaultValue="Energia"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>

      <div className={styles.gridTwoItems}>
        <TextField
          id="fearResInput"
          label="Medo"
          defaultValue="Medo"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </div>
  );
};

export default Defenses;
