import React, { useState } from "react";
import { Link } from "react-router-dom";
import Seans from "../seans/Seans";
import styles from "./Cards.module.css";

const Card = ({film}) => {
  const [seanesModal, setSeanesModal] = useState(false);

  const handleOpenSeanses = () => {
    setSeanesModal(true);
  };
  return (
    <Link to={`/filmdiscription/${film._id}`}>
    
    <div className={styles.card}>
      <div className={styles.backroundImgWrap}>
        <div className={styles.cardImg}>
          <img className={styles.cardImg} src={film.img} alt="" />
          <div className={styles.year}>16+</div>
        </div>
      </div>

      <div className={styles.filmTitle}>{film.name}</div>
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
