import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.formBox}>
        <h1>Login</h1>

        <div className={styles.gridTwoItems}>
          <TextField id="usernameInput" label="Username" variant="outlined" />
          <TextField
            id="usernamePassword"
            label="Password"
            variant="outlined"
            type="password"
          />
        </div>

        <div className={styles.gridTwoItems}>
          <Button variant="text" onClick={() => navigate("/register")}>
            CREATE ACCOUNT
          </Button>
          <Button variant="contained">LOGIN</Button>
        </div>
      </div>
    </Container>
  );
};
