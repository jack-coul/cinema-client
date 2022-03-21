import React from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo-1.svg";
import instLogo from "../../images/logo-inst.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {" "}
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
        <div className={styles.adressWrap}>
          <div className={styles.cityName}>Ессентуки</div>
          <div className={styles.streetName}>ул. Анджиевского, 1</div>
        </div>
        <div className={styles.number}>+7(903)446-50-00</div>
      </div>

      <div className={styles.logoInst}>
        <img src={instLogo} alt="" />
      </div>
    </div>
  );
};

export default Header;
