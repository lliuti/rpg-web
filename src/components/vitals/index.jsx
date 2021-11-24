import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

import { api } from "../../services/api";
import { DiceRoll } from "../diceRoll/index";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export const Vitals = ({ details }) => {
  const [lifeDialogOpen, setLifeDialogOpen] = useState(false);
  const [sanityDialogOpen, setSanityDialogOpen] = useState(false);
  const [effortDialogOpen, setEffortDialogOpen] = useState(false);

  const [currLife, setCurrLife] = useState("");
  const [maxLife, setMaxLife] = useState("");

  const [currSan, setCurrSan] = useState("");
  const [maxSan, setMaxSan] = useState("");

  const [currEff, setCurrEff] = useState("");
  const [maxEff, setMaxEff] = useState("");

  useEffect(() => {
    setCurrLife(details?.curr_life);
    setMaxLife(details?.max_life);

    setCurrSan(details?.curr_san);
    setMaxSan(details?.max_san);

    setCurrEff(details?.curr_eff);
    setMaxEff(details?.max_eff);
  }, [details]);

  const handleLifeDialogOpen = () => {
    setLifeDialogOpen(true);
  };

  const handleLifeDialogClose = () => {
    setLifeDialogOpen(false);
  };

  const handleSanityDialogOpen = () => {
    setSanityDialogOpen(true);
  };

  const handleSanityDialogClose = () => {
    setSanityDialogOpen(false);
  };

  const handleEffortDialogOpen = () => {
    setEffortDialogOpen(true);
  };

  const handleEffortDialogClose = () => {
    setEffortDialogOpen(false);
  };

  // CHANGE VALUES
  const handleChangeLife = async () => {
    const response = await api.put(`/characters/${details.character_id}/life`, {
      currLife,
      maxLife,
    });

    setCurrLife(response.data.currLife);
    setMaxLife(response.data.maxLife);
    setLifeDialogOpen(false);
  };

  const handleChangeSanity = async () => {
    const response = await api.put(
      `/characters/${details.character_id}/sanity`,
      {
        currSan,
        maxSan,
      }
    );

    setCurrSan(response.data.currSan);
    setMaxSan(response.data.maxSan);
    setSanityDialogOpen(false);
  };

  const handleChangeEffort = async () => {
    const response = await api.put(
      `/characters/${details.character_id}/effort`,
      {
        currEff,
        maxEff,
      }
    );

    setCurrEff(response.data.currEff);
    setMaxEff(response.data.maxEff);
    setEffortDialogOpen(false);
  };

  return (
    <div className={styles.vitalsContainer}>
      <h1>Detalhes Vitais ❤</h1>
      <DiceRoll
        details={{
          picture: details.picture,
          character_id: details.character_id,
        }}
      />
      <Button
        variant="outlined"
        onClick={handleLifeDialogOpen}
        color="error"
        sx={{ mb: 2 }}
      >
        {currLife} / {maxLife}
      </Button>
      <Dialog
        open={lifeDialogOpen}
        onClose={handleLifeDialogClose}
        aria-labelledby="lifeDialogTitle"
        aria-describedby="lifeDialogDescription"
      >
        <DialogTitle id="lifeDialogTitle">{"Atualizar vida"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="lifeDialogDescription">
            Atualizar vida atual/máxima (as alteracoes refletem para o mestre).
          </DialogContentText>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "10px",
            }}
          >
            <TextField
              id="currentLifeInput"
              label="Vida Atual"
              value={currLife || ""}
              onChange={(e) => setCurrLife(e.target.value)}
              color="error"
              sx={{ my: 3, width: "100%" }}
            />
            <TextField
              id="maxLifeInput"
              label="Vida Máxima"
              value={maxLife || ""}
              onChange={(e) => setMaxLife(e.target.value)}
              color="error"
              sx={{ my: 3, width: "100%" }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLifeDialogClose} color="error" variant="text">
            Cancelar
          </Button>
          <Button
            onClick={handleChangeLife}
            autoFocus
            color="error"
            variant="outlined"
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        variant="outlined"
        onClick={handleSanityDialogOpen}
        color="primary"
        sx={{ mb: 2 }}
      >
        {currSan} / {maxSan}
      </Button>
      <Dialog
        open={sanityDialogOpen}
        onClose={handleSanityDialogClose}
        aria-labelledby="sanityDialogTitle"
        aria-describedby="sanityDialogDescription"
      >
        <DialogTitle id="sanityDialogTitle">{"Atualizar vida"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="sanityDialogDescription">
            Atualizar sanidade atual/máxima (as alteracoes refletem para o
            mestre).
          </DialogContentText>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "10px",
            }}
          >
            <TextField
              id="currentSanityInput"
              label="Sanidade Atual"
              value={currSan || ""}
              onChange={(e) => setCurrSan(e.target.value)}
              color="primary"
              sx={{ my: 3, width: "100%" }}
            />
            <TextField
              id="maxSanityInput"
              label="Sanidade Máxima"
              value={maxSan || ""}
              onChange={(e) => setMaxSan(e.target.value)}
              color="primary"
              sx={{ my: 3, width: "100%" }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSanityDialogClose}
            color="primary"
            variant="text"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleChangeSanity}
            autoFocus
            color="primary"
            variant="outlined"
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        variant="outlined"
        onClick={handleEffortDialogOpen}
        color="warning"
        sx={{ mb: 2 }}
      >
        {currEff} / {maxEff}
      </Button>
      <Dialog
        open={effortDialogOpen}
        onClose={handleEffortDialogClose}
        aria-labelledby="effortDialogTitle"
        aria-describedby="effortDialogDescription"
      >
        <DialogTitle id="effortDialogTitle">{"Atualizar P.E"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="effortDialogDescription">
            Atualizar P.E atual/máxima (as alteracoes refletem para o mestre).
          </DialogContentText>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "10px",
            }}
          >
            <TextField
              id="currentEffortInput"
              label="P.E Atual"
              value={currEff}
              onChange={(e) => setCurrEff(e.target.value)}
              color="warning"
              sx={{ my: 3, width: "100%" }}
            />
            <TextField
              id="maxEffortInput"
              label="P.E Máxima"
              value={maxEff || ""}
              onChange={(e) => setMaxEff(e.target.value)}
              color="warning"
              sx={{ my: 3, width: "100%" }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleEffortDialogClose}
            color="warning"
            variant="text"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleChangeEffort}
            autoFocus
            color="warning"
            variant="outlined"
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
