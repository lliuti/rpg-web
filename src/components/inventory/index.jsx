import styles from "./styles.module.scss";
import TextField from "@mui/material/TextField";

export const Inventory = () => {
  return (
    <div className={styles.inventoryContainer}>
      <h1>Inventário 🎒</h1>
      <div className={styles.gridTwoItems}>
        <TextField id="itemInput" label="Item" />
        <TextField id="volumeInput" label="Volume" />
      </div>
    </div>
  );
};
