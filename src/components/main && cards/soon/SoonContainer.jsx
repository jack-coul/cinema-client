import React from "react";
import styles from "./Soon.module.css";
import SoonCard from "./SoonCard";

const SoonContainer = () => {
  return (
    <div className={styles.soonWrap}>
      <div className={styles.soonTitle}>
        <h1>Скоро в кино</h1>
      </div>
      <div className={styles.soonCardWrap}>
        <SoonCard />
        <SoonCard />
        <SoonCard />
        <SoonCard />
        <SoonCard />
        <SoonCard />
        <SoonCard />
        <SoonCard />
        <SoonCard />
        <SoonCard />
      </div>
    </div>
  );
};

export default SoonContainer;
