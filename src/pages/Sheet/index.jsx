import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
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
  const [characterSheet, setCharacterSheet] = useState([]);
  const navigate = useNavigate();
  const { character_id } = useParams();

  useEffect(() => {
    fetchCharacter();
  }, [character_id]);

  const fetchCharacter = async () => {
    const response = await api.get(`/characters/${character_id}`);
    setCharacterSheet(response.data);
    console.log(response.data);
  };

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
            <CharacterDetails
              details={{
                name: characterSheet?.name,
                age: characterSheet?.age,
                occupation: characterSheet?.occupation,
                archetype: characterSheet?.archetype,
              }}
            />
            <Attributes
              details={{
                forca: characterSheet?.forca,
                intelecto: characterSheet?.intelecto,
                presenca: characterSheet?.presenca,
                agilidade: characterSheet?.agilidade,
                vigor: characterSheet?.vigor,
              }}
            />
            <Skills
              details={{
                atletismo: characterSheet?.atletismo,
                atualidades: characterSheet?.atualidades,
                ciencia: characterSheet?.ciencia,
                diplomacia: characterSheet?.diplomacia,
                enganacao: characterSheet?.enganacao,
                fortitude: characterSheet?.fortitude,
                furtividade: characterSheet?.furtividade,
                intimidacao: characterSheet?.intimidacao,
                investigacao: characterSheet?.investigacao,
                luta: characterSheet?.luta,
                medicina: characterSheet?.medicina,
                ocultismo: characterSheet?.ocultismo,
                percepcao: characterSheet?.percepcao,
                pilotagem: characterSheet?.pilotagem,
                pontaria: characterSheet?.pontaria,
                prestidigitacao: characterSheet?.prestidigitacao,
                profissao: characterSheet?.profissao,
                reflexos: characterSheet?.reflexos,
                religiao: characterSheet?.religiao,
                tatica: characterSheet?.tatica,
                tecnologia: characterSheet?.tecnologia,
                vontade: characterSheet?.vontade,
              }}
            />
          </div>
          <div className={styles.rightGridContainer}>
            <Vitals
              details={{
                max_life: characterSheet?.max_life,
                curr_life: characterSheet?.curr_life,
                max_san: characterSheet?.max_san,
                curr_san: characterSheet?.curr_san,
                max_eff: characterSheet?.max_eff,
                curr_eff: characterSheet?.curr_eff,
              }}
            />
            <Defenses
              details={{
                defesa: characterSheet?.defesa,
                fisico: characterSheet?.fisico_res,
                balistico: characterSheet?.balistico_res,
                sangue: characterSheet?.sangue_res,
                morte: characterSheet?.morte_res,
                medo: characterSheet?.medo_res,
                conhecimento: characterSheet?.conhecimento_res,
                energia: characterSheet?.energia_res,
              }}
            />
            <Inventory />
          </div>
        </div>
      </div>
    </Container>
  );
};
