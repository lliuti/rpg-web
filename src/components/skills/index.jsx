import TextField from "@mui/material/TextField";
import SurfingIcon from "@mui/icons-material/Surfing";
import styles from "./styles.module.scss";

export const Skills = ({ details }) => {
  return (
    <div className={styles.skillsContainer}>
      <h1>
        Perícias <SurfingIcon sx={{ ml: 2 }} />
      </h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="atletistmoInput"
          label="Atletismo"
          value={details.atletismo ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="atualidadesInput"
          label="Atualidades"
          value={details.atualidades ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="cienciaInput"
          label="Ciencia"
          value={details.ciencia ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="diplomaciaInput"
          label="Diplomacia"
          value={details.diplomacia ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="enganacaoInput"
          label="Enganacao"
          value={details.enganacao ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="fortitudeInput"
          label="Fortitude"
          value={details.fortitude ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="furtividadeInput"
          label="Furtividade"
          value={details.furtividade ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="intimidacaoInput"
          label="Intimidacao"
          value={details.intimidacao ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="investigacaoInput"
          label="Investigacao"
          value={details.investigacao ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="lutaInput"
          label="Luta"
          value={details.luta ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="medicinaInput"
          label="Medicina"
          value={details.medicina ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="ocultismoInput"
          label="Ocultismo"
          value={details.ocultismo ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="percepcaoInput"
          label="Percepcao"
          value={details.percepcao ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="pilotagemInput"
          label="Pilotagem"
          value={details.pilotagem ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="pontariaInput"
          label="Pontaria"
          value={details.pontaria ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="prestidigitacaoInput"
          label="Prestidigitacao"
          value={details.prestidigitacao ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="profissaoInput"
          label="Profissao"
          value={details.profissao ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="reflexosInput"
          label="Reflexos"
          value={details.reflexos ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="religaoInput"
          label="Religiao"
          value={details.religiao ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="taticaInput"
          label="Tatica"
          value={details.tatica ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="tecnologiaInput"
          label="Tecnologia"
          value={details.tecnologia ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="vontadeInput"
          label="Vontade"
          value={details.vontade ?? ""}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
    </div>
  );
};
