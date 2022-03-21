import React from "react";
import Navigate from "../navigate/Navigate";
import Cards from "./Cards/Cards";
import styles from "./Main&&Cards.module.css";
import MainNews from "./news/MainNews";
import SoonContainer from "./soon/SoonContainer";

const Main = () => {
  return (
    <>
      <Navigate />
      <div className={styles.main}>
        <Cards />
        <MainNews />
        <SoonContainer />
      </div>
    </>
  );
};

export default Main;
