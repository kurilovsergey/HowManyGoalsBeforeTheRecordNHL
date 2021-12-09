import { Flip } from "./flip";
import React, { useState, useEffect } from 'react';
import s from './Counter.module.css'

export const Counter = (props) => {
    const [num, setNum] = useState(props.difference);
    const [leng, setLeng] = useState(props.isEng);
    
    useEffect(() => {
      setNum(props.difference)},
      [props.difference]
    );

    useEffect(() => {
      setLeng(props.isEng)},
      [props.isEng]
    );

    console.log(leng)
    
 return (
  <div className={s.counter}>
  <h1>
    {props.isRuss ? "Ovechkin needs" : "Овечкину нужно забить"}
  </h1>
    <div className={s.flip}><Flip  value={num} /></div>
  <h1>
   {props.isRuss ? "goals to climb NHL all time high scoring record" 
   : "шайб до звание лучшего снайпера в истории НХЛ"}
   
  </h1>
  </div>
 )
}

