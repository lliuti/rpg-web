import { useEffect, useState } from "react";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

export const Attacks = ({ details }) => {
  const [attacks, setAttacks] = useState([]);

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
            <div key={attack.id} className={styles.gridAttack}>
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
          );
        })}
      </div>
    </div>
  );
};
