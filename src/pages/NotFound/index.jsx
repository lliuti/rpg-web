import { useEffect } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "RPG - Page not Found.";
  }, []);

  return (
    <Container>
      <div className={styles.notFoundContainer}>
        <h1>Essa página não existe... :(</h1>
        <Button
          onClick={() => navigate("/rpg-web/")}
          variant="outlined"
          sx={{ mt: 5 }}
        >
          Voltar
        </Button>
      </div>
    </Container>
  );
};
