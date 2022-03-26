import React, { useState } from "react";
import styles from "./Seans.module.css";
import style from "./Cinema.module.css";
import img from "../../../images/28fea504eb8034a8c957405dd134e2e5.png";
import Place from "./Place";
import { useDispatch, useSelector } from "react-redux";
import { addPlace, getSeans } from "../../../redux/features/seans";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReservedPlace from "./ReservedPlace";
import Modal from "@mui/material/Modal";

const Sean = ({ time, hall, name, genre, seanID, sean }) => {
  const [block, setBlock] = useState(false);
  const seans = useSelector((state) => state.seans.seans);
  const dispatch = useDispatch();
  const placeArr = [];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCount(placeArr.length);
    dispatch({ type: "clearPlaces" });
  };

  if (hall._id === sean.hall._id) {
    for (let i = 0; i < hall.placesCount; i++) {
      placeArr.push(i + 1);
    }
  }

  const token = useSelector((state) => state.user.token);
  const places = useSelector((state) => state.seans.places);
  const [count, setCount] = useState(placeArr.length);

  useEffect(() => {
    dispatch(getSeans(seanID));
  }, [dispatch, seanID]);

  const handleAddPlace = (id) => {
    if (token) {
      dispatch(addPlace(id));
      dispatch({ type: "clearPlaces" });
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.cinemaPlaseWrap}>
          <div onClick={handleClose} className={style.closeButton}>
            x
          </div>
          <div className={styles.wrapWrap}>
            <div className={styles.cinemaInfoWrap}>
              <div className={styles.cinemaName}>{name}</div>
              <div className={styles.ycinemaTime}>{time}</div>
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
                  <div className={style.placeLeft}>
                    Осталось {count - sean.place.length} мест
                  </div>
                </div>
                <div className={style.display}>
                  <img src={img} alt="" />
                </div>

                <div className={!block ? style.wrapPlaces : style.blockPlaces}>
                  {placeArr.map((place) => {
                    return (
                      <Place
                        place={place}
                        state={seanID}
                        seans={seans}
                        count={count}
                        setCount={setCount}
                        setBlock={setBlock}
                        block={block}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={style.wrapButtonAndCards}>
            <div className={style.reservePlaces}>
              {places.map((place) => {
                return <ReservedPlace setBlock={setBlock} place={place} />;
              })}
            </div>
            <Link
              onClick={() => handleAddPlace(seanID)}
              className={style.bueBillets}
              to={token ? "#" : "/signin"}
            >
              Купить
            </Link>
          </div>
        </div>
      </Modal>
      <div className={styles.seansMap} onClick={handleOpen}>
        <div className={styles.seansList}>
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
    </div>
  );
};

export default Sean;
