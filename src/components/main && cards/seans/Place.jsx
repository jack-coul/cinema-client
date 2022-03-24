import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "./Cinema.module.css";

const Place = ({place, setCount, count}) => {
    const dispatch = useDispatch()
    const [classSelected, setClassSelected] = useState('')
    const [styleSelected, setStyleSelected] = useState(false)
    
   
    const hundleSelectPlace = () => {
        if(!styleSelected) {
            setStyleSelected(true)
            setClassSelected(style.places)
            setCount(count-1)
            dispatch({type: "addPlace", payload: place})
                  
            
            
        } else {
            setStyleSelected(false)
            setClassSelected(style.select)
            setCount(count+1)
            dispatch({type: "deletePlace", payload: place})

           
            

        }
    }
    

    return (
        <>
              <div  onClick={hundleSelectPlace} className={styleSelected ? style.select : style.places }>
                  <div className={style.number}>{place}</div>
              </div>
        </>
    );
};

export default Place;