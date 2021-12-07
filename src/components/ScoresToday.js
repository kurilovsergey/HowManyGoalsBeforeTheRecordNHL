import hockey_puck from './assets/hockey-puck.png'
import s from './HockeyPunk.module.css'
import React, { useState, useEffect } from 'react';

export const ScoresToday = (props) => {

  const [lastScore, setLastScore] = useState(props.LastGoal);

  React.useEffect(() => {
    setLastScore(props.LastGoal);
  }, [props.LastGoal])

  //определяю текущую дату до формата 2021-02-02
  let currentDate = new Date().toISOString().slice(0, 10) 
  console.log(lastScore.date)
  console.log(currentDate)

 return (
  <>
  <div className={s.scorestoday}>
   {lastScore.date==currentDate || lastScore.goal>0 ? <div>Ovechkin scored {lastScore.goal} goal(s) today</div> : null}
  </div>
  
  </>
 )
}