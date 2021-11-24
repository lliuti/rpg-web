import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import ArrowBack from "@mui/icons-material/ArrowBack";

import { api } from "../../services/api";

import Container from "@mui/material/Container";

export const CreateAttack = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [skill, setSkill] = useState("");
  const [range, setRange] = useState("");
  const [damage, setDamage] = useState("");
  const [damageType, setDamageType] = useState("");
  const [critical, setCritical] = useState("");
  const [criticalDamage, setCriticalDamage] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");

  const navigate = useNavigate();

  const handleTypeChange = (e) => setType(e.target.value);
  const handleSkillChange = (e) => setSkill(e.target.value);
  const handleRangeChange = (e) => setRange(e.target.value);
  const handleDamageTypeChange = (e) => setDamageType(e.target.value);

  const handleCreate = async () => {
    const response = await api.post("/attacks", {
      name,
      type,
      skill,
      range,
      damage,
      damageType,
      critical,
      criticalDamage,
      description,
      weight,
    });

    console.log(response.data);

    setName("");
    setType("");
    setSkill("");
    setRange("");
    setDamage("");
    setDamageType("");
    setCritical("");
    setCriticalDamage("");
    setDescription("");
    setWeight("");
  };

  return (
    <Container>
      <div className={styles.createAttackContainer}>
        <div className={styles.topArea}>
          <h1>Create Attack</h1>
        </div>
        <div className={styles.gridTwoItems}>
          <TextField
            id="nameInput"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormControl>
            <InputLabel id="type-select-label">Tipo</InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
              value={type}
              label="Tipo"
              onChange={handleTypeChange}
            >
              <MenuItem value={"Leve"}>Leve</MenuItem>
              <MenuItem value={"Uma mao"}>Uma mao</MenuItem>
              <MenuItem value={"Duas maos"}>Duas maos</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.gridTwoItems}>
          <FormControl>
            <InputLabel id="skill-select-label">Pericia</InputLabel>
            <Select
              labelId="skill-select-label"
              id="skill-select"
              value={skill}
              label="Pericia"
              onChange={handleSkillChange}
            >
              <MenuItem value={"Luta"}>Luta</MenuItem>
              <MenuItem value={"Pontaria"}>Pontaria</MenuItem>
              <MenuItem value={"Ocultismo"}>Ocultismo</MenuItem>
            </Select>
          </FormControl>
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
          <TextField
            id="damageInput"
            label="Dano"
            variant="outlined"
            value={damage}
            onChange={(e) => setDamage(e.target.value)}
          />
          <FormControl>
            <InputLabel id="damage-type-select-label">Tipo do Dano</InputLabel>
            <Select
              labelId="damage-type-select-label"
              id="damage-type-select"
              value={damageType}
              label="Tipo do Dano"
              onChange={handleDamageTypeChange}
            >
              <MenuItem value={"Fisico"}>Fisico</MenuItem>
              <MenuItem value={"Balistico"}>Balistico</MenuItem>
              <MenuItem value={"Sangue"}>Sangue</MenuItem>
              <MenuItem value={"Morte"}>Morte</MenuItem>
              <MenuItem value={"Energia"}>Energia</MenuItem>
              <MenuItem value={"Medo"}>Medo</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.gridTwoItems}>
          <TextField
            id="criticalInput"
            label="Critico"
            variant="outlined"
            value={critical}
            onChange={(e) => setCritical(e.target.value)}
          />
          <TextField
            id="criticalDamageInput"
            label="Dano Critico"
            variant="outlined"
            value={criticalDamage}
            onChange={(e) => setCriticalDamage(e.target.value)}
          />
        </div>
        <div className={styles.gridTwoItems}>
          <TextField
            id="weightInput"
            label="Volume"
            variant="outlined"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <TextField
            id="descriptionDamageInput"
            label="Descricao"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.gridTwoItems}>
          <Button
            variant="text"
            onClick={() => navigate("/dashboard")}
            color="inherit"
            startIcon={<ArrowBack />}
          >
            VOLTAR
          </Button>
          <Button variant="contained" onClick={handleCreate} color="primary">
            CRIAR
          </Button>
        </div>
      </div>
    </Container>
  );
};
