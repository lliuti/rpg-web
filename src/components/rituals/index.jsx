import { useEffect, useState } from "react";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const Rituals = ({ details }) => {
  const [rituals, setRituals] = useState([]);
  const [open, setOpen] = useState(false);
  const [ritualName, setRitualName] = useState("");
  const [ritualDescription, setRitualDescription] = useState("");
  const [ritualElement, setRitualElement] = useState("");
  const [ritualCircle, setRitualCircle] = useState("");
  const [ritualCost, setRitualCost] = useState("");
  const [ritualRange, setRitualRange] = useState("");
  const [ritualExecTime, setRitualExecTime] = useState("");
  const [ritualArea, setRitualArea] = useState("");
  const [ritualDuration, setRitualDuration] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpen = (ritual) => {
    setRitualName(ritual.name);
    setRitualDescription(ritual.description);
    setRitualElement(ritual.element);
    setRitualCircle(ritual.circle);
    setRitualCost(ritual.cost);
    setRitualRange(ritual.range);
    setRitualExecTime(ritual.execTime);
    setRitualArea(ritual.area);
    setRitualDuration(ritual.duration);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchRituals();
  }, [details]);

  const fetchRituals = async () => {
    try {
      const response = await api.get(`/characters/${details}/rituals`);
      setRituals(response.data);
    } catch (err) {
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const actionSnackbar = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="error"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div className={styles.rituals}>
      <div className={styles.gridTitles}>
        <p>Nome</p>
        <p>Descricao</p>
        <p>Elemento</p>
        <p>Circulo</p>
        <p>Custo</p>
        <p>Alcance</p>
        <p>Acao</p>
        <p>Area</p>
        <p>Duracao</p>
      </div>
      <div className={styles.gridRituals}>
        {rituals?.map(({ ritual }) => {
          return (
            <div key={ritual.id}>
              <div
                onClick={() => handleOpen(ritual)}
                className={styles.gridRitual}
              >
                <p>{ritual.name}</p>
                <p className={styles.ellipsis}>{ritual.description}</p>
                <p>{ritual.element}</p>
                <p>{ritual.circle}</p>
                <p>{ritual.cost}</p>
                <p>{ritual.range}</p>
                <p>{ritual.execTime}</p>
                <p>{ritual.area}</p>
                <p>{ritual.duration}</p>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className={styles.modalBox}>
                  <div className={styles.modalGrid}>
                    <div className={styles.gridRow}>
                      <p>Nome: </p>
                      <p>{ritualName}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Descricao: </p>
                      <p>{ritualDescription}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Elemento: </p>
                      <p>{ritualElement}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Circulo: </p>
                      <p>{ritualCircle}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Custo: </p>
                      <p>{ritualCost}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Distancia: </p>
                      <p>{ritualRange}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Acao: </p>
                      <p>{ritualExecTime}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Area: </p>
                      <p>{ritualArea}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Duracao: </p>
                      <p>{ritualDuration}</p>
                    </div>
                  </div>
                  <div className={styles.buttonContainer}>
                    <Button
                      onClick={() => setOpen(false)}
                      color="inherit"
                      variant="outlined"
                      sx={{
                        mt: 2,
                      }}
                    >
                      Fechar
                    </Button>
                  </div>
                </div>
              </Modal>
            </div>
          );
        })}
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        color="error"
        message="Não foi possível carregar os rituais!"
        action={actionSnackbar}
      />
    </div>
  );
};
