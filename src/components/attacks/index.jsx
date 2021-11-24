import styles from "./styles.module.scss";

export const Attacks = () => {
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
        <div className={styles.gridAttack}>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
        </div>
      </div>
    </div>
  );
};
