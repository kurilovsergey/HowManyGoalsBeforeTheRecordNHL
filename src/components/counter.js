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
    Ovechkin needs 
  </h1>
    <div className={s.flip}><Flip  value={num} /></div>
  <h1>
    goals to climb NHL all time high scoring record 
  </h1>
  </div>
 )
}

