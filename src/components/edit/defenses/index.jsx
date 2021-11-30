import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

import { api } from "../../../services/api";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const EditDefenses = ({ details }) => {
  const [medo, setMedo] = useState("");
  const [morte, setMorte] = useState("");
  const [fisico, setFisico] = useState("");
  const [balistico, setBalistico] = useState("");
  const [energia, setEnergia] = useState("");
  const [sangue, setSangue] = useState("");
  const [conhecimento, setConhecimento] = useState("");
  const [defesa, setDefesa] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

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
    setLoading(true);
    try {
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
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="error"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div className={styles.defensesContainer}>
      <h1>
        Defesas / Resistencias <HealthAndSafetyIcon sx={{ ml: 2 }} />
      </h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="defInput"
          label="Defesa"
          value={defesa ?? ""}
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
          value={fisico ?? ""}
          onChange={(e) => setFisico(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="ballisticResInput"
          label="Balistico"
          value={balistico ?? ""}
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
          value={sangue ?? ""}
          onChange={(e) => setSangue(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />

        <TextField
          id="knowledgeResInput"
          label="Conhecimento"
          value={conhecimento ?? ""}
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
          value={morte ?? ""}
          onChange={(e) => setMorte(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="energyResInput"
          label="Energia"
          value={energia ?? ""}
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
          value={medo ?? ""}
          onChange={(e) => setMedo(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <LoadingButton
          loading={loading}
          onClick={handleUpdateSheet}
          variant="outlined"
        >
          ATUALIZAR
        </LoadingButton>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        color="error"
        message="Não foi possível atualizar as Defesas!"
        action={action}
      />
    </div>
  );
};
