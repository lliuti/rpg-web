import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styles from "./styles.module.scss";
import { useAuth } from "../../contexts/useAuth";
import { api } from "../../services/api";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Add from "@mui/icons-material/Add";

const socket = io("https://rpg-platform.herokuapp.com/");
// const socket = io("http://localhost:3333");

export const Dashboard = () => {
  const [characterList, setCharacterList] = useState([]);
  const [data, setData] = useState();

  const context = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "RPG - Dashboard";
    fetchCharacters();
  }, [data]);

  socket.on("vitalsChanged", (data) => {
    setData(data);
  });

  const fetchCharacters = async () => {
    const response = await api.get("/dashboard/characters");
    setCharacterList(response.data);
  };

  return (
    <Container>
      <div className={styles.dashboardContainer}>
        <div className={styles.topContainer}>
          <div className={styles.leftArea}>
            <Button
              variant="outlined"
              onClick={() => navigate("/")}
              color="inherit"
              startIcon={<ArrowBack />}
            >
              VOLTAR
            </Button>
            <h1>Dashboard</h1>
          </div>
          <div>
            <Button
              variant="outlined"
              onClick={() => navigate("/create-ritual")}
              color="primary"
              startIcon={<Add />}
            >
              CRIAR RITUAL
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/assign-ritual")}
              color="primary"
              sx={{ ml: 1 }}
            >
              ATRIBUIR RITUAL
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/create-attack")}
              color="success"
              startIcon={<Add />}
              sx={{ ml: 1 }}
            >
              CRIAR ATAQUE
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/assign-attack")}
              color="success"
              sx={{ ml: 1 }}
            >
              ATRIBUIR ATAQUE
            </Button>
          </div>
        </div>
        <div className={styles.grid}>
          {characterList?.map((character) => (
            <div
              key={character.id}
              onClick={() => navigate(`/characters/${character.id}/edit`)}
              className={styles.characterBox}
            >
              <img src={character?.picture_url} alt={character?.name} />
              <h1>{character?.name}</h1>
              <h3>{character?.archetype}</h3>
              <p className={styles.life}>
                {character?.sheet.curr_life} / {character?.sheet.max_life}
              </p>
              <p className={styles.san}>
                {character?.sheet.curr_san} / {character?.sheet.max_san}
              </p>
              <p className={styles.eff}>
                {character?.sheet.curr_eff} / {character?.sheet.max_eff}
              </p>
              <p>EXP: {character?.exp}</p>
              <p>DEF: {character?.sheet.defesa_def}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
