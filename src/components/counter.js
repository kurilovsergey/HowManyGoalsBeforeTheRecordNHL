import { Flip } from "./flip";
import React, { useState, useEffect } from 'react';
import s from './Counter.module.css'

export const Counter = (props) => {
    const [num, setNum] = useState(props.difference);
   
    

    
    useEffect(() => {
      setNum(props.difference)},
      [props.difference]
    );

 return (
  <div className={s.counter}>
  <h1>
    {props.isRuss ?  "Овечкину осталось забить" : "Ovechkin needs" }
  </h1>
  <div className={s.flip}><Flip value={num} /></div>
  <h2>
  {props.isRuss ? props.num_word(num) + " до звания лучшего бомбардира в истории НХЛ" 
   :  "goals to climb NHL all time high scoring record"}
  </h2>
  </div>
 )
}

