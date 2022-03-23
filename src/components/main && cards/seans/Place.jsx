import React, { useState } from 'react';
import style from "./Cinema.module.css";

const Place = () => {

    const [classSelected, setClassSelected] = useState('')
    const [styleSelected, setStyleSelected] = useState(false)

    const hundleSelectPlace = () => {
        if(!styleSelected) {
            setStyleSelected(true)
            setClassSelected(style.places)
        } else {
            setStyleSelected(false)
            setClassSelected(style.select)
        }
    }

    return (
        <>
              <div onClick={hundleSelectPlace} className={styleSelected ? style.select : style.places }>
                  <div className={style.number}>1</div>
              </div>
        </>
    );
};

export default Place;