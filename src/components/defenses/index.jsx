import styles from "./styles.module.scss";
import TextField from "@mui/material/TextField";

export const Defenses = ({ details }) => {
  return (
    <div className={styles.defensesContainer}>
      <h1>Defesas / Resistencias 🛡</h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="defInput"
          label="Defesa"
          defaultValue={details.defesa}
          value={details.defesa || ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>

      <div className={styles.gridTwoItems}>
        <TextField
          id="physicalResInput"
          label="Fisico"
          defaultValue={details.fisico}
          value={details.fisico || ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="ballisticResInput"
          label="Balistico"
          defaultValue={details.balistico}
          value={details.balistico || ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>

      <div className={styles.gridTwoItems}>
        <TextField
          id="bloodResInput"
          label="Sangue"
          defaultValue={details.sangue}
          value={details.sangue || ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />

        <TextField
          id="knowledgeResInput"
          label="Conhecimento"
          defaultValue={details.conhecimento}
          value={details.conhecimento || ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>

      <div className={styles.gridTwoItems}>
        <TextField
          id="deathResInput"
          label="Morte"
          defaultValue={details.morte}
          value={details.morte || ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="energyResInput"
          label="Energia"
          defaultValue={details.energia}
          value={details.energia || ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>

      <div className={styles.gridTwoItems}>
        <TextField
          id="fearResInput"
          label="Medo"
          defaultValue={details.medo}
          value={details.medo || ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
    </div>
  );
};
