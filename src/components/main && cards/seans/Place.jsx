import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeanses } from "../../../redux/features/seans";
import style from "./Cinema.module.css";

const Place = ({ place, seans, state, setCount, count, block, setBlock }) => {
  const dispatch = useDispatch();
  const [classSelected, setClassSelected] = useState("");
  const [styleSelected, setStyleSelected] = useState(false);

  const places = useSelector((state)=> state.seans.places)


  const oneSeans = seans.find((seansOne) => seansOne._id === state);

  const onePlace = oneSeans.place.find((placeOne) => placeOne === place);

  useEffect(() => {
    dispatch(getSeanses());
  }, [dispatch]);

  const hundleSelectPlace = () => {
      console.log(places)
      if(places.length < 5){
            setBlock(false)
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
        
      }
      else{
          setBlock(true)
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
