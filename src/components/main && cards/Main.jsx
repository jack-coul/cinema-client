import React from "react";
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
import { useSelector } from "react-redux";

const Main = () => {
  const token = useSelector((state) => state.user.token);
  if (!token) {
    return (
      <>
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
      </>
    );
  }
  return (
    <>
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
        <Route path="/signin" element={<Navigate to="/" />} />
        <Route path="/signup" element={<Navigate to="/" />} />

        <Route path="/contacts" element={<ContactsM />} />
      </Routes>
    </>
  );
};

export default Main;
