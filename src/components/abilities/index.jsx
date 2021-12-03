import { useEffect, useState } from "react";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const Abilities = ({ details }) => {
  const [abilityId, setAbilityId] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [open, setOpen] = useState(false);
  const [abilityName, setAbilityName] = useState("");
  const [abilityDescription, setAbilityDescription] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpen = (ability) => {
    setAbilityId(ability.id);
    setAbilityName(ability.name);
    setAbilityDescription(ability.description);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchAbilities();
  }, [details]);

  const fetchAbilities = async () => {
    try {
      const response = await api.get(`/characters/${details}/abilities`);
      setAbilities(response.data);
    } catch (err) {
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
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
    <div className={styles.abilities}>
      <div className={styles.gridTitles}>
        <p>Nome</p>
        <p>Descricao</p>
      </div>
      <div className={styles.gridAbilities}>
        {abilities?.map(({ ability }) => {
          return (
            <div key={ability.id}>
              <div
                onClick={() => handleOpen(ability)}
                className={styles.gridAbility}
              >
                <p>{ability.name}</p>
                <p>{ability.description}</p>
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
                      <p>{abilityName}</p>
                    </div>
                    <div className={styles.gridRow}>
                      <p>Descricao</p>
                      <p>{abilityDescription}</p>
                    </div>
                  </div>
                  <div className={styles.buttonContainer}>
                    <Button
                      onClick={() => setOpen(false)}
                      color="error"
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
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        color="error"
        message="Não foi possível carregar as habilidades!"
        action={action}
      />
    </div>
  );
};
