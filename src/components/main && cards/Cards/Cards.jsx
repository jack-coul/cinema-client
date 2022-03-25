import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import styles from "./Cards.module.css";
import CardTomorrow from "./CardTomorrow";

const Cards = () => {
  const films = useSelector((state) => state.films.films);

  return (
    <div className={styles.cards}>
      {films.map((film) => {
        return <Card film={film} />;
      })}
    </div>
  );
};

export default Cards;
