import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeanses } from "../../../redux/features/seans";
import style from "./Cinema.module.css";

const Place = ({ place, seans, state, setCount, count, block, setBlock }) => {
  const dispatch = useDispatch();
  const [classSelected, setClassSelected] = useState("");
  const [styleSelected, setStyleSelected] = useState(false);
  const [reserve, setReserve] = useState(false);

  const places = useSelector((state) => state.seans.places);

  const oneSeans = seans.find((seansOne) => seansOne._id === state);

  const onePlace = oneSeans.place.find((placeOne) => placeOne === place);

  useEffect(() => {
    dispatch(getSeanses());
  }, [dispatch]);

  const hundleSelectPlace = () => {
    if (places.length < 5) {
      setBlock(false);
      if (!styleSelected) {
        setStyleSelected(true);
        setClassSelected(style.places);
        setCount(count - 1);
        dispatch({ type: "addPlace", payload: place });
        setReserve(true);
      } else {
        setStyleSelected(false);
        setClassSelected(style.select);
        setCount(count + 1);
        dispatch({ type: "deletePlace", payload: place });
        setReserve(false);
      }
    } else {
      setBlock(true);
    }
  };

  return (
    <>
      <div
        type="btn"
        onClick={hundleSelectPlace}
        className={
          oneSeans.place && onePlace
            ? style.reserved
            : !reserve
            ? style.places
            : style.select
        }
        disabled={onePlace}
      >
        <div
          className={oneSeans.place && onePlace ? style.active : style.number}
        >
          {oneSeans.place && onePlace ? "x" : place}{" "}
        </div>
      </div>
    </>
  );
};

export default Place;
