import { useEffect, useState } from "react";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const Rituals = ({ details }) => {
  const [rituals, setRituals] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchRituals();
  }, [details]);

  const fetchRituals = async () => {
    const response = await api.get(`/characters/${details}/rituals`);
    setRituals(response.data);
  };

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
              <div onClick={handleOpen} className={styles.gridRitual}>
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
                      <p>{ritual.name}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Descricao: </p>
                      <p>{ritual.description}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Elemento: </p>
                      <p>{ritual.element}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Circulo: </p>
                      <p>{ritual.circle}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Custo: </p>
                      <p>{ritual.cost}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Distancia: </p>
                      <p>{ritual.range}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Acao: </p>
                      <p>{ritual.execTime}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Area: </p>
                      <p>{ritual.area}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Duracao: </p>
                      <p>{ritual.duration}</p>
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
    </div>
  );
};
