import styles from "./styles.module.scss";

import TextField from "@mui/material/TextField";
import CasinoIcon from "@mui/icons-material/Casino";

export const Attributes = ({ details }) => {
  return (
    <div className={styles.attributesContainer}>
      <h1>
        Atributos <CasinoIcon sx={{ ml: 2 }} />
      </h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="strInput"
          label="Forca"
          value={details.forca ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="intInput"
          label="Intelecto"
          value={details.intelecto ?? ""}
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
          value={details.presenca ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="dexInput"
          label="Agilidade"
          value={details.agilidade ?? ""}
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
          value={details.vigor ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
    </div>
  );
};
