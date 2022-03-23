import React, { useState } from "react";
import styles from "./Seans.module.css";
import style from "./Cinema.module.css";
import img from "../../../images/28fea504eb8034a8c957405dd134e2e5.png"
import Place from "./Place";

const Sean = ({ dayTomorrow, monthTomorrow, yearTomorrow, getZero }) => {
  const [openCinemaPlace, setOpenCinemaPlace] = useState(false);

  const hundleShowCinemaPlaces = () => {
    setOpenCinemaPlace(true);
  };

  const hundleCloseWindow = () => {
    setOpenCinemaPlace(false);
  }

  return (
    <>
      {openCinemaPlace ? (
        <div className={styles.cinemaPlaseWrap}>
            <div onClick={hundleCloseWindow} className={style.closeButton}>x</div>
          <div className={styles.wrapWrap}>
            <div className={styles.cinemaInfoWrap}>
              <div className={styles.cinemaName}>Лунные приключения</div>
              <div className={styles.cinemaTime}>13:00</div>
            </div>
            <div className={styles.wrapCinemaPlases}>
              <div className={styles.wrapInfo}>
                <div className={style.priceContainer}>
                  <div className={style.priceWrap}>
                    <div className={style.greenBlock}></div>
                    <div className={style.priceAndPlace}>200 $</div>
                    <div className={style.greyBlock}></div>
                    <div className={style.priceAndPlace}>Занято</div>
                  </div>
                  <div className={style.placeLeft}>Осталось 70 мест</div>
                </div>
               <div className={style.display}>
                  <img src={img} alt="" />
               </div>

               <div className={style.wrapPlaces}>
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />           
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
                 <Place />
               </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={styles.seansMap}>
        <div onClick={hundleShowCinemaPlaces} className={styles.seansList}>
          <div className={styles.fortimeButton}>
            <button className={styles.timeButton}>13:00</button>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>Братья Медведи: Тайна трёх миров</div>
            <div className={styles.genre}>
              <span>+6</span>
              <span>АНИМАЦИЯ</span>
            </div>
            <div className={styles.options}>
              <span>2D</span>
              <span>•</span>
              <span>20$</span>
              <span>•</span>
              <span>Зал средний</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sean;
