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
      //`https://api-web.nhle.com/v1/gamecenter/${props.IDLastGameGolas}/play-by-play\`
     axios.get(`https://api-web.nhle.com/v1/gamecenter/${props.IDLastGameGolas}/play-by-play`)
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
<div className={s.data}>{aboutGame.data.gameDate}</div>
<div className={s.score}> 
<div>{props.findLogo(aboutGame.data.homeTeam.id)}</div>
<div className={s.gameScore}>{aboutGame.data.homeTeam.score} : {aboutGame.data.awayTeam.score}</div>
<div>{props.findLogo(aboutGame.data.awayTeam.id)}</div>
</div>

</div>
</div>
{/*<div>*/}
{/*{props.aboutLastGame.stat.goals ? new Array(props.aboutLastGame.stat.goals).fill({}).map((i, index) =>  <img key={index} className={s.punk} src={hockey_puck} alt="puck"/>) : <div className={s.vidgetInfo}>Ови не забил</div>} */}
{/*</div>*/}
</div> : <div>"loading"</div>
     )
    }