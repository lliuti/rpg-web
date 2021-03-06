import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";
import styles from "./styles.module.scss";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ExitToApp from "@mui/icons-material/ExitToApp";
import Add from "@mui/icons-material/Add";
import Dashboard from "@mui/icons-material/Dashboard";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { api } from "../../services/api";

export const Main = () => {
  const [characters, setCharacters] = useState([]);

  const [openBackdrop, setOpenBackdrop] = useState(false);

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };
  const navigate = useNavigate();
  const context = useAuth();

  useEffect(() => {
    setOpenBackdrop(true);
    fetchMyCharacters();
    document.title = "RPG - PLATFORM";
  }, []);

  const handleLogout = () => {
    context.Logout();
    navigate("/login");
  };

  const fetchMyCharacters = async () => {
    try {
      const response = await api.get("/characters");
      setCharacters(response.data);
      setOpenBackdrop(false);
    } catch (err) {
      setOpenBackdrop(false);
      navigate("/login");
    }
  };

  return (
    <>
      <Container>
        <div className={styles.charactersContainer}>
          <div className={styles.topRow}>
            <h1>Meus personagens</h1>
            <div>
              {context.admin ? (
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => navigate("/dashboard")}
                  sx={{ ml: 0 }}
                  startIcon={<Dashboard />}
                >
                  Dashboard
                </Button>
              ) : (
                <></>
              )}
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate("/create-character")}
                startIcon={<Add />}
                sx={{ ml: 1 }}
              >
                Criar Personagem
              </Button>

              <Button
                variant="outlined"
                color="error"
                sx={{ ml: 1 }}
                endIcon={<ExitToApp />}
                onClick={handleLogout}
              >
                Sair
              </Button>
            </div>
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
                  <span>arqu??tipo:</span>
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
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdrop}
          onClick={handleCloseBackdrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
    </>
  );
};
