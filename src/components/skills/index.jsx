import TextField from "@mui/material/TextField";
import styles from "./styles.module.scss";

export const Skills = ({ details }) => {
  return (
    <div className={styles.skillsContainer}>
      <h1>Perícias 🗡</h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="atletistmoInput"
          label="Atletismo"
          defaultValue={details.atletismo}
          value={details.atletismo}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="atualidadesInput"
          label="Atualidades"
          defaultValue={details.atualidades}
          value={details.atualidades}
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
          defaultValue={details.ciencia}
          value={details.ciencia}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="diplomaciaInput"
          label="Diplomacia"
          defaultValue={details.diplomacia}
          value={details.diplomacia}
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
          defaultValue={details.enganacao}
          value={details.enganacao}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="fortitudeInput"
          label="Fortitude"
          defaultValue={details.fortitude}
          value={details.fortitude}
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
          defaultValue={details.furtividade}
          value={details.furtividade}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="intimidacaoInput"
          label="Intimidacao"
          defaultValue={details.intimidacao}
          value={details.intimidacao}
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
          defaultValue={details.investigacao}
          value={details.investigacao}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="lutaInput"
          label="Luta"
          defaultValue={details.luta}
          value={details.luta}
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
          defaultValue={details.medicina}
          value={details.medicina}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="ocultismoInput"
          label="Ocultismo"
          defaultValue={details.ocultismo}
          value={details.ocultismo}
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
          defaultValue={details.percepcao}
          value={details.percepcao}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="pilotagemInput"
          label="Pilotagem"
          defaultValue={details.pilotagem}
          value={details.pilotagem}
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
          defaultValue={details.pontaria}
          value={details.pontaria}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="prestidigitacaoInput"
          label="Prestidigitacao"
          defaultValue={details.prestidigitacao}
          value={details.prestidigitacao}
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
          defaultValue={details.profissao}
          value={details.profissao}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="reflexosInput"
          label="Reflexos"
          defaultValue={details.reflexos}
          value={details.reflexos}
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
          defaultValue={details.religiao}
          value={details.religiao}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="taticaInput"
          label="Tatica"
          defaultValue={details.tatica}
          value={details.tatica}
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
          defaultValue={details.tecnologia}
          value={details.tecnologia}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
        <TextField
          id="vontadeInput"
          label="Vontade"
          defaultValue={details.vontade}
          value={details.vontade}
          InputProps={{
            readOnly: true,
            autoFocus: true,
          }}
        />
      </div>
    </div>
  );
};
