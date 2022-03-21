import React from "react";
import styles from "./Seans.module.css";

const Seans = () => {
  return (
    <div className={styles.seans}>
      <div className={styles.timing}>
        <button className={styles.today}>Сегодня</button>
        <button className={styles.tomorrow}>Завтра</button>
        <button className={styles.aftertomorrow}>Среда 23 мар</button>
      </div>
      <div className={styles.seansMap}>
        <div className={styles.seansList}>
          <div className={styles.fortimeButton}>
            <button className={styles.timeButton}>13:00</button>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>111</div>
            <div className={styles.genre}>
              <span>22+</span>
              <span>33</span>
            </div>
            <div className={styles.options}>
              <span>44</span>
              <span>•</span>
              <span>55</span>
              <span>•</span>
              <span>66</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seans;
