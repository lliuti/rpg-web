import TextField from "@mui/material/TextField";
import styles from "./styles.module.scss";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h1>Perícias</h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="atletistmoInput"
          label="Atletismo"
          defaultValue="Atletismo"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="atualidadesInput"
          label="Atualidades"
          defaultValue="Atualidades"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="cienciaInput"
          label="Ciencia"
          defaultValue="Ciencia"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="diplomaciaInput"
          label="Diplomacia"
          defaultValue="Diplomacia"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="enganacaoInput"
          label="Enganacao"
          defaultValue="Enganacao"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="fortitudeInput"
          label="Fortitude"
          defaultValue="Fortitude"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="furtividadeInput"
          label="Furtividade"
          defaultValue="Furtividade"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="intimidacaoInput"
          label="Intimidacao"
          defaultValue="Intimidacao"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="investigacaoInput"
          label="Investigacao"
          defaultValue="Investigacao"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="lutaInput"
          label="Luta"
          defaultValue="Luta"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="medicinaInput"
          label="Medicina"
          defaultValue="Medicina"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="ocultismoInput"
          label="Ocultismo"
          defaultValue="Ocultismo"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="percepcaoInput"
          label="Percepcao"
          defaultValue="Percepcao"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="pilotagemInput"
          label="Pilotagem"
          defaultValue="Pilotagem"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="pontariaInput"
          label="Pontaria"
          defaultValue="Pontaria"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="prestidigitacaoInput"
          label="Prestidigitacao"
          defaultValue="Prestidigitacao"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="profissaoInput"
          label="Profissao"
          defaultValue="Profissao"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="reflexosInput"
          label="Reflexos"
          defaultValue="Reflexos"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="religaoInput"
          label="Religiao"
          defaultValue="Religiao"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="taticaInput"
          label="Tatica"
          defaultValue="Tatica"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="tecnologiaInput"
          label="Tecnologia"
          defaultValue="Tecnologia"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="vontadeInput"
          label="Vontade"
          defaultValue="Vontade"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </div>
  );
};

export default Skills;
