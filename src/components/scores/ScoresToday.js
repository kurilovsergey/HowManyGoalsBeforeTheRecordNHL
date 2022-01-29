import hockey_puck from '../assets/hockey-puck.png'
import React, { useState, useEffect } from 'react';
import WC_logo from '../assets/WC_logo.png';
import {LastScores} from './LastScores.js'
import {LastGame} from './LastGame.js'
import {NextGame} from './NextGame.js'
import s from './ScoresToday.module.css'


export const ScoresToday = (props) => {




  const [lastScore, setLastScore] = useState(props.allGame);
 
  
  

  React.useEffect(() => {
    setLastScore(props.allGame);
    if (lastScore)  findLastGoal(lastScore);
  }, [props.allGame])



  //определяю текущую дату до формата 2021-02-02
  let currentDate = new Date().toISOString().slice(0, 10) 
   
  // console.log(currentDate)

  const findLastGoal = (array) => {

   }

  

 return (
  lastScore ? 
  props.isRuss ?  
  <div >
   <div className={s.widgets}>
  <LastScores  IDLastGameWithGolas={props.IDLastGameWithGolas} aboutLastGameWithGolas={props.aboutLastGameWithGolas}/>
  <LastGame  IDLastGameGolas={props.IDLastGameGolas} aboutLastGame={props.aboutLastGame}/>
  <NextGame/>

  </div>
   {/* {lastScore[0].date==currentDate || lastScore[0].goal>0 ? <div>Ovechkin scored {lastScore[0].goal} goal(s) today!</div> : null}
   {lastScore[0].date==currentDate-1 || lastScore[0].goal>0 ? <div>Ovechkin scored {lastScore[0].goal} goal(s) yesterday!</div> : null} */}
  </div>
  : 
  <div className={s.scorestoday}>
  {/* {lastScore[0].date==currentDate || lastScore[0].goal>0 ? <div>Овечкин сегодня забил {lastScore[0].goal} {props.num_word(lastScore[0].goal)}!</div> : null}
  {lastScore[0].date==currentDate-1 || lastScore[0].goal>0 ? <div>Овечкин вчера забил {lastScore[0].goal} {props.num_word(lastScore[0].goal)}!</div> : null}  */}
  </div> : <>loading...</>
 ) 
}