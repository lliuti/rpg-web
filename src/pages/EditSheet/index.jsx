import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

import { EditCharacterDetails } from "../../components/edit/characterDetails/index";
import { EditAttributes } from "../../components/edit/attributes/index";
import { EditSkills } from "../../components/edit/skills/index";
import { EditDefenses } from "../../components/edit/defenses/index";
import { Vitals } from "../../components/vitals/index";
import { Inventory } from "../../components/inventory/index";
import { Attacks } from "../../components/attacks/index";
import { Rituals } from "../../components/rituals/index";

import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Container from "@mui/material/Container";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const EditSheet = () => {
  const [characterSheet, setCharacterSheet] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const { character_id } = useParams();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    fetchCharacter();
  }, [character_id]);

  const fetchCharacter = async () => {
    const response = await api.get(`/characters/${character_id}`);
    setCharacterSheet(response.data);
    document.title = `RPG - ${response.data.name}`;
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
            <EditCharacterDetails
              details={{
                name: characterSheet?.name,
                age: characterSheet?.age,
                occupation: characterSheet?.occupation,
                archetype: characterSheet?.archetype,
                character_id: character_id,
              }}
            />
            <EditAttributes
              details={{
                forca: characterSheet?.forca,
                intelecto: characterSheet?.intelecto,
                presenca: characterSheet?.presenca,
                agilidade: characterSheet?.agilidade,
                vigor: characterSheet?.vigor,
                character_id: character_id,
              }}
            />
            <EditSkills
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
                character_id: character_id,
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
                picture: characterSheet?.picture_url,
                character_id: character_id,
              }}
            />
            <EditDefenses
              details={{
                defesa: characterSheet?.defesa,
                fisico: characterSheet?.fisico_res,
                balistico: characterSheet?.balistico_res,
                sangue: characterSheet?.sangue_res,
                morte: characterSheet?.morte_res,
                medo: characterSheet?.medo_res,
                conhecimento: characterSheet?.conhecimento_res,
                energia: characterSheet?.energia_res,
                character_id: character_id,
              }}
            />
            {/* <Inventory /> */}
          </div>
        </div>

        <div className={styles.attacksRituals}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ mb: 5 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Ataques
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Agir ofensivamente com uma arma/luta
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Attacks details={character_id} />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{ mt: 5 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Rituais
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Conjurar rituais através do Outro Lado
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Rituals details={character_id} />
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Container>
  );
};