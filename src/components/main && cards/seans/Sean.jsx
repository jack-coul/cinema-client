import React from "react";
import styles from "./Seans.module.css";

const Sean = ({ dayTomorrow, monthTomorrow, yearTomorrow, getZero }) => {
  return (
    <>

      <div className={styles.seansMap}>
        <div className={styles.seansList}>
          <div className={styles.fortimeButton}>
            <button className={styles.timeButton}>13:00</button>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>Братья Медведи: Тайна трёх миров</div>
            <div className={styles.genre}>
              <span>+6</span>
              <span>АНИМАЦИЯ</span>
            </div>
            <div className={styles.options}>
              <span>2D</span>
              <span>•</span>
              <span>20$</span>
              <span>•</span>
              <span>Зал средний</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sean;
