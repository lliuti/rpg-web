import { useState } from "react";
import styles from "./styles.module.scss";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const Vitals = () => {
  const [lifeDialogOpen, setLifeDialogOpen] = useState(false);
  const [sanityDialogOpen, setSanityDialogOpen] = useState(false);
  const [effortDialogOpen, setEffortDialogOpen] = useState(false);
  const [diceDialogOpen, setDiceDialogOpen] = useState(false);

  const [diceAmount, setDiceAmount] = useState("");
  const [diceFaceAmount, setDiceFaceAmount] = useState("");

  const characterImage = "https://pbs.twimg.com/media/EYFiJSNWAAEFSi9.png";

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

  const handleDiceDialogOpen = () => {
    setDiceDialogOpen(true);
  };

  const handleDiceDialogClose = () => {
    setDiceDialogOpen(false);
  };

  const handleDiceAmountChange = (event) => {
    setDiceAmount(event.target.value);
  };

  const handleDiceFaceAmountChange = (event) => {
    setDiceFaceAmount(event.target.value);
  };

  return (
    <div className={styles.vitalsContainer}>
      <h1>Detalhes Vitais ❤</h1>
      <div className={styles.imageDiceRollContainer}>
        <img src={characterImage} alt="Character picture" />
        <Button
          variant="outlined"
          onClick={handleDiceDialogOpen}
          color="inherit"
          sx={{ mb: 2 }}
        >
          Rolar dados
        </Button>
        <Dialog
          open={diceDialogOpen}
          onClose={handleDiceDialogClose}
          aria-labelledby="diceDialogTitle"
          aria-describedby="diceDialogDescription"
        >
          <DialogTitle id="diceDialogTitle">{"Rolar dados"}</DialogTitle>
          <DialogContent>
            <DialogContentText
              id="diceDialogDescription"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              Rolar dados para testar qualidade de determinada acao.
            </DialogContentText>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "20px",
                mt: 3,
              }}
            >
              <FormControl>
                <InputLabel id="dice-amount-select-label">Qtde</InputLabel>
                <Select
                  labelId="dice-amount-select-label"
                  id="dice-amount-select"
                  value={diceAmount}
                  label="Qtde"
                  onChange={handleDiceAmountChange}
                >
                  <MenuItem value={"1"}>1</MenuItem>
                  <MenuItem value={"2"}>2</MenuItem>
                  <MenuItem value={"3"}>3</MenuItem>
                  <MenuItem value={"4"}>4</MenuItem>
                  <MenuItem value={"5"}>5</MenuItem>
                  <MenuItem value={"6"}>6</MenuItem>
                  <MenuItem value={"7"}>7</MenuItem>
                  <MenuItem value={"8"}>8</MenuItem>
                  <MenuItem value={"9"}>9</MenuItem>
                  <MenuItem value={"10"}>10</MenuItem>
                  <MenuItem value={"11"}>11</MenuItem>
                  <MenuItem value={"12"}>12</MenuItem>
                  <MenuItem value={"13"}>13</MenuItem>
                  <MenuItem value={"14"}>14</MenuItem>
                  <MenuItem value={"15"}>15</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="dice-face-select-label">Faces</InputLabel>
                <Select
                  labelId="dice-face-select-label"
                  id="dice-face-select"
                  value={diceFaceAmount}
                  label="Faces"
                  onChange={handleDiceFaceAmountChange}
                >
                  <MenuItem value={"D3"}>D3</MenuItem>
                  <MenuItem value={"D4"}>D4</MenuItem>
                  <MenuItem value={"D6"}>D6</MenuItem>
                  <MenuItem value={"D8"}>D8</MenuItem>
                  <MenuItem value={"D10"}>D10</MenuItem>
                  <MenuItem value={"D12"}>D12</MenuItem>
                  <MenuItem value={"D20"}>D20</MenuItem>
                  <MenuItem value={"D100"}>D100</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDiceDialogClose} color="inherit">
              Cancelar
            </Button>
            <Button autoFocus color="inherit" variant="outlined">
              Rolar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Button
        variant="outlined"
        onClick={handleLifeDialogOpen}
        color="error"
        sx={{ mb: 2 }}
      >
        100 / 100
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
              color="error"
              sx={{ my: 3, width: "100%" }}
            />
            <TextField
              id="maxLifeInput"
              label="Vida Máxima"
              color="error"
              sx={{ my: 3, width: "100%" }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLifeDialogClose} color="error">
            Cancelar
          </Button>
          <Button autoFocus color="error" variant="outlined">
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
        100 / 100
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
              color="primary"
              sx={{ my: 3, width: "100%" }}
            />
            <TextField
              id="maxSanityInput"
              label="Sanidade Máxima"
              color="primary"
              sx={{ my: 3, width: "100%" }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSanityDialogClose} color="primary">
            Cancelar
          </Button>
          <Button autoFocus color="primary" variant="outlined">
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
        100 / 100
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
              color="warning"
              sx={{ my: 3, width: "100%" }}
            />
            <TextField
              id="maxEffortInput"
              label="P.E Máxima"
              color="warning"
              sx={{ my: 3, width: "100%" }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEffortDialogClose} color="warning">
            Cancelar
          </Button>
          <Button autoFocus color="warning" variant="outlined">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Vitals;
