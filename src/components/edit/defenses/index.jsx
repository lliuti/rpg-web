import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import { api } from "../../../services/api";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const EditDefenses = ({ details }) => {
  const [medo, setMedo] = useState("");
  const [morte, setMorte] = useState("");
  const [fisico, setFisico] = useState("");
  const [balistico, setBalistico] = useState("");
  const [energia, setEnergia] = useState("");
  const [sangue, setSangue] = useState("");
  const [conhecimento, setConhecimento] = useState("");
  const [defesa, setDefesa] = useState("");

  useEffect(() => {
    setDefaultState();
  }, [details]);

  const setDefaultState = () => {
    setMedo(details.medo);
    setMorte(details.morte);
    setEnergia(details.energia);
    setSangue(details.sangue);
    setConhecimento(details.conhecimento);
    setDefesa(details.defesa);
    setBalistico(details.balistico);
    setFisico(details.fisico);
  };

  const handleUpdateSheet = async () => {
    const response = await api.put(
      `/characters/${details.character_id}/defenses`,
      {
        medo_res: medo,
        morte_res: morte,
        fisico_res: fisico,
        balistico_res: balistico,
        energia_res: energia,
        sangue_res: sangue,
        conhecimento_res: conhecimento,
        defesa_def: defesa,
      }
    );

    console.log(response.data);
  };

  return (
    <div className={styles.defensesContainer}>
      <h1>Defesas / Resistencias 🛡</h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="defInput"
          label="Defesa"
          defaultValue={details.defesa}
          value={defesa}
          onChange={(e) => setDefesa(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>

      <div className={styles.gridTwoItems}>
        <TextField
          id="physicalResInput"
          label="Fisico"
          defaultValue={details.fisico}
          value={fisico}
          onChange={(e) => setFisico(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="ballisticResInput"
          label="Balistico"
          defaultValue={details.balistico}
          value={balistico}
          onChange={(e) => setBalistico(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>

      <div className={styles.gridTwoItems}>
        <TextField
          id="bloodResInput"
          label="Sangue"
          defaultValue={details.sangue}
          value={sangue}
          onChange={(e) => setSangue(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />

        <TextField
          id="knowledgeResInput"
          label="Conhecimento"
          defaultValue={details.conhecimento}
          value={conhecimento}
          onChange={(e) => setConhecimento(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>

      <div className={styles.gridTwoItems}>
        <TextField
          id="deathResInput"
          label="Morte"
          defaultValue={details.morte}
          value={morte}
          onChange={(e) => setMorte(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="energyResInput"
          label="Energia"
          defaultValue={details.energia}
          value={energia}
          onChange={(e) => setEnergia(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>

      <div className={styles.gridTwoItems}>
        <TextField
          id="fearResInput"
          label="Medo"
          defaultValue={details.medo}
          value={medo}
          onChange={(e) => setMedo(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <Button onClick={handleUpdateSheet} variant="outlined">
          ATUALIZAR
        </Button>
      </div>
    </div>
  );
};
