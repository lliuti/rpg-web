import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { api } from "../../services/api";

export const Inventory = ({ details }) => {
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState(false);

  const [currWeight, setCurrWeight] = useState(0);
  const [maxWeight, setMaxWeight] = useState(0);

  const [itemInput, setItemInput] = useState("");
  const [weightInput, setWeightInput] = useState(0);

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    const response = await api.get(
      `/characters/${details.character_id}/inventory`
    );
    setCurrWeight(response.data.current_weight);
    setMaxWeight(response.data.max_weight);
    setItemList(response.data.list);
  };

  const handleAddItem = async () => {
    setLoadingAdd(true);
    try {
      await api.post(`/characters/${details.character_id}/inventory`, {
        item: itemInput,
        weight: parseFloat(weightInput),
      });
      setItemInput("");
      setWeightInput(0);
      fetchInventory();
    } catch (err) {
      console.log(err);
    }
    setLoadingAdd(false);
  };

  const handleRemoveItem = async (id) => {
    setLoadingRemove(true);
    try {
      await api.delete(`/characters/${details.character_id}/inventory/${id}`);
      fetchInventory();
    } catch (err) {
      console.log(err);
    }
    setLoadingRemove(false);
  };

  const handleWeightChange = (e) => {
    if (e < 0) {
      return;
    }
    setWeightInput(e);
  };

  return (
    <div className={styles.inventoryContainer}>
      <h1>
        Inventário: {currWeight.toFixed(1) ?? 0}/{maxWeight ?? 0}
      </h1>
      <div className={styles.gridThreeItems}>
        <TextField
          id="itemInput"
          label="Item"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <TextField
          id="volumeInput"
          type="number"
          value={weightInput}
          onChange={(e) => handleWeightChange(e.target.value)}
          label="Peso"
        />
        <LoadingButton
          loading={loadingAdd}
          variant="outlined"
          color="primary"
          onClick={handleAddItem}
        >
          <AddIcon />
        </LoadingButton>
      </div>
      {itemList?.map((item) => (
        <div key={item.id} className={styles.gridThreeItems}>
          <TextField
            id="itemInput"
            label="Item"
            value={item.item}
            InputProps={{
              readOnly: true,
              autoFocus: true,
            }}
          />
          <TextField
            id="volumeInput"
            type="number"
            value={item.weight}
            label="Peso"
            InputProps={{
              readOnly: true,
              autoFocus: true,
            }}
          />
          <LoadingButton
            loading={loadingRemove}
            variant="outlined"
            color="error"
            onClick={() => handleRemoveItem(item.id)}
          >
            <DeleteForeverIcon />
          </LoadingButton>
        </div>
      ))}
    </div>
  );
};
