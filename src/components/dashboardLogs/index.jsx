import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export const DashboardLogs = ({ logsProp }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs([...logs, logsProp]);
    console.log(logsProp);
  }, [logsProp]);

  return (
    <div className={styles.dashboardLogsContainer}>
      {logs?.map((log, index) => {
        return (
          <div className={styles.log} key={`${index}-${log}`}>
            <p>{log}</p>
          </div>
        );
      })}
    </div>
  );
};
