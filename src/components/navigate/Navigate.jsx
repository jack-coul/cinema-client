import React from "react";
import Poster from "./Poster";
import styles from "./Navigate.module.css";
import Sessions from "./Sessions";
import News from "./News";
import Contacts from "./Contacts";
import Today from "./dateNavigation/Today";
import Tomorrow from "./dateNavigation/Tomorrow";
import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <div className={styles.navigate}>
      <div className={styles.navigateWrap}>
        {" "}
        <Poster />
        <Sessions />
        <News />
        <Contacts />
      </div>
      {/* <SingIn />
      <SingUp /> */}
      <Link to="/registr">Регистрация</Link>
      <Link to="/authorization">вход</Link>

      <div className={styles.navigateFromDates}>
        <div className={styles.navigateFromDatesWrap}>
          <Today />
          <Tomorrow />
        </div>
      </div>
    </div>
  );
};

export default Navigate;
