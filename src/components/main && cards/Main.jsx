import React from "react";
import Navigate from "../navigate/Navigate";
import Cards from "./Cards/Cards";
import styles from "./Main&&Cards.module.css";
import MainNews from "./news/MainNews";
import SoonContainer from "./soon/SoonContainer";
import { Route, Routes } from "react-router-dom";
import Seans from "../main && cards/seans/Seans";
import NewsPage from "./news/NewsPage";
import SingIn from "../navigate/avthorization/SingIn";
import SingUp from "../navigate/avthorization/SingUp";

const Main = () => {
  return (
    <>
      <Navigate/>

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
        <Route path="/signin" element={<SingIn/>}/>
        <Route path="/signup" element={<SingUp/>}/>

      </Routes>
    </>
  );
};

export default Main;
