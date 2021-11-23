import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

import { CharacterDetails } from "../../components/characterDetails/index";
import { Attributes } from "../../components/attributes/index";
import { Skills } from "../../components/skills/index";
import { Vitals } from "../../components/vitals/index";
import { Defenses } from "../../components/defenses/index";
import { Inventory } from "../../components/inventory/index";

import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Container from "@mui/material/Container";

export const Sheet = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.sheetContainer}>
        <div className={styles.topContainer}>
          <Button
            variant="outlined"
            onClick={() => navigate("/")}
            color="inherit"
            startIcon={<ArrowBack />}
          >
            VOLTAR
          </Button>
          <h1>Ficha de Personagem</h1>
        </div>
        <div className={styles.grid}>
          <div className={styles.leftGridContainer}>
            <CharacterDetails />
            <Attributes />
            <Skills />
          </div>
          <div className={styles.rightGridContainer}>
            <Vitals />
            <Defenses />
            <Inventory />
          </div>
        </div>
      </div>
    </Container>
  );
};
