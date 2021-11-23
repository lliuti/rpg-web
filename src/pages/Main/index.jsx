import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";
import styles from "./styles.module.scss";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ExitToApp from "@mui/icons-material/ExitToApp";
import { api } from "../../services/api";

export const Main = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchMyCharacters();
  }, []);

  const characterImage = "https://pbs.twimg.com/media/EYFiJSNWAAEFSi9.png";
  const navigate = useNavigate();
  const context = useAuth();

  const handleLogout = () => {
    context.Logout();
    navigate("/login");
  };

  const fetchMyCharacters = () => {
    setTimeout(async () => {
      const response = await api.get("/characters");
      setCharacters(response.data);
    }, 150);
  };

  return (
    <>
      <Container>
        <div className={styles.charactersContainer}>
          <div className={styles.topRow}>
            <h1>Meus personagens</h1>
            <Button
              variant="outlined"
              onClick={() => navigate("/create-character")}
            >
              Criar Personagem
            </Button>
          </div>
          <div className={styles.charactersGrid}>
            {characters?.map((character) => (
              <div
                onClick={() => navigate(`/characters/${character.id}`)}
                className={styles.characterBox}
                key={character.id}
              >
                <div className={styles.row}>
                  <span>nome:</span>
                  <h1>{character.name}</h1>
                </div>
                <img src={character.picture_url} alt="Character picture" />
                <div className={styles.row}>
                  <span>ocupacao:</span>
                  <h1>{character.occupation}</h1>
                </div>
                <div className={styles.row}>
                  <span>arquétipo:</span>
                  <h1>{character.archetype}</h1>
                </div>
                <div className={styles.row}>
                  <span>exp:</span>
                  <h1>{character.exp}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Button
        sx={{ p: 5, position: "fixed", bottom: 20, right: "24px" }}
        endIcon={<ExitToApp />}
        onClick={handleLogout}
      >
        Sair
      </Button>
    </>
  );
};
