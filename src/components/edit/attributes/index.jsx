import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import { api } from "../../../services/api";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const EditAttributes = ({ details }) => {
  const [forca, setForca] = useState("");
  const [vigor, setVigor] = useState("");
  const [agilidade, setAgilidade] = useState("");
  const [presenca, setPresenca] = useState("");
  const [intelecto, setIntelecto] = useState("");

  const handleUpdateSheet = async () => {
    const response = await api.put(
      `/characters/${details.character_id}/attributes`,
      {
        for_attr: forca,
        vig_attr: vigor,
        agi_attr: agilidade,
        pre_attr: presenca,
        int_attr: intelecto,
      }
    );

    console.log(response.data);
  };

  useEffect(() => {
    setDefaultState();
  }, [details]);

  const setDefaultState = () => {
    setForca(details.forca);
    setVigor(details.vigor);
    setAgilidade(details.agilidade);
    setPresenca(details.presenca);
    setIntelecto(details.intelecto);
  };

  return (
    <div className={styles.attributesContainer}>
      <h1>Atributos 💪🏻</h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="strInput"
          label="Forca"
          defaultValue={details.forca}
          value={forca}
          onChange={(e) => setForca(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="intInput"
          label="Intelecto"
          defaultValue={details.intelecto}
          value={intelecto}
          onChange={(e) => setIntelecto(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="preInput"
          label="Presenca"
          defaultValue={details.presenca}
          value={presenca}
          onChange={(e) => setPresenca(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="dexInput"
          label="Agilidade"
          defaultValue={details.agilidade}
          value={agilidade}
          onChange={(e) => setAgilidade(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
      </div>
      <div className={styles.gridTwoItems}>
        <TextField
          id="vigInput"
          label="Vigor"
          defaultValue={details.vigor}
          value={vigor}
          onChange={(e) => setVigor(e.target.value)}
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
