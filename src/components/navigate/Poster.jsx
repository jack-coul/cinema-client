import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigate.module.css";

const Poster = () => {
  return (
    <Link to="/">
      <div className={styles.poster}>Афиша</div>
    </Link>
  );
};

export default Poster;
