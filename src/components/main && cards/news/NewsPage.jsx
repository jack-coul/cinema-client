import React from "react";
import Card from "../Cards/Card";
import News from "./News";
import styles from "./News.module.css";

const NewsPage = () => {
  return (
    <div className={styles.news}>
      <div className={styles.newsTitles}>
        <h2 className={styles.newsTitle}>Новости</h2>
        <h2 className={styles.populateFilmTitle}>Сегодня в кино</h2>
      </div>
      <div className={styles.newsMain}>
        <div className={styles.newsContent}>
          <div>
            <News />
            <News />
            <News />
            <News />
            <News />
            <News />
            <News />
          </div>
          <div>
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
