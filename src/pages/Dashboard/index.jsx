import { useEffect } from "react";
import styles from "./styles.module.scss";
import { useAuth } from "../../contexts/useAuth";
import { api } from "../../services/api";
import Container from "@mui/material/Container";

export const Dashboard = () => {
  const context = useAuth();

  useEffect(() => {
    document.title = "RPG - Dashboard";
  }, []);

  return (
    <Container>
      <div className={styles.dashboardContainer}>
        <h1>Dashboard</h1>
      </div>
    </Container>
  );
};
