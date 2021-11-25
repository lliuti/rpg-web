import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { api } from "../../../services/api";

export const EditSkills = ({ details }) => {
  const [atletismo, setAtletismo] = useState("");
  const [atualidades, setAtualidades] = useState("");
  const [ciencia, setCiencia] = useState("");
  const [diplomacia, setDiplomacia] = useState("");
  const [enganacao, setEnganacao] = useState("");
  const [fortitude, setFortitude] = useState("");
  const [furtividade, setFurtividade] = useState("");
  const [intimidacao, setIntimidacao] = useState("");
  const [investigacao, setInvestigacao] = useState("");
  const [luta, setLuta] = useState("");
  const [medicina, setMedicina] = useState("");
  const [ocultismo, setOcultismo] = useState("");
  const [percepcao, setPercepcao] = useState("");
  const [pilotagem, setPilotagem] = useState("");
  const [pontaria, setPontaria] = useState("");
  const [prestidigitacao, setPrestidigitacao] = useState("");
  const [profissao, setProfissao] = useState("");
  const [reflexos, setReflexos] = useState("");
  const [religiao, setReligiao] = useState("");
  const [tatica, setTatica] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [vontade, setVontade] = useState("");

  useEffect(() => {
    setDefaultState();
  }, [details]);

  const setDefaultState = () => {
    setAtletismo(details.atletismo);
    setAtualidades(details.atualidades);
    setCiencia(details.ciencia);
    setDiplomacia(details.diplomacia);
    setEnganacao(details.enganacao);
    setFortitude(details.fortitude);
    setFurtividade(details.furtividade);
    setIntimidacao(details.intimidacao);
    setInvestigacao(details.investigacao);
    setLuta(details.luta);
    setMedicina(details.medicina);
    setOcultismo(details.ocultismo);
    setPercepcao(details.percepcao);
    setPilotagem(details.pilotagem);
    setPontaria(details.pontaria);
    setPrestidigitacao(details.prestidigitacao);
    setProfissao(details.profissao);
    setReflexos(details.reflexos);
    setReligiao(details.religiao);
    setTatica(details.tatica);
    setTecnologia(details.tecnologia);
    setVontade(details.vontade);
  };

  const handleUpdateSheet = async () => {
    const response = await api.put(
      `/characters/${details.character_id}/skills`,
      {
        atletismo_skill: atletismo,
        atualidades_skill: atualidades,
        ciencia_skill: ciencia,
        diplomacia_skill: diplomacia,
        enganacao_skill: enganacao,
        fortitude_skill: fortitude,
        furtividade_skill: furtividade,
        intimidacao_skill: intimidacao,
        investigacao_skill: investigacao,
        luta_skill: luta,
        medicina_skill: medicina,
        ocultismo_skill: ocultismo,
        percepcao_skill: percepcao,
        pilotagem_skill: pilotagem,
        pontaria_skill: pontaria,
        prestidigitacao_skill: prestidigitacao,
        profissao_skill: profissao,
        reflexos_skill: reflexos,
        religiao_skill: religiao,
        tatica_skill: tatica,
        tecnologia_skill: tecnologia,
        vontade_skill: vontade,
      }
    );

    console.log(response.data);
  };

  return (
    <div className={styles.skillsContainer}>
      <h1>Perícias 🗡</h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="atletistmoInput"
          label="Atletismo"
          defaultValue={details.atletismo}
          value={atletismo}
          onChange={(e) => setAtletismo(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="atualidadesInput"
          label="Atualidades"
          defaultValue={details.atualidades}
          value={atualidades}
          onChange={(e) => setAtualidades(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="cienciaInput"
          label="Ciencia"
          defaultValue={details.ciencia}
          value={ciencia}
          onChange={(e) => setCiencia(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="diplomaciaInput"
          label="Diplomacia"
          defaultValue={details.diplomacia}
          value={diplomacia}
          onChange={(e) => setDiplomacia(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="enganacaoInput"
          label="Enganacao"
          defaultValue={details.enganacao}
          value={enganacao}
          onChange={(e) => setEnganacao(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="fortitudeInput"
          label="Fortitude"
          defaultValue={details.fortitude}
          value={fortitude}
          onChange={(e) => setFortitude(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="furtividadeInput"
          label="Furtividade"
          defaultValue={details.furtividade}
          value={furtividade}
          onChange={(e) => setFurtividade(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="intimidacaoInput"
          label="Intimidacao"
          defaultValue={details.intimidacao}
          value={intimidacao}
          onChange={(e) => setIntimidacao(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="investigacaoInput"
          label="Investigacao"
          defaultValue={details.investigacao}
          value={investigacao}
          onChange={(e) => setInvestigacao(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="lutaInput"
          label="Luta"
          defaultValue={details.luta}
          value={luta}
          onChange={(e) => setLuta(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="medicinaInput"
          label="Medicina"
          defaultValue={details.medicina}
          value={medicina}
          onChange={(e) => setMedicina(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="ocultismoInput"
          label="Ocultismo"
          defaultValue={details.ocultismo}
          value={ocultismo}
          onChange={(e) => setOcultismo(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="percepcaoInput"
          label="Percepcao"
          defaultValue={details.percepcao}
          value={percepcao}
          onChange={(e) => setPercepcao(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="pilotagemInput"
          label="Pilotagem"
          defaultValue={details.pilotagem}
          value={pilotagem}
          onChange={(e) => setPilotagem(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="pontariaInput"
          label="Pontaria"
          defaultValue={details.pontaria}
          value={pontaria}
          onChange={(e) => setPontaria(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="prestidigitacaoInput"
          label="Prestidigitacao"
          defaultValue={details.prestidigitacao}
          value={prestidigitacao}
          onChange={(e) => setPrestidigitacao(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="profissaoInput"
          label="Profissao"
          defaultValue={details.profissao}
          value={profissao}
          onChange={(e) => setProfissao(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="reflexosInput"
          label="Reflexos"
          defaultValue={details.reflexos}
          value={reflexos}
          onChange={(e) => setReflexos(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="religaoInput"
          label="Religiao"
          defaultValue={details.religiao}
          value={religiao}
          onChange={(e) => setReligiao(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="taticaInput"
          label="Tatica"
          defaultValue={details.tatica}
          value={tatica}
          onChange={(e) => setTatica(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="tecnologiaInput"
          label="Tecnologia"
          defaultValue={details.tecnologia}
          value={tecnologia}
          onChange={(e) => setTecnologia(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="vontadeInput"
          label="Vontade"
          defaultValue={details.vontade}
          onChange={(e) => setVontade(e.target.value)}
          value={vontade}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <Button onClick={handleUpdateSheet} variant="outlined">
        ATUALIZAR
      </Button>
    </div>
  );
};
