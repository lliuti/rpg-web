import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";

const Register = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className={styles.formBox}>
        <h1>Registrar</h1>
        <div className={styles.gridTwoItems}>
          <TextField id="nameInput" label="Nome" variant="outlined" />
          <TextField id="usernameInput" label="Usuario" variant="outlined" />
        </div>
        <div className={styles.gridTwoItems}>
          <TextField id="emailInput" label="Email" variant="outlined" />
          <TextField
            id="passwordInput"
            label="Senha"
            variant="outlined"
            type="password"
          />
        </div>
        <div className={styles.gridTwoItems}>
          <Button variant="text" onClick={() => navigate("/login")}>
            LOGIN
          </Button>
          <Button variant="contained">REGISTRAR</Button>
        </div>
      </div>
    </Container>
  );
};

export default Register;
