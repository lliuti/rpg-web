import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Container from "@mui/material/Container";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { api } from "../../services/api";

export const Assign = () => {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [openRitual, setOpenRitual] = useState(false);
  const [openAttack, setOpenAttack] = useState(false);
  const [openAbility, setOpenAbility] = useState(false);

  const [ritualLoading, setRitualLoading] = useState(false);
  const [attackLoading, setAttackLoading] = useState(false);
  const [abilityLoading, setAbilityLoading] = useState(false);

  const [attackCharacter, setAttackCharacter] = useState("");
  const [attackCharacters, setAttackCharacters] = useState([]);
  const [ritualCharacter, setRitualCharacter] = useState("");
  const [ritualCharacters, setRitualCharacters] = useState([]);
  const [abilityCharacter, setAbilityCharacter] = useState("");
  const [abilityCharacters, setAbilityCharacters] = useState([]);

  const [attack, setAttack] = useState("");
  const [assignableAttacks, setAssignableAttacks] = useState([]);

  const [ritual, setRitual] = useState("");
  const [assignableRituals, setAssignableRituals] = useState([]);

  const [ability, setAbility] = useState("");
  const [assignableAbilities, setAssignableAbilities] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setOpenBackdrop(true);
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await api.get("/dashboard/characters");
      setAttackCharacters(response.data);
      setRitualCharacters(response.data);
      setAbilityCharacters(response.data);
      setOpenBackdrop(false);
    } catch (err) {
      console.log(err);
      setOpenBackdrop(false);
    }
  };

  const handleAttackCharacterChange = (e) => {
    setAttackCharacter(e.target.value);
    setAttack("");
    fetchAssignableAttacks(e.target.value);
  };

  const handleRitualCharacterChange = (e) => {
    setRitualCharacter(e.target.value);
    setRitual("");
    fetchAssignableRituals(e.target.value);
  };

  const handleAbilityCharacterChange = (e) => {
    setAbilityCharacter(e.target.value);
    setAbility("");
    fetchAssignableAbilities(e.target.value);
  };

  const fetchAssignableAttacks = async (id) => {
    try {
      const response = await api.get(`/characters/${id}/attacks/assignable`);
      setAssignableAttacks(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAssignableRituals = async (id) => {
    try {
      const response = await api.get(`/characters/${id}/rituals/assignable`);
      setAssignableRituals(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAssignableAbilities = async (id) => {
    try {
      const response = await api.get(`/characters/${id}/abilities/assignable`);
      setAssignableAbilities(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAttackChange = (e) => {
    setAttack(e.target.value);
  };

  const handleRitualChange = (e) => {
    setRitual(e.target.value);
  };

  const handleAbilityChange = (e) => {
    setAbility(e.target.value);
  };

  const handleAssignAttack = async () => {
    if (attackCharacter == "" || attack == "") {
      return;
    }

    setAttackLoading(true);

    try {
      await api.post(`/characters/${attackCharacter}/attacks/${attack}`);

      setAttackCharacter("");
      setAttack("");
      fetchAssignableAttacks();
      setAttackLoading(false);
    } catch (err) {
      setOpenAttack(true);
      setAttackLoading(false);
    }
  };

  const handleAssignRitual = async () => {
    if (ritualCharacter == "" || ritual == "") {
      return;
    }

    setRitualLoading(true);

    try {
      await api.post(`/characters/${ritualCharacter}/rituals/${ritual}`);

      setRitualCharacter("");
      setRitual("");
      fetchAssignableRituals();
      setRitualLoading(false);
    } catch (err) {
      setOpenRitual(true);
      setRitualLoading(false);
    }
  };

  const handleAssignAbility = async () => {
    if (abilityCharacter == "" || ability == "") {
      return;
    }

    setAbilityLoading(true);

    try {
      await api.post(`/characters/${abilityCharacter}/abilities/${ability}`);

      setAbilityCharacter("");
      setAbility("");
      fetchAssignableAbilities();
      setAbilityLoading(false);
    } catch (err) {
      setOpenAbility(true);
      setAbilityLoading(false);
    }
  };

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };

  const handleCloseAttack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAttack(false);
  };

  const actionAttack = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="error"
        onClick={handleCloseAttack}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const handleCloseRitual = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCloseAbility = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const actionRitual = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="error"
        onClick={handleCloseRitual}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const actionAbility = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="error"
        onClick={handleCloseAbility}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Container>
      <div className={styles.assignAttackContainer}>
        <div className={styles.topArea}>
          <Button
            variant="outlined"
            onClick={() => navigate("/dashboard")}
            color="inherit"
            startIcon={<ArrowBack />}
            sx={{ mb: 4 }}
          >
            VOLTAR
          </Button>
          <h1>Atribuir Ataque</h1>
        </div>
        <div className={styles.assignContainer}>
          <div className={styles.gridTwoItems}>
            <FormControl>
              <InputLabel id="character-select-label">Personagem</InputLabel>
              <Select
                labelId="character-select-label"
                id="character-select"
                value={attackCharacter}
                label="Personagem"
                onChange={handleAttackCharacterChange}
              >
                {attackCharacters?.map((character) => (
                  <MenuItem key={character.id} value={`${character.id}`}>
                    {character.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="attack-select-label">Ataque</InputLabel>
              <Select
                labelId="attack-select-label"
                id="attack-select"
                value={attack}
                label="Ataque"
                onChange={handleAttackChange}
              >
                {assignableAttacks?.map((attack) => (
                  <MenuItem key={attack.id} value={`${attack.id}`}>
                    {attack.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={styles.alignEnd}>
            <LoadingButton
              loading={attackLoading}
              onClick={handleAssignAttack}
              variant="outlined"
              sx={{ mt: 5 }}
            >
              ATRIBUIR
            </LoadingButton>
          </div>
        </div>
        <h1>Atribuir Ritual</h1>
        <div className={styles.assignContainer}>
          <div className={styles.gridTwoItems}>
            <FormControl>
              <InputLabel id="character-select-label">Personagem</InputLabel>
              <Select
                labelId="character-select-label"
                id="character-select"
                value={ritualCharacter}
                label="Personagem"
                onChange={handleRitualCharacterChange}
              >
                {ritualCharacters?.map((character) => (
                  <MenuItem key={character.id} value={`${character.id}`}>
                    {character.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="ritual-select-label">Ritual</InputLabel>
              <Select
                labelId="ritual-select-label"
                id="ritual-select"
                value={ritual}
                label="Ritual"
                onChange={handleRitualChange}
              >
                {assignableRituals?.map((ritual) => (
                  <MenuItem key={ritual.id} value={`${ritual.id}`}>
                    {ritual.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={styles.alignEnd}>
            <LoadingButton
              loading={ritualLoading}
              onClick={handleAssignRitual}
              variant="outlined"
              sx={{ mt: 5 }}
            >
              ATRIBUIR
            </LoadingButton>
          </div>
        </div>
        <h1>Atribuir Habilidade</h1>
        <div className={styles.assignContainer}>
          <div className={styles.gridTwoItems}>
            <FormControl>
              <InputLabel id="character-select-label">Personagem</InputLabel>
              <Select
                labelId="character-select-label"
                id="character-select"
                value={abilityCharacter}
                label="Personagem"
                onChange={handleAbilityCharacterChange}
              >
                {abilityCharacters?.map((character) => (
                  <MenuItem key={character.id} value={`${character.id}`}>
                    {character.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="ability-select-label">Habilidade</InputLabel>
              <Select
                labelId="ability-select-label"
                id="ability-select"
                value={ability}
                label="Habilidade"
                onChange={handleAbilityChange}
              >
                {assignableAbilities?.map((ability) => (
                  <MenuItem key={ability.id} value={`${ability.id}`}>
                    {ability.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={styles.alignEnd}>
            <LoadingButton
              loading={abilityLoading}
              onClick={handleAssignAbility}
              variant="outlined"
              sx={{ mt: 5 }}
            >
              ATRIBUIR
            </LoadingButton>
          </div>
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleCloseBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={openAttack}
        autoHideDuration={6000}
        onClose={handleCloseAttack}
        color="error"
        message="Não foi possível atribuir ataque!"
        action={actionAttack}
      />
      <Snackbar
        open={openRitual}
        autoHideDuration={6000}
        onClose={handleCloseRitual}
        color="error"
        message="Não foi possível atribuir ritual!"
        action={actionRitual}
      />
      <Snackbar
        open={openAbility}
        autoHideDuration={6000}
        onClose={handleCloseAbility}
        color="error"
        message="Não foi possível atribuir habilidade!"
        action={actionAbility}
      />
    </Container>
  );
};
