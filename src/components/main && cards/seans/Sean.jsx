import React, { useState } from "react";
import styles from "./Seans.module.css";
import style from "./Cinema.module.css";
import img from "../../../images/28fea504eb8034a8c957405dd134e2e5.png";
import Place from "./Place";

const Sean = ({ time, hall, name, genre }) => {



 
 
    const placeArr = []
    for(let i = 0; i <35; i++){
         placeArr.push(i+1)
    }
    const [count, setCount]= useState(placeArr.length)

    const [openCinemaPlace, setOpenCinemaPlace] = useState(false);






    const hundleShowCinemaPlaces = () => {
      setOpenCinemaPlace(true);
    
    };
  
    const hundleCloseWindow = () => {
      setOpenCinemaPlace(false);
      setCount(placeArr.length)
    }
  return (
    <>
      {openCinemaPlace ? (
        <div className={styles.cinemaPlaseWrap}>
          <div onClick={hundleCloseWindow} className={style.closeButton}>
            x
          </div>
          <div className={styles.wrapWrap}>
            <div className={styles.cinemaInfoWrap}>
              <div className={styles.cinemaName}>Лунные приключения</div>
              <div className={styles.cinemaTime}>{time}</div>
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
                  <div className={style.placeLeft}>Осталось {count} мест</div>
                </div>
                <div className={style.display}>
                  <img src={img} alt="" />
                </div>


               <div className={style.wrapPlaces}>
                {placeArr.map((place)=>{
                  console.log(place)
                  return <Place place = {place} count={count} setCount={setCount}/>
                })
                }
                 
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
            <button className={styles.timeButton}>{time}</button>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div className={styles.genre}>
              <span>+6</span>
              <span>{genre}</span>
            </div>
            <div className={styles.options}>
              <span>2D</span>
              <span>•</span>
              <span>20$</span>
              <span>•</span>
              <span>{hall.status}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sean;
