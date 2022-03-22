import React from "react";
import Sean from "./Sean";
import styles from "./Seans.module.css";

const Seans = () => {
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
      <Sean
        dayTomorrow={dayTomorrow}
        monthTomorrow={monthTomorrow}
        yearTomorrow={yearTomorrow}
        getZero={getZero}
      />
      <Sean
        dayTomorrow={dayTomorrow}
        monthTomorrow={monthTomorrow}
        yearTomorrow={yearTomorrow}
        getZero={getZero}
      />
      <Sean
        dayTomorrow={dayTomorrow}
        monthTomorrow={monthTomorrow}
        yearTomorrow={yearTomorrow}
        getZero={getZero}
      />
      <Sean
        dayTomorrow={dayTomorrow}
        monthTomorrow={monthTomorrow}
        yearTomorrow={yearTomorrow}
        getZero={getZero}
      />
      <Sean
        dayTomorrow={dayTomorrow}
        monthTomorrow={monthTomorrow}
        yearTomorrow={yearTomorrow}
        getZero={getZero}
      />
      <Sean
        dayTomorrow={dayTomorrow}
        monthTomorrow={monthTomorrow}
        yearTomorrow={yearTomorrow}
        getZero={getZero}
      />
      <Sean
        dayTomorrow={dayTomorrow}
        monthTomorrow={monthTomorrow}
        yearTomorrow={yearTomorrow}
        getZero={getZero}
      />
    </div>
  );
};

export default Seans;
