import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReview } from "../../../redux/features/review";
import styles from "./Description.module.css";
import Review from "./Review";

const MovieDescription = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films.films);
  useEffect(() => {
    dispatch(getReview());
  }, [dispatch]);
  const reviews = useSelector((state) => state.revie.reviews);
  return (
    <>
      {films.map((film) => {
        if (film._id === params.id) {
          return (
            <div className={styles.description}>
              <div className={styles.header}>
                <span>Расписание сеансов</span>
                <span>»</span>
                <span>{film.name}</span>
              </div>
              <div className={styles.main}>
                <div className={styles.aside}>
                  <img src={film.img} alt="smert na nile" />
                  <div className={styles.rating}>
                    <div className={styles.ratingItem}>
                      <div className={styles.ratingTitle}>Кинопоиск</div>
                      <div className={styles.ratingCount}>6.62</div>
                    </div>
                    <div className={styles.ratingItem}>
                      <div className={styles.ratingTitle}>IMDB</div>
                      <div className={styles.ratingCount}>6.60</div>
                    </div>
                  </div>
                </div>
                <div className={styles.mainContent}>
                  <div className={styles.mainGenre}>
                    триллер, криминал, драма
                  </div>
                  <div className={styles.mainTitle}>{film.name}</div>
                  <div className={styles.mainCalendar}>
                    <button className={styles.mainToday}>Сегодня</button>
                    <button className={styles.mainButton}>Завтра</button>
                    <button className={styles.mainButton}>
                      Пятница, 25 мар.
                    </button>
                    <button className={styles.mainButton}>
                      Суббота, 26 мар.
                    </button>
                    <button className={styles.mainButton}>Выбрать день</button>
                  </div>
                  <div className={styles.seans}>
                    <div className={styles.seansContent}>
                      <div className={styles.seansBox}>
                        <div className={styles.seansTime}>21:15</div>
                        <div className={styles.seansType}>
                          <span>2D</span>
                          <span>400p</span>
                        </div>
                      </div>
                      <div className={styles.seansHall}>Зал комфорт</div>
                    </div>
                  </div>
                  <div className={styles.videoPlayer}>
                    <video className={styles.video} controls>
                      <source src={film.video} type="video/mp4" />
                    </video>
                  </div>
                  <div className={styles.aboutMovie}>
                    <div className={styles.aboutFirst}>
                      <div className={styles.aboutInfo}>Режиссёр</div>
                      <div className={styles.aboutInfo}>В ролях</div>
                      <div className={styles.aboutInfo}>Хронометраж фильма</div>
                      <div className={styles.aboutInfo}>Страна</div>
                      <div className={styles.aboutInfo}>Год</div>
                    </div>
                    <div className={styles.aboutSecond}>
                      <div className={styles.aboutInfo}>Кеннет Брана</div>
                      <div className={styles.aboutInfo}>
                        Галь Гадот, Арми Хаммер, Роуз Лесли, Летиция Райт,
                        Аннетт Бенинг, Кеннет Брана
                      </div>
                      <div className={styles.aboutInfo}>127 мин.</div>
                      <div className={styles.aboutInfo}>США</div>
                      <div className={styles.aboutInfo}>2020</div>
                    </div>
                  </div>
                  <div className={styles.footerDescription}>
                    <p>
                      Кеннет Брана снова перевоплощается в знаменитого детектива
                      Эркюля Пуаро, экранизируя очередной шедевр Агаты Кристи о
                      приключениях бельгийского сыщика. На этот раз
                      необходимость расследовать загадочное убийство, отвлекаясь
                      от собственного отдыха, настигает Пуаро на борту
                      роскошного круизного парохода, следующего вдоль по Нилу.
                    </p>
                  </div>
                  <div>
                    <div>Отзывы о фильме</div>
                    <div>
                      {reviews.map((review) => {
                        return <Review review={review} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default MovieDescription;
