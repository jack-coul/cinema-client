import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigate.module.css";

const Sessions = () => {
  return (
    <Link to="/seances">
      <div className={styles.sessions}>Сеансы</div>
    </Link>
  );
};

export default Sessions;
