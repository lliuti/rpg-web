import styles from "./styles.module.scss";

import TextField from "@mui/material/TextField";

export const Attributes = ({ details }) => {
  return (
    <div className={styles.attributesContainer}>
      <h1>Atributos 💪🏻</h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="strInput"
          label="Forca"
          defaultValue={details.forca}
          value={details.forca || ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="intInput"
          label="Intelecto"
          defaultValue={details.intelecto}
          value={details.intelecto || ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="preInput"
          label="Presenca"
          defaultValue={details.presenca}
          value={details.presenca || ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="dexInput"
          label="Agilidade"
          defaultValue={details.agilidade}
          value={details.agilidade || ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="vigInput"
          label="Vigor"
          defaultValue={details.vigor}
          value={details.vigor || ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
    </div>
  );
};
