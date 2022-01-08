import hockey_puck from '../assets/hockey-puck.png'
import React, { useState, useEffect } from 'react';
import WC_logo from '../assets/WC_logo.png';
import {LastScores} from './LastScores.js'
import {LastGame} from './LastGame.js'
import {NextGame} from './NextGame.js'
import s from './ScoresToday.module.css'


export const ScoresToday = (props) => {

  const [lastScore, setLastScore] = useState(props.LastGoal);

  React.useEffect(() => {
    setLastScore(props.LastGoal);
  }, [props.LastGoal])

  //определяю текущую дату до формата 2021-02-02
  let currentDate = new Date().toISOString().slice(0, 10) 
   //console.log(lastScore)
  // console.log(currentDate)

 return (
   props.isRuss ?  
  <div >

  <div className={s.widgets}>
  <LastScores/>
  <LastGame/>
  <NextGame/>

  </div>
   {lastScore.date==currentDate || lastScore.goal>0 ? <div>Ovechkin scored {lastScore.goal} goal(s) today!</div> : null}
   {lastScore.date==currentDate-1 || lastScore.goal>0 ? <div>Ovechkin scored {lastScore.goal} goal(s) yesterday!</div> : null}
  </div>
  : 
  <div className={s.scorestoday}>
  {lastScore.date==currentDate || lastScore.goal>0 ? <div>Овечкин сегодня забил {lastScore.goal} {props.num_word(lastScore.goal)}!</div> : null}
  {lastScore.date==currentDate-1 || lastScore.goal>0 ? <div>Овечкин вчера забил {lastScore.goal} {props.num_word(lastScore.goal)}!</div> : null}
  </div>
 )
}