import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSeanses } from "../../../redux/features/seans";
import style from "./Cinema.module.css";

const Place = ({ place, seans, state, setCount, count }) => {
  const dispatch = useDispatch();
  const [classSelected, setClassSelected] = useState("");
  const [styleSelected, setStyleSelected] = useState(false);

  const oneSeans = seans.find((seansOne) => seansOne._id === state);

  const onePlace = oneSeans.place.find((placeOne) => placeOne === place);

  useEffect(() => {
    dispatch(getSeanses());
  }, [dispatch]);

  const hundleSelectPlace = () => {
    if (!styleSelected) {
      setStyleSelected(true);
      setClassSelected(style.places);
      setCount(count - 1);
      dispatch({ type: "addPlace", payload: place });
    } else {
      setStyleSelected(false);
      setClassSelected(style.select);
      setCount(count + 1);
      dispatch({ type: "deletePlace", payload: place });
    }
  };

  return (
    <>
      <div
        onClick={hundleSelectPlace}
        className={oneSeans.place && onePlace ? style.select : style.places}
      >
        <div className={style.number}>{place}</div>
      </div>
    </>
  );
};

export default Place;
