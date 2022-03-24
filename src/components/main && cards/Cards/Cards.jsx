import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import styles from "./Cards.module.css";
import CardTomorrow from "./CardTomorrow";

const Cards = () => {
  const { films, loadingFilms } = useSelector((state) => state.films);

  return (
    <div className={styles.cards}>
      {/* {films.map((film) => {
        return <Card film={film} />;
      })} */}
      
      <Card />
      <Card />
      <CardTomorrow />
      <CardTomorrow />
      <CardTomorrow />
      <CardTomorrow />
    </div>
  );
};

export default Cards;
