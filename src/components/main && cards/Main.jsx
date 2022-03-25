import React, { useEffect } from "react";
import NavigateBar from "../navigate/NavigateBar";
import Cards from "./Cards/Cards";
import styles from "./Main&&Cards.module.css";
import MainNews from "./news/MainNews";
import SoonContainer from "./soon/SoonContainer";
import { Route, Routes, Navigate } from "react-router-dom";
import Seans from "../main && cards/seans/Seans";
import NewsPage from "./news/NewsPage";
import SingIn from "../navigate/avthorization/SingIn";
import SingUp from "../navigate/avthorization/SingUp";
import ContactsM from "./contactsM/ContactsM";
import { useDispatch, useSelector } from "react-redux";
import MovieDescription from "./description/MovieDescription";
import { getAllFilms } from "../../redux/features/films";

const Main = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllFilms())
  },[dispatch])

  const token = useSelector((state) => state.user.token);

  console.log(token);
  if (token) {
    return (
      <div>
        <NavigateBar />

        <Routes>
          <Route
            path="/"
            element={
              <div className={styles.main}>
                <Cards />
                <MainNews />
                <SoonContainer />
              </div>
            }
          />
          <Route path="/seances" element={<Seans />} />
          <Route
            path="/newspage"
            element={
              <>
                <NewsPage />
                <div className={styles.main}>
                  <SoonContainer />
                </div>
              </>
            }
          />
          <Route
            path="/filmdiscription/:id"
            element={
              <>
                <MovieDescription/>
                <div className={styles.main}>
                  <SoonContainer />
                </div>
              </>
            }
          />
          <Route path="/signin" element={<Navigate to="/" replace />} />
          <Route path="/signup" element={<Navigate to="/" replace />} />

          <Route path="/contacts" element={<ContactsM />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <NavigateBar />

        <Routes>
          <Route
            path="/"
            element={
              <div className={styles.main}>
                <Cards />
                <MainNews />
                <SoonContainer />
              </div>
            }
          />
          <Route path="/seances" element={<Seans />} />
          <Route
            path="/newspage"
            element={
              <>
                <NewsPage />
                <div className={styles.main}>
                  <SoonContainer />
                </div>
              </>
            }
          />
          <Route path="/signin" element={<SingIn className="bg" />} />
          <Route path="/signup" element={<SingUp className="bg" />} />

          <Route path="/contacts" element={<ContactsM />} />
        </Routes>
      </div>
    );
  }
};

export default Main;
