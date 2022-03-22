import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigate.module.css";

const News = () => {
  return (
    <Link to="/newspage">
      <div className={styles.news}>Новости</div>
    </Link>
  );
};

export default News;
