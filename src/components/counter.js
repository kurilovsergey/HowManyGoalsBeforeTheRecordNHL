import { Flip } from "./flip";
import React, { useState, useEffect } from 'react';

export const Counter = (props) => {
    const [num, setNum] = useState(props.goalOvi);
    
    if (props.goalOvi<num) {setNum(props.goalOvi)}
    //if (props.goalOvi && props.goalOvi<num) {animationCurrent(props.goalOvi, props.goalGretsky)}

    const animationCurrent = (goalOvi,goalGretsky) => {
      let leftnumb = Math.floor(goalOvi/100)
      console.log(leftnumb)
    }

 return (
  <>
  <h1>
  <h1>
        <Flip value={num} />
      </h1>
     {/*  <button className="danger" onClick={() => setNum(num - 1)}>
        Decrease by 1
      </button>
      <button onClick={() => setNum(num + 1)}>Increase by 1</button>  */}
      Ovechkin needs to score in NHL record: {props.goalOvi}
  </h1>
  </>
 )
}