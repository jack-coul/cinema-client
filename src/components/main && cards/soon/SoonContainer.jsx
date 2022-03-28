import React from "react";
import { useSelector } from "react-redux";
import styles from "./Soon.module.css";
import SoonCard from "./SoonCard";

const SoonContainer = () => {
  const films = useSelector((state) => state.films.films);
  return (
    <div className={styles.soonWrap}>
      <div className={styles.soonTitle}>
        <h1>Скоро в кино</h1>
      </div>
      <div className={styles.soonCardWrap}>
        {films.map((film, index) => {
          if (index < 7) {
            return <SoonCard film={film} />;
          }
        })}
      </div>
    </div>
  );
};

export default SoonContainer;
