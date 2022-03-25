import React, { useState } from "react";
import { Link } from "react-router-dom";
import Seans from "../seans/Seans";
import styles from "./Cards.module.css";

const Card = () => {
  const [seanesModal, setSeanesModal] = useState(false);

  const handleOpenSeanses = () => {
    setSeanesModal(true);
  };
  return (
    <Link to='/filmdiscription'>
    
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
      <div className={styles.seanses} onClick={handleOpenSeanses}>
        Сеансы на Сегодня
      </div>
      {seanesModal && <Seans />}
    </div>
    </Link>
  );
};

export default Card;
