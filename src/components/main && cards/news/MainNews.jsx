import React from "react";
import styles from "./News.module.css";
import arrowRight from "../../../images/right-arrow.png";
import { Link } from "react-router-dom";

const MainNews = () => {
  return (
    <div className={styles.newsWrap}>
      <div className={styles.titleWrap}>
        <div className={styles.newsTitle}>
          <h1>Новости</h1>
        </div>
        <div className={styles.showAllNews}>
          <Link to="/newspage">показать все</Link>{" "}
          <img src={arrowRight} alt="" />
        </div>
      </div>
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
          <div className={styles.newsInfo}>
            29 октября «Дружба» открывает свои кинозалы! Знаем, вы это ждали не
            меньше нас.
          </div>
          <div className={styles.showAllNewsFromCard}>
            <a href="http://localhost:3000/news">Читать далее...</a>
          </div>
        </div>
      </div>
      <div className={styles.newsCardWrap}>
        <div className={styles.newsImgWrap}>
          <img
            src="https://kinoplan24.ru/uploads/news/6381/article/5e73355d3d211400015b4580/small.jpg?1584608606"
            alt=""
          />
        </div>
        <div className={styles.newsInfoWrap}>
          <div className={styles.newsDataInfo}>19 марта 2020 в 9:03</div>
          <div className={styles.newsTitleInfo}>Ограничения до 10 февраля</div>
          <div className={styles.newsInfo}>
            Уважаемые друзья! Согласно Постановления Губернатора СК от
            16.03.2020г. №101 «О введении на территории СК режима повышенной
            готовности»
          </div>
          <div className={styles.showAllNewsFromCard}>
            <a href="http://localhost:3000/news">Читать далее...</a>
          </div>
        </div>
      </div>
      <div className={styles.newsCardWrap}>
        <div className={styles.newsImgWrap}>
          <img
            src="https://kinoplan24.ru/uploads/news/6381/article/5e626488cffcf1000111dc67/small.jpg?1583506570"
            alt=""
          />
        </div>
        <div className={styles.newsInfoWrap}>
          <div className={styles.newsDataInfo}>6 марта 2020 в 14:56</div>
          <div className={styles.newsTitleInfo}>Проблемы связи!!!</div>
          <div className={styles.newsInfo}>Проблемы связи!!!</div>
          <div className={styles.showAllNewsFromCard}>
            <a href="http://localhost:3000/news">Читать далее...</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
