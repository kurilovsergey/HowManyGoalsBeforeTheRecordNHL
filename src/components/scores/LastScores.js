import s from './ScoresStyle.module.css';
import WC_logo from '../assets/WC_logo.png';
import hockey_puck from '../assets/hockey-puck.png'
import React, { useState, useEffect } from 'react';
const axios = require('axios');

export const LastScores = (props) => {
   
  const [lastGoal, setLastGoals] = useState(props.allGame)
  const [aboutGame, setAboutGame] = useState(null)




  React.useEffect(() => {
   
    
  if (props.IDLastGameWithGolas) {
     axios.get(`https://statsapi.web.nhl.com/api/v1/game/${props.IDLastGameWithGolas}/boxscore`)
.then((response) => {
  let data = response;
  
  setAboutGame(data)
});
  }
 
   
   }, [props.IDLastGameWithGolas]);


  
  

 

     
return (
  aboutGame ?
<div className={s.card}>
<div className={s.info}>
Последний гол
<hr/>
<div>
<div className={s.data}>{props.aboutLastGameWithGolas.date}</div>
<div className={s.score}>
<div><img className={s.logo} alt="logo washington capitals" src={WC_logo}/></div>
<div className={s.gameScore}>{aboutGame.data.teams.home.teamStats.teamSkaterStats.goals} : {aboutGame.data.teams.away.teamStats.teamSkaterStats.goals}</div>
<div><img className={s.logo} alt="logo washington capitals" src={WC_logo}/></div>
</div>
</div>
</div>
<div>
{props.aboutLastGameWithGolas.stat.goals ? new Array(props.aboutLastGameWithGolas.stat.goals).fill({}).map((i, index) =>  <img className={s.punk} src={hockey_puck} alt="puck"/>) : <div className={s.resault}>Ови не забил</div>} 
</div>
</div> : <div>"loading"</div>
     )
    }