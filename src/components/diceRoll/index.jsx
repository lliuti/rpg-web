import { useState } from "react";

import { api } from "../../services/api";

import styles from "./styles.module.scss";

import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export const DiceRoll = ({ details }) => {
  const [diceDialogOpen, setDiceDialogOpen] = useState(false);
  const [diceAmount, setDiceAmount] = useState("");
  const [diceFaceAmount, setDiceFaceAmount] = useState("");
  const [diceResultDialogOpen, setDiceResultDialogOpen] = useState(false);
  const [diceRollResult, setDiceRollResult] = useState(0);
  const [diceRolls, setDiceRolls] = useState([]);

  const handleDiceResultDialogClose = () => {
    setDiceResultDialogOpen(false);
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

  const handleRollDice = async () => {
    const response = await api.post(
      `/characters/${details.character_id}/dice`,
      {
        diceAmount,
        diceFaceAmount,
      }
    );

    setDiceRollResult(response.data.diceResult);
    setDiceRolls(response.data.diceRolls);
    setDiceDialogOpen(false);
    setDiceResultDialogOpen(true);
  };

  return (
    <div className={styles.imageDiceRollContainer}>
      <img src={details.picture} alt="Character picture" />
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
          <Button
            onClick={handleRollDice}
            autoFocus
            color="inherit"
            variant="outlined"
          >
            Rolar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={diceResultDialogOpen}
        onClose={handleDiceResultDialogClose}
        aria-labelledby="diceResultDialogTitle"
        aria-describedby="diceResultDialogDescription"
      >
        <DialogTitle id="diceResultDialogTitle">
          {"Resultado dados"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="diceResultDialogDescription"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            Resultado da rolagem de dados. <br />
            &nbsp; <br />
            Rolagens: {diceRolls.map((roll) => `${roll} `)} <br />
            Soma rolagens: {diceRollResult}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDiceResultDialogClose}
            autoFocus
            color="inherit"
            variant="outlined"
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
