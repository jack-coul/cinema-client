import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../../redux/features/news";
import Card from "../Cards/Card";
import News from "./News";
import styles from "./News.module.css";

const NewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  const news = useSelector(state => state.news.news)

  return (
    <div className={styles.news}>
      <div className={styles.newsTitles}>
        <h2 className={styles.newsTitle}>Новости</h2>
        <h2 className={styles.populateFilmTitle}>Сегодня в кино</h2>
      </div>
      <div className={styles.newsMain}>
        <div className={styles.newsContent}>
          <div>
            {news.map((news) => {
              return (
                   <News news={news} />
              )
           
            })}
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
