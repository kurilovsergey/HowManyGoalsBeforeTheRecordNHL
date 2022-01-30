import s from './ScoresStyle.module.css';
import WC_logo from '../assets/WC_logo.png';
import hockey_puck from '../assets/hockey-puck.png'
import React, { useState, useEffect } from 'react';
const axios = require('axios');

export const LastGame = (props) => {
   
  const [lastGoal, setLastGoals] = useState(props.allGame)
  const [aboutGame, setAboutGame] = useState(null)




  React.useEffect(() => {
   
    
  if (props.IDLastGameGolas) {
     axios.get(`https://statsapi.web.nhl.com/api/v1/game/${props.IDLastGameGolas}/boxscore`)
.then((response) => {
  let data = response;
  
  setAboutGame(data)
});
  }
 
   
   }, [props.IDLastGameGolas]);

 

   
return (
  aboutGame ?
<div className={s.card}>
<div className={s.info}>
Последняя игра
<hr/>
<div>
<div className={s.data}>{props.aboutLastGame.date}</div>
<div className={s.score}> 
<div>{props.findLogo(aboutGame.data.teams.home.team.id)}</div>
<div className={s.gameScore}>{aboutGame.data.teams.home.teamStats.teamSkaterStats.goals} : {aboutGame.data.teams.away.teamStats.teamSkaterStats.goals}</div>
<div>{props.findLogo(aboutGame.data.teams.away.team.id)}</div>
</div>

</div>
</div>
<div>
{props.aboutLastGame.stat.goals ? new Array(props.aboutLastGame.stat.goals).fill({}).map((i, index) =>  <img key={index} className={s.punk} src={hockey_puck} alt="puck"/>) : <div className={s.vidgetInfo}>Ови не забил</div>} 
</div>
</div> : <div>"loading"</div>
     )
    }