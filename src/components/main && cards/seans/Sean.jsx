import React from "react";
import styles from "./Seans.module.css";

const Sean = ({ time, hall, name, genre }) => {
  return (
    <>

      <div className={styles.seansMap}>
        <div className={styles.seansList}>
          <div className={styles.fortimeButton}>
            <button className={styles.timeButton}>{time}</button>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div className={styles.genre}>
              <span>+6</span>
              <span>{genre}</span>
            </div>
            <div className={styles.options}>
              <span>2D</span>
              <span>•</span>
              <span>20$</span>
              <span>•</span>
              <span>{hall}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sean;
