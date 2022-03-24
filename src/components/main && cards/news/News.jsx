import React from "react";
import styles from "./News.module.css";

const News = ({ news }) => {
  console.log(news);
  return (
    <div className={styles.newsCardWrap}>
      <div className={styles.newsImgWrap}>
        <img src={news.img} alt="" />
      </div>
      <div className={styles.newsInfoWrap}>
        <div className={styles.newsDataInfo}>{news.date}</div>
        <div className={styles.newsTitleInfo}>{news.title}</div>
        <div className={styles.newsInfo}>{news.info}</div>
        <div className={styles.showAllNewsFromCard}>
          <a href="http://localhost:3000/news">Читать далее...</a>
        </div>
      </div>
    </div>
  );
};

export default News;
