import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigate.module.css";
const Contacts = () => {
  return (
    <Link to="/contacts">
      <div className={styles.contacts}>Контакты</div>
    </Link>
  );
};

export default Contacts;
