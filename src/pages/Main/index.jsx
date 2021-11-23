import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Main = () => {
  const characterImage = "https://pbs.twimg.com/media/EYFiJSNWAAEFSi9.png";
  const navigate = useNavigate();

  return (
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
          <div
            onClick={() => navigate("/characters/xpto")}
            className={styles.characterBox}
          >
            <div className={styles.row}>
              <span>nome:</span>
              <h1>Elizabeth Webber</h1>
            </div>
            <img src={characterImage} alt="Character picture" />
            <div className={styles.row}>
              <span>ocupacao:</span>
              <h1>Investigadora Forense</h1>
            </div>
            <div className={styles.row}>
              <span>arquétipo:</span>
              <h1>Especialista</h1>
            </div>
            <div className={styles.row}>
              <span>exp:</span>
              <h1>50%</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
