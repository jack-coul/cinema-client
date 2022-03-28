import React from "react";
import { useDispatch } from "react-redux";
import style from "./Cinema.module.css";

const ReservedPlace = ({ place, setBlock , setCount, count}) => {
  const dispatch = useDispatch();
  const hundleDeleteReserve = () => {
    dispatch({ type: "deletePlace", payload: place });
    setBlock(false);
    setCount(count + 1);

  };
  return (
    <div className={style.reservs}>
      <span
        onClick={() => hundleDeleteReserve()}
        className={style.deleteReserve}
      >
        x
      </span>
      <span>ряд 2, </span>
      <span>Место {place}</span>
      <div className={style.wrapPrice}>
        <div className={style.greenBlock2}></div>
        <div className={style.price}>200$</div>
      </div>
    </div>
  );
};

export default ReservedPlace;
