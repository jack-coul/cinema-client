import React from 'react';
import styles from './Description.module.css';

const MovieDescription = (props) => {
    return (
        <div className={styles.description}>
            <div className={styles.header}>
                <span>Расписание сеансов</span>
                <span>»</span>
                <span>Смерть на Ниле</span>
            </div>
            <div className={styles.main}>
                <div className={styles.aside}>
                    <img src="https://s2ru1.kinoplan24.ru/563/5728a01246cd5f/11011.jpg?mode=fit&width=512&height=512" alt='smert na nile'/>
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
                    <div className={styles.mainGenre}>триллер, криминал, драма</div>
                    <div className={styles.mainTitle}>Смерть на Ниле</div>
                    <div className={styles.mainCalendar}>
                        <button className={styles.mainToday}>Сегодня</button>
                        <button className={styles.mainButton}>Завтра</button>
                        <button className={styles.mainButton}>Пятница, 25 мар.</button>
                        <button className={styles.mainButton}>Суббота, 26 мар.</button>
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
                            <source src="https://s2ru1.kinoplan24.ru/531/55d2dbfa2c50c4/trejler_16.mp4" type="video/mp4"/>
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
                            <div className={styles.aboutInfo}>Галь Гадот, Арми Хаммер, Роуз Лесли, Летиция Райт, Аннетт Бенинг, Кеннет Брана</div>
                            <div className={styles.aboutInfo}>127 мин.</div>
                            <div className={styles.aboutInfo}>США</div>
                            <div className={styles.aboutInfo}>2020</div>
                        </div>
                    </div>
                    <div className={styles.footerDescription}>
                        <p>Кеннет Брана снова перевоплощается в знаменитого 
                            детектива Эркюля Пуаро, экранизируя очередной 
                            шедевр Агаты Кристи о приключениях бельгийского 
                            сыщика. На этот раз необходимость расследовать 
                            загадочное убийство, отвлекаясь от собственного 
                            отдыха, настигает Пуаро на борту роскошного 
                            круизного парохода, следующего вдоль по Нилу.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDescription;