import styles from "./styles.module.scss";

import TextField from "@mui/material/TextField";

export const Attributes = () => {
  return (
    <div className={styles.attributesContainer}>
      <h1>Atributos 💪🏻</h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="strInput"
          label="Forca"
          defaultValue="Forca"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="intInput"
          label="Intelecto"
          defaultValue="Intelecto"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="preInput"
          label="Presenca"
          defaultValue="Presenca"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="dexInput"
          label="Agilidade"
          defaultValue="Agilidade"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="vigInput"
          label="Vigor"
          defaultValue="Vigor"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </div>
  );
};
