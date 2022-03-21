import React from "react";
import Navigate from "../navigate/Navigate";
import Cards from "./Cards/Cards";
import styles from "./Main&&Cards.module.css";
import MainNews from "./news/MainNews";
import SoonContainer from "./soon/SoonContainer";
import { Route, Routes } from "react-router-dom";
import Seans from '../main && cards/seans/Seans'

const Main = () => {
  return (
    <>
      <Navigate />
      <div className={styles.main}>
        <Cards />
        <MainNews />
        <SoonContainer />
      </div>
      <Routes>
        <Route path="/seances" element={<Seans />}/>

      </Routes>
    </>
  );
};

export default Main;
