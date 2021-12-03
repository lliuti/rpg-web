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
import { Attacks } from "../../components/attacks/index";
import { Rituals } from "../../components/rituals/index";
import { Abilities } from "../../components/abilities/index";

import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Container from "@mui/material/Container";

import BorderColorIcon from "@mui/icons-material/BorderColor";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";

import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

export const Sheet = () => {
  const [characterSheet, setCharacterSheet] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(false);

  const [annotationsDialogOpen, setAnnotationsDialogOpen] = useState(false);
  const [backgroundMultiline, setBackgroundMultiline] = useState("");
  const [annotationsMultiline, setAnnotationsMultiline] = useState("");

  const [annotationsLoading, setAnnotationsLoading] = useState(false);
  const [getNotesLoading, setGetNotesLoading] = useState(false);

  const navigate = useNavigate();
  const { character_id } = useParams();

  const handleOpenAnnotationsDialog = async () => {
    setGetNotesLoading(true);
    try {
      const response = await api.get(`/characters/${character_id}/notes`);
      if (response.data.length < 1) {
        setGetNotesLoading(false);
        setAnnotationsDialogOpen(true);
        return;
      }
      setBackgroundMultiline(response.data[0].background_text);
      setAnnotationsMultiline(response.data[0].note_text);
      setGetNotesLoading(false);
      setAnnotationsDialogOpen(true);
    } catch (err) {
      console.log(err);
      setGetNotesLoading(false);
    }
  };

  const handleCloseAnnotationsDialog = () => setAnnotationsDialogOpen(false);

  const handleCloseBackdrop = () => setOpenBackdrop(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    setOpenBackdrop(true);
    fetchCharacter();
  }, [character_id]);

  const fetchCharacter = async () => {
    try {
      const response = await api.get(`/characters/${character_id}`);
      setCharacterSheet(response.data);
      document.title = `RPG - ${response.data.name}`;
      setOpenBackdrop(false);
    } catch (err) {
      setOpenBackdrop(false);
      navigate("/");
    }
  };

  const handleSaveAnnotations = async () => {
    try {
      await api.put(`/characters/${character_id}/notes`, {
        background: backgroundMultiline,
        annotations: annotationsMultiline,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <div className={styles.sheetContainer}>
        <div className={styles.topContainer}>
          <div className={styles.leftArea}>
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
          <div className={styles.leftArea}>
            <LoadingButton
              loading={getNotesLoading}
              variant="outlined"
              color="inherit"
              startIcon={<BorderColorIcon />}
              loadingPosition="start"
              onClick={handleOpenAnnotationsDialog}
            >
              ANOTACOES
            </LoadingButton>
            <Dialog
              fullScreen
              open={annotationsDialogOpen}
              onClose={handleCloseAnnotationsDialog}
              sx={{ background: "#fff" }}
            >
              <AppBar sx={{ position: "relative" }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleCloseAnnotationsDialog}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    sx={{ ml: 2, flex: 1 }}
                    variant="h6"
                    component="div"
                  >
                    Anotacoes
                  </Typography>
                  <LoadingButton
                    loading={annotationsLoading}
                    color="inherit"
                    onClick={handleSaveAnnotations}
                  >
                    salvar
                  </LoadingButton>
                </Toolbar>
              </AppBar>
              <div className={styles.annotationsContainer}>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  sx={{ mb: 5 }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Anotacoes
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Lembretes, anotacoes, informacoes gerais.
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TextField
                      id="annotations-multiline-flexible"
                      label="Anotacoes"
                      fullWidth={true}
                      rows={15}
                      multiline
                      defaultValue={annotationsMultiline}
                      onBlur={(e) => setAnnotationsMultiline(e.target.value)}
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      História
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Contexto, explicacoes e história do personagem
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TextField
                      id="background-multiline-flexible"
                      label="História"
                      fullWidth={true}
                      rows={15}
                      multiline
                      defaultValue={backgroundMultiline}
                      onBlur={(e) => setBackgroundMultiline(e.target.value)}
                    />
                  </AccordionDetails>
                </Accordion>
              </div>
            </Dialog>
          </div>
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
                picture: characterSheet?.picture_url,
                character_id: character_id,
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
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{ mt: 5 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Habilidades
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Lista de habilidades
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Abilities details={character_id} />
            </AccordionDetails>
          </Accordion>
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
  );
};
