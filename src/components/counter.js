import { Flip } from "./flip";
import React, { useState, useEffect } from 'react';

export const Counter = (props) => {
    const [num, setNum] = useState(props.difference);
    
    useEffect(() => {
      setNum(props.difference)},
      [props.difference]
    );
    
 return (
  <>
  <h1>
  <h1>
        <Flip value={num} />
      </h1>
     
      Ovechkin needs to score in NHL record
  </h1>
  </>
 )
}