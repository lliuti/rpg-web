import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styles from "./styles.module.scss";
import { useAuth } from "../../contexts/useAuth";
import { api } from "../../services/api";
import { DashboardLogs } from "../../components/dashboardLogs/index";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Add from "@mui/icons-material/Add";

import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const socket = io("https://rpg-platform.herokuapp.com/");
// const socket = io("http://localhost:3333");

const drawerWidth = 320;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const Dashboard = () => {
  const [characterList, setCharacterList] = useState([]);
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [logs, setLogs] = useState([]);

  const [openBackdrop, setOpenBackdrop] = useState(false);

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };

  const context = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setOpenBackdrop(true);
    document.title = "RPG - Dashboard";
    fetchCharacters();
  }, [data]);

  useEffect(() => {
    socket.on("diceRoll", ({ character, dices, faces, rolls, totalResult }) => {
      setLogs([
        ...logs,
        `${character} rolled ${dices}d${faces} (${rolls}) => ${totalResult}`,
      ]);
    });

    socket.on("vitalsChanged", (data) => {
      setData(data);
      setLogs([
        ...logs,
        `${data.character} updated ${data.vital} from ${data.previousCurrVital}/${data.previousMaxVital} to ${data.currVital}/${data.maxVital}`,
      ]);
    });
  }, [socket]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fetchCharacters = async () => {
    try {
      const response = await api.get("/dashboard/characters");
      setCharacterList(response.data);
      setOpenBackdrop(false);
    } catch (err) {
      setOpenBackdrop(false);
      navigate("/");
    }
  };

  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        padding: open == true ? "0px 350px 100px 30px" : "0px 150px 100px",
      }}
    >
      <div className={styles.dashboardContainer}>
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
            <h1>Dashboard</h1>
          </div>
          <div>
            <Button
              variant="outlined"
              onClick={() => navigate("/create-ritual")}
              color="primary"
              startIcon={<Add />}
            >
              RITUAL
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/create-attack")}
              color="success"
              startIcon={<Add />}
              sx={{ ml: 1 }}
            >
              ATAQUE
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/assign")}
              color="warning"
              sx={{ ml: 1 }}
            >
              ATRIBUIR
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ml: 1, ...(open && { display: "none" }) }}
            >
              DADOS
            </Button>
          </div>
        </div>
        <div className={styles.grid}>
          {characterList?.map((character) => (
            <div
              key={character.id}
              onClick={() => navigate(`/characters/${character.id}/edit`)}
              className={styles.characterBox}
            >
              <img src={character?.picture_url} alt={character?.name} />
              <h1>{character?.name}</h1>
              <h3>{character?.archetype}</h3>
              <p className={styles.life}>
                {character?.sheet?.curr_life} / {character?.sheet?.max_life}
              </p>
              <p className={styles.san}>
                {character?.sheet?.curr_san} / {character?.sheet?.max_san}
              </p>
              <p className={styles.eff}>
                {character?.sheet?.curr_eff} / {character?.sheet?.max_eff}
              </p>
              <p>EXP: {character?.exp}</p>
              <p>DEF: {character?.sheet?.defesa_def}</p>
            </div>
          ))}
        </div>
      </div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "60px",
          }}
        >
          <h1>Logs</h1>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <DashboardLogs logsProp={logs} />
      </Drawer>
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
