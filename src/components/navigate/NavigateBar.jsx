import React from "react";
import Poster from "./Poster";
import styles from "./Navigate.module.css";
import Sessions from "./Sessions";
import News from "./News";
import Contacts from "./Contacts";
import { Link, Route, Routes } from "react-router-dom";
import DateNav from "./dateNavigation/DateNav";
import { useDispatch, useSelector } from "react-redux";

const NavigateBar = () => {
  const dispatch = useDispatch();
  const handleExit = () => {
    dispatch({ type: "Exit" });
  };
  const token = useSelector((state) => state.user.token);
  return (
    <div className={styles.navigate}>
      <div className={styles.wrapNavigate}>
        <div className={styles.navigateWrap}>
          {" "}
          <Poster />
          <Sessions />
          <News />
          <Contacts />
        </div>
        {!token ? (
          <div className={styles.singWrap}>
            <Link className={styles.singUp} to="/signup">
              Регистрация
            </Link>
            <Link to="/signin">вход</Link>
          </div>
        ) : (
          <div className={styles.singWrap}>
            <Link
              onClick={() => handleExit()}
              className={styles.singUp}
              to="/signin"
            >
              выход
            </Link>
          </div>
        )}
      </div>

      <div className={styles.navigateFromDates}>
        <div className={styles.navigateFromDatesWrap}>
          <Routes>
            <Route path="/" el ement={<DateNav />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default NavigateBar;
