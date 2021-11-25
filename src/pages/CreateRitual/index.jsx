import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

import { api } from "../../services/api";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import ArrowBack from "@mui/icons-material/ArrowBack";

export const CreateRitual = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [element, setElement] = useState("");
  const [circle, setCircle] = useState("");
  const [cost, setCost] = useState("");
  const [range, setRange] = useState("");
  const [exec, setExec] = useState("");
  const [area, setArea] = useState("");
  const [duration, setDuration] = useState("");

  const navigate = useNavigate();

  const handleElementChange = (e) => setElement(e.target.value);
  const handleCircleChange = (e) => setCircle(e.target.value);
  const handleRangeChange = (e) => setRange(e.target.value);
  const handleExecChange = (e) => setExec(e.target.value);
  const handleAreaChange = (e) => setArea(e.target.value);

  const handleCreate = async () => {
    if (name == "" || description == "" || element == "" || cost == "") return;
    const response = await api.post("/rituals", {
      name,
      description,
      element,
      circle,
      cost,
      range,
      execTime: exec,
      area,
      duration,
    });

    setName("");
    setDescription("");
    setElement("");
    setCost("");
    setCircle("");
    setRange("");
    setArea("");
    setDuration("");
    setExec("");
  };

  return (
    <Container>
      <div className={styles.createRitualContainer}>
        <div className={styles.topArea}>
          <Button
            variant="outlined"
            onClick={() => navigate("/rpg-web/dashboard")}
            color="inherit"
            startIcon={<ArrowBack />}
          >
            VOLTAR
          </Button>
          <h1>Criar Ritual</h1>
        </div>
        <div className={styles.gridTwoItems}>
          <TextField
            id="nameInput"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="descriptionInput"
            label="Descricao"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.gridTwoItems}>
          <FormControl>
            <InputLabel id="element-select-label">Elemento</InputLabel>
            <Select
              labelId="element-select-label"
              id="element-select"
              value={element}
              label="Elemento"
              onChange={handleElementChange}
            >
              <MenuItem value={"Sangue"}>Sangue</MenuItem>
              <MenuItem value={"Energia"}>Energia</MenuItem>
              <MenuItem value={"Morte"}>Morte</MenuItem>
              <MenuItem value={"Conhecimento"}>Conhecimento</MenuItem>
              <MenuItem value={"Medo"}>Medo</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="circle-select-label">Circulo</InputLabel>
            <Select
              labelId="circle-select-label"
              id="circle-select"
              value={circle}
              label="Circulo"
              onChange={handleCircleChange}
            >
              <MenuItem value={"1o"}>1o</MenuItem>
              <MenuItem value={"2o"}>2o</MenuItem>
              <MenuItem value={"3o"}>3o</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.gridTwoItems}>
          <TextField
            id="costInput"
            label="Custo"
            variant="outlined"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <FormControl>
            <InputLabel id="range-select-label">Alcance</InputLabel>
            <Select
              labelId="range-select-label"
              id="range-select"
              value={range}
              label="Alcance"
              onChange={handleRangeChange}
            >
              <MenuItem value={"-"}>-</MenuItem>
              <MenuItem value={"Pequeno"}>Pequeno</MenuItem>
              <MenuItem value={"Medio"}>Medio</MenuItem>
              <MenuItem value={"Longo"}>Longo</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.gridTwoItems}>
          <FormControl>
            <InputLabel id="exec-select-label">Acao</InputLabel>
            <Select
              labelId="exec-select-label"
              id="exec-select"
              value={exec}
              label="Acao"
              onChange={handleExecChange}
            >
              <MenuItem value={"-"}>-</MenuItem>
              <MenuItem value={"Livre"}>Livre</MenuItem>
              <MenuItem value={"Movimento"}>Movimento</MenuItem>
              <MenuItem value={"Padrao"}>Padrao</MenuItem>
              <MenuItem value={"Completa"}>Completa</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="area-select-label">Area</InputLabel>
            <Select
              labelId="area-select-label"
              id="area-select"
              value={area}
              label="Area"
              onChange={handleAreaChange}
            >
              <MenuItem value={"-"}>-</MenuItem>
              <MenuItem value={"Individuo"}>Individuo</MenuItem>
              <MenuItem value={"Pequena"}>Pequeno</MenuItem>
              <MenuItem value={"Media"}>Medio</MenuItem>
              <MenuItem value={"Grande"}>Longo</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.gridTwoItems}>
          <TextField
            id="durationInput"
            label="Duracao"
            variant="outlined"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <Button onClick={handleCreate} variant="contained">
            CRIAR
          </Button>
        </div>
      </div>
    </Container>
  );
};
