import styles from "./styles.module.scss";
import TextField from "@mui/material/TextField";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

export const Defenses = ({ details }) => {
  return (
    <div className={styles.defensesContainer}>
      <h1>
        Defesas / Resistencias <HealthAndSafetyIcon sx={{ ml: 2 }} />
      </h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="defInput"
          label="Defesa"
          value={details.defesa ?? ""}
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
          value={details.fisico ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="ballisticResInput"
          label="Balistico"
          value={details.balistico ?? ""}
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
          value={details.sangue ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />

        <TextField
          id="knowledgeResInput"
          label="Conhecimento"
          value={details.conhecimento ?? ""}
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
          value={details.morte ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="energyResInput"
          label="Energia"
          value={details.energia ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>

      <div className={styles.gridTwoItems}>
        {/* <TextField
          id="fearResInput"
          label="Medo"
          value={details.medo ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        /> */}
      </div>
    </div>
  );
};
