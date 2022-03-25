import React from "react";
import Poster from "./Poster";
import styles from "./Navigate.module.css";
import Sessions from "./Sessions";
import News from "./News";
import Contacts from "./Contacts";

const NavigateBar = () => {
  return (
    <div className={styles.navigate}>
      <div className={styles.wrapNavigate}>
        <div className={styles.navigateWrap}>
          {" "}
          <Poster />
          <Sessions />
          <News />
          <Contacts />
        </div>
      </div>

      <div className={styles.navigateFromDates}>
        <div className={styles.navigateFromDatesWrap}></div>
      </div>
    </div>
  );
};

export default NavigateBar;
