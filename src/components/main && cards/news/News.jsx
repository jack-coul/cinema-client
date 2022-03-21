import React from "react";
import styles from "./News.module.css";

const News = () => {
  return (
    <div className={styles.newsCardWrap}>
      <div className={styles.newsImgWrap}>
        <img
          src="https://kinoplan24.ru/uploads/news/6381/article/5f9569203f00008930fad044/small.jpg?1603627298"
          alt=""
        />
      </div>
      <div className={styles.newsInfoWrap}>
        <div className={styles.newsDataInfo}>25 октября 2020 в 12:01</div>
        <div className={styles.newsTitleInfo}>Мы открываемся 29 октября!</div>
        <div className={styles.newsInfo}>29 октября «Дружба» открывает свои кинозалы! Знаем, вы это ждали не меньше нас.</div>
        <div className={styles.showAllNewsFromCard}><a href="http://localhost:3000/news">Читать далее...</a></div>
      </div>
    </div>
  );
};

export default News;
