import React from "react";
import News from "./News";
import styles from "./News.module.css";
import arrowRight from "../../../images/right-arrow.png";
import NewsPage from "./NewsPage";

const MainNews = () => {
  return (
    <div className={styles.newsWrap}>
      <div className={styles.titleWrap}>
        <div className={styles.newsTitle}>
          <h1>Новости</h1>
        </div>
        <div className={styles.showAllNews}>
          показать все <img src={arrowRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainNews;
