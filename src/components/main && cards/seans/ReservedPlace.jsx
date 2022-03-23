import React from "react";
import style from "./Cinema.module.css";

const ReservedPlace = () => {
  return (
    <div className={style.reservs}>
      <span>ряд 2, </span>
      <span>Место 1</span>
      <div className={style.wrapPrice}>
        <div className={style.greenBlock2}></div>
        <div className={style.price}>200$</div>
      </div>
    </div>
  );
};

export default ReservedPlace;
