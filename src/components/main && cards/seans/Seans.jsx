import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeanses } from "../../../redux/features/seans";
import Sean from "./Sean";
import styles from "./Seans.module.css";

const Seans = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSeanses());
  }, [dispatch]);
  const seans = useSelector((state) => state.seans.seans);

  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  const dayTomorrow = tomorrow.getDate();
  const monthTomorrow = tomorrow.getMonth() + 1;
  const yearTomorrow = tomorrow.getFullYear();
  const getZero = (num) => {
    num = num < 10 ? "0" + num : num;
    return num;
  };
  return (
    <div className={styles.seans}>
      <div className={styles.timing}>
        <button className={styles.today}>Сегодня</button>
        <button className={styles.aftertomorrow}>
          Среда,
          {` ${getZero(dayTomorrow)} ${getZero(monthTomorrow)} ${yearTomorrow}`}
        </button>
      </div>
      {seans.map((sean) => {
        return (
          <Sean
            name={sean.film.name}
            key={sean._id}
            time={sean.time}
            hall={sean.hall}
            genre={sean.film.discription.genre}
          />
        );
      })}
    </div>
  );
};

export default Seans;
