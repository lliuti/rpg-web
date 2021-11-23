import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.notFoundContainer}>
        <h1>Essa página não existe... :(</h1>
        <Button
          onClick={() => navigate("/login")}
          variant="outlined"
          sx={{ mt: 5 }}
        >
          Voltar para &gt; LOGIN
        </Button>
      </div>
    </Container>
  );
};
