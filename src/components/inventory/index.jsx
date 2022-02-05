import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { api } from "../../services/api";

export const Inventory = ({ details }) => {
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const [currWeight, setCurrWeight] = useState(0);
  const [maxWeight, setMaxWeight] = useState(0);

  const [itemInput, setItemInput] = useState("");
  const [weightInput, setWeightInput] = useState(0);

  const [editItemInput, setEditItemInput] = useState("");
  const [editWeightInput, setEditWeightInput] = useState(0);

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

  const handleUpdateItem = async (item) => {
    const response = await api.put(
      `/characters/${details.character_id}/inventory/${item.id}`,
      {
        item: item.item,
        weight: parseFloat(item.weight),
      }
    );
    fetchInventory();
  };

  const handleEditItem = (value, index, item) => {
    const newItem = { ...item };
    newItem.item = value;

    const newList = itemList;
    newList[index] = newItem;

    setItemList([...newList]);
  };

  const handleEditWeight = (value, index, item) => {
    const newItem = { ...item };
    newItem.weight = value;

    const newList = itemList;
    newList[index] = newItem;

    setItemList([...newList]);
  };

  return (
    <div className={styles.inventoryContainer}>
      <h1>
        Inventário: {currWeight?.toFixed(1) ?? 0}/{maxWeight ?? 0}
      </h1>
      <div className={styles.gridThreeItems}>
        <TextField
          id="itemInput"
          label="Novo Item"
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
      {itemList?.map((item, index) => (
        <div id={item.id} key={item.id} className={styles.gridThreeItems}>
          <TextField
            id="itemInput"
            label="Item"
            value={item.item}
            onChange={(e) => handleEditItem(e.target.value, index, item)}
            onBlur={() => handleUpdateItem(item)}
          />
          <TextField
            id="volumeInput"
            type="number"
            value={item.weight}
            label="Peso"
            onChange={(e) => handleEditWeight(e.target.value, index, item)}
            onBlur={() => handleUpdateItem(item)}
          />
          <LoadingButton
            loading={loadingRemove}
            variant="outlined"
            color="error"
            onClick={() => handleRemoveItem(item.id)}
          >
            <DeleteForeverIcon />
          </LoadingButton>
          {/* <LoadingButton
            loading={loadingUpdate}
            variant="outlined"
            color="warning"
            onClick={() => handleUpdateItem(item)}
          >
            <EditIcon />
          </LoadingButton> */}
        </div>
      ))}
    </div>
  );
};
