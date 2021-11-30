import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import { api } from "../../../services/api";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CasinoIcon from "@mui/icons-material/Casino";

export const EditAttributes = ({ details }) => {
  const [forca, setForca] = useState("");
  const [vigor, setVigor] = useState("");
  const [agilidade, setAgilidade] = useState("");
  const [presenca, setPresenca] = useState("");
  const [intelecto, setIntelecto] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

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

  const handleUpdateSheet = async () => {
    setLoading(true);
    try {
      await api.put(`/characters/${details.character_id}/attributes`, {
        for_attr: forca,
        vig_attr: vigor,
        agi_attr: agilidade,
        pre_attr: presenca,
        int_attr: intelecto,
      });
      setLoading(false);
    } catch (err) {
      setOpen(true);
      setLoading(false);
    }
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
      <h1>
        Atributos <CasinoIcon sx={{ ml: 2 }} />
      </h1>
      <div className={styles.gridTwoItems}>
        <TextField
          id="strInput"
          label="Forca"
          value={forca ?? ""}
          onChange={(e) => setForca(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="intInput"
          label="Intelecto"
          value={intelecto ?? ""}
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
          value={presenca ?? ""}
          onChange={(e) => setPresenca(e.target.value)}
          InputProps={{
            readOnly: false,
            autoFocus: true,
          }}
        />
        <TextField
          id="dexInput"
          label="Agilidade"
          value={agilidade ?? ""}
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
          value={vigor ?? ""}
          onChange={(e) => setVigor(e.target.value)}
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
        message="Não foi possível atualizar os atributos."
        action={action}
      />
    </div>
  );
};
