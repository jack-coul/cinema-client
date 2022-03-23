import React, { useState } from 'react';
import style from "./Cinema.module.css";

const Place = ({place, setCount, count}) => {

    const [classSelected, setClassSelected] = useState('')
    const [styleSelected, setStyleSelected] = useState(false)

    const hundleSelectPlace = () => {
        if(!styleSelected) {
            setStyleSelected(true)
            setClassSelected(style.places)
            setCount(count-1)
        } else {
            setStyleSelected(false)
            setClassSelected(style.select)
            setCount(count+1)

        }
    }

    return (
        <>
              <div onClick={hundleSelectPlace} className={styleSelected ? style.select : style.places }>
                  <div className={style.number}>{place}</div>
              </div>
        </>
    );
};

export default Place;