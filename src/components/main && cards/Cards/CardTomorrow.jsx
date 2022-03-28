import React from "react";
import styles from "./Cards.module.css";

const CardTomorrow = () => {
  return (
    <div className={styles.card}>
      <div className={styles.backroundImgWrap}>
        <div className={styles.cardImg}>
          <div className={styles.year}>16+</div>
        </div>
      </div>

      <div className={styles.filmTitle}>Смерть на ниле</div>
      <div className={styles.genresWrap}>
        <div className={styles.genres}>триллер</div>
        <div className={styles.genres}>криминал</div>
        <div className={styles.genres}>драма</div>
      </div>
      <div className={styles.seanses}>Сеансы на Завтра</div>
    </div>
  );
};

export default CardTomorrow;
