import { Flip } from "./flip";
import React, { useState, useEffect } from 'react';
import s from './Counter.module.css'

export const Counter = (props) => {
    const [num, setNum] = useState(props.difference);
    const [leng, setLeng] = useState(props.isEng);
    
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

    useEffect(() => {
      setLeng(props.isEng)},
      [props.isEng]
    );

    console.log(leng)
    
 return (
  <div className={s.counter}>
  <h1>
    {props.isRuss ? "Ovechkin needs" : "Овечкину осталось забить"}
  </h1>
    <div className={s.flip}><Flip  value={num} /></div>
  <h1>
   {props.isRuss ? "goals to climb NHL all time high scoring record" 
   : num_word(num) + " до звание лучшего снайпера в истории НХЛ"}
   
  </h1>
  </div>
 )
}

