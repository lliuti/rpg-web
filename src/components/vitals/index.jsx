import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

import { api } from "../../services/api";
import { DiceRoll } from "../diceRoll/index";

import LoadingButton from "@mui/lab/LoadingButton";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import EmojiEmotions from "@mui/icons-material/EmojiEmotions";
import Favorite from "@mui/icons-material/Favorite";
import BatteryCharging50 from "@mui/icons-material/BatteryCharging50";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export const Vitals = ({ details }) => {
  const [lifeDialogOpen, setLifeDialogOpen] = useState(false);
  const [sanityDialogOpen, setSanityDialogOpen] = useState(false);
  const [effortDialogOpen, setEffortDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [lifeValueInput, setLifeValueInput] = useState(0);
  const [sanityValueInput, setSanityValueInput] = useState(0);
  const [effortValueInput, setEffortValueInput] = useState(0);

  const [currLife, setCurrLife] = useState("");
  const [maxLife, setMaxLife] = useState("");

  const [currSan, setCurrSan] = useState("");
  const [maxSan, setMaxSan] = useState("");

  const [currEff, setCurrEff] = useState("");
  const [maxEff, setMaxEff] = useState("");

  const [lifeSwitchChecked, setLifeSwitchChecked] = useState(false);
  const [sanitySwitchChecked, setSanitySwitchChecked] = useState(false);
  const [effortSwitchChecked, setEffortSwitchChecked] = useState(false);

  useEffect(() => {
    fetchCharacterVitals();
  }, [details]);

  const handleLifeDialogOpen = () => setLifeDialogOpen(true);
  const handleLifeDialogClose = () => setLifeDialogOpen(false);
  const handleSanityDialogOpen = () => setSanityDialogOpen(true);
  const handleSanityDialogClose = () => setSanityDialogOpen(false);
  const handleEffortDialogOpen = () => setEffortDialogOpen(true);
  const handleEffortDialogClose = () => setEffortDialogOpen(false);

  const fetchCharacterVitals = async () => {
    try {
      const response = await api.get(`/characters/${details.character_id}`);

      setCurrLife(response.data.curr_life);
      setMaxLife(response.data.max_life);

      setCurrSan(response.data.curr_san);
      setMaxSan(response.data.max_san);

      setCurrEff(response.data.curr_eff);
      setMaxEff(response.data.max_eff);
    } catch (err) {
      console.log(err);
    }
  };

  // CHANGE VALUES
  const handleChangeLife = async () => {
    setLoading(true);
    try {
      const response = await api.put(
        `/characters/${details.character_id}/life`,
        {
          currLife:
            lifeSwitchChecked === true
              ? parseInt(currLife) + parseInt(lifeValueInput)
              : parseInt(currLife) - parseInt(lifeValueInput),
          maxLife,
        }
      );

      setCurrLife(response.data.currVital);
      setMaxLife(response.data.maxVital);
      setLifeValueInput("0");
      setLifeSwitchChecked(false);
      setLoading(false);
      setLifeDialogOpen(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setLifeDialogOpen(false);
    }
  };

  const handleChangeSanity = async () => {
    setLoading(true);
    try {
      const response = await api.put(
        `/characters/${details.character_id}/sanity`,
        {
          currSan:
            sanitySwitchChecked === true
              ? parseInt(currSan) + parseInt(sanityValueInput)
              : parseInt(currSan) - parseInt(sanityValueInput),
          maxSan,
        }
      );

      setCurrSan(response.data.currVital);
      setMaxSan(response.data.maxVital);
      setSanityValueInput("0");
      setSanitySwitchChecked(false);
      setLoading(false);
      setSanityDialogOpen(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setSanityDialogOpen(false);
    }
  };

  const handleChangeEffort = async () => {
    setLoading(true);
    try {
      const response = await api.put(
        `/characters/${details.character_id}/effort`,
        {
          currEff:
            effortSwitchChecked === true
              ? parseInt(currEff) + parseInt(effortValueInput)
              : parseInt(currEff) - parseInt(effortValueInput),
          maxEff,
        }
      );

      setCurrEff(response.data.currVital);
      setMaxEff(response.data.maxVital);
      setEffortValueInput("0");
      setEffortSwitchChecked(false);
      setLoading(false);
      setEffortDialogOpen(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setEffortDialogOpen(false);
    }
  };

  return (
    <div className={styles.vitalsContainer}>
      <h1>
        Detalhes Vitais <Favorite sx={{ ml: 2 }} />
      </h1>
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
        endIcon={<Favorite />}
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
              value={currLife}
              onChange={(e) => setCurrLife(e.target.value)}
              color="error"
              sx={{ my: 3, width: "100%" }}
            />
            <TextField
              id="maxLifeInput"
              label="Vida Máxima"
              value={maxLife}
              onChange={(e) => setMaxLife(e.target.value)}
              color="error"
              sx={{ my: 3, width: "100%" }}
            />

            <FormGroup sx={{ alignItems: "center", justifyContent: "center" }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={lifeSwitchChecked}
                    onChange={(e) => setLifeSwitchChecked(event.target.checked)}
                    color="error"
                  />
                }
                label="Adicionar"
              />
            </FormGroup>

            <TextField
              id="lifeValueInput"
              label="Valor"
              value={lifeValueInput}
              onChange={(e) => setLifeValueInput(e.target.value)}
              color="error"
              sx={{ my: 0, width: "100%" }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLifeDialogClose} color="error" variant="text">
            Cancelar
          </Button>
          <LoadingButton
            loading={loading}
            onClick={handleChangeLife}
            autoFocus
            color="error"
            variant="outlined"
          >
            Salvar
          </LoadingButton>
        </DialogActions>
      </Dialog>

      <Button
        variant="outlined"
        onClick={handleSanityDialogOpen}
        color="primary"
        endIcon={<EmojiEmotions />}
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
              value={currSan}
              onChange={(e) => setCurrSan(e.target.value)}
              color="primary"
              sx={{ my: 3, width: "100%" }}
            />
            <TextField
              id="maxSanityInput"
              label="Sanidade Máxima"
              value={maxSan}
              onChange={(e) => setMaxSan(e.target.value)}
              color="primary"
              sx={{ my: 3, width: "100%" }}
            />

            <FormGroup sx={{ alignItems: "center", justifyContent: "center" }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={sanitySwitchChecked}
                    onChange={(e) =>
                      setSanitySwitchChecked(event.target.checked)
                    }
                    color="primary"
                  />
                }
                label="Adicionar"
              />
            </FormGroup>

            <TextField
              id="sanityValueInput"
              label="Valor"
              value={sanityValueInput}
              onChange={(e) => setSanityValueInput(e.target.value)}
              color="primary"
              sx={{ my: 0, width: "100%" }}
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
          <LoadingButton
            loading={loading}
            onClick={handleChangeSanity}
            autoFocus
            color="primary"
            variant="outlined"
          >
            Salvar
          </LoadingButton>
        </DialogActions>
      </Dialog>

      <Button
        variant="outlined"
        onClick={handleEffortDialogOpen}
        color="warning"
        endIcon={<BatteryCharging50 />}
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
              value={maxEff}
              onChange={(e) => setMaxEff(e.target.value)}
              color="warning"
              sx={{ my: 3, width: "100%" }}
            />

            <FormGroup sx={{ alignItems: "center", justifyContent: "center" }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={effortSwitchChecked}
                    onChange={(e) =>
                      setEffortSwitchChecked(event.target.checked)
                    }
                    color="warning"
                  />
                }
                label="Adicionar"
              />
            </FormGroup>

            <TextField
              id="effortValueInput"
              label="Valor"
              value={effortValueInput}
              onChange={(e) => setEffortValueInput(e.target.value)}
              color="warning"
              sx={{ my: 0, width: "100%" }}
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
          <LoadingButton
            loading={loading}
            onClick={handleChangeEffort}
            autoFocus
            color="warning"
            variant="outlined"
          >
            Salvar
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};
