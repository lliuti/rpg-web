import { useEffect, useState } from "react";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const Attacks = ({ details }) => {
  const [attacks, setAttacks] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchAttacks();
  }, [details]);

  const fetchAttacks = async () => {
    const response = await api.get(`/characters/${details}/attacks`);
    setAttacks(response.data);
  };

  return (
    <div className={styles.attacks}>
      <div className={styles.gridTitles}>
        <p>Nome</p>
        <p>Tipo</p>
        <p>Perícia</p>
        <p>Alcance</p>
        <p>Dano</p>
        <p>Tipo Dano</p>
        <p>Crítico</p>
        <p>Dano Crítico</p>
        <p>Peso</p>
        <p>Descricao</p>
      </div>
      <div className={styles.gridAttacks}>
        {attacks?.map(({ attack }) => {
          return (
            <div key={attack.id}>
              <div onClick={handleOpen} className={styles.gridAttack}>
                <p>{attack.name}</p>
                <p>{attack.type}</p>
                <p>{attack.skill}</p>
                <p>{attack.range}</p>
                <p>{attack.damage}</p>
                <p>{attack.damageType}</p>
                <p>{attack.critical}</p>
                <p>{attack.criticalDamage}</p>
                <p>{attack.weight}</p>
                <p>{attack.description}</p>
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
                      <p>{attack.name}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Tipo: </p>
                      <p>{attack.type}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Perícia</p>
                      <p>{attack.skill}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Alcance</p>
                      <p>{attack.range}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Dano</p>
                      <p>{attack.damage}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Tipo Dano</p>
                      <p>{attack.damageType}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Crítico</p>
                      <p>{attack.critical}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Dano Crítico</p>
                      <p>{attack.criticalDamage}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Peso</p>
                      <p>{attack.weight}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Descricao</p>
                      <p>{attack.description}</p>
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
