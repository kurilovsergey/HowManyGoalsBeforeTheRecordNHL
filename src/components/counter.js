import { Flip } from "./flip";
import React, { useState, useEffect } from 'react';
import s from './Counter.module.css'

export const Counter = (props) => {
    const [num, setNum] = useState(props.difference);
   
    
    //функция склоняет цислительные
    function num_word(value){ 
      let words = ['шайба', 'шайбы', 'шайб'];
      value = Math.abs(value) % 100; 
      let num = value % 10;
      if(value > 10 && value < 20) return words[2]; 
      if(num > 1 && num < 5) return words[1];
      if(num == 1) return words[0]; 
      return words[2];
    }
    
    useEffect(() => {
      setNum(props.difference)},
      [props.difference]
    );



 return (
  <div className={s.counter}>
  <h1>
    {props.isRuss ?  "Овечкину осталось забить" : "Ovechkin needs" }
  <br/><span className={s.flip}><Flip value={num} /></span>
  <br/>{props.isRuss ? num_word(num) + " до звания лучшего бомбардира в истории НХЛ" 
   :  "goals to climb NHL all time high scoring record"}
  </h1>
  </div>
 )
}

