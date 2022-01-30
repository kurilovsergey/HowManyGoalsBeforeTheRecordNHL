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

     axios.get('https://api-web.nhle.com/v1/gamecenter/'+props.IDLastGameWithGolas+'/play-by-play')
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
<div className={s.data}>{aboutGame.data.gameDate}</div>
<div className={s.score}>
<div>{props.findLogo(aboutGame.data.homeTeam.id)}</div>
<div className={s.gameScore}>{aboutGame.data.homeTeam.score} : {aboutGame.data.awayTeam.score}</div>
<div>{props.findLogo(aboutGame.data.awayTeam.id)}</div>
</div>
</div>
</div>
<div>
{props.aboutLastGameWithGolas.goals ? new Array(props.aboutLastGameWithGolas.goals).fill({}).map((i, index) =>  <img className={s.punk} src={hockey_puck} alt="puck"/>) : <div className={s.resault}>Ови не забил</div>}
</div>
</div> : <div>"loading"</div>
     )
    }