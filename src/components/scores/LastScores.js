import s from './ScoresStyle.module.css';
import WC_logo from '../assets/WC_logo.png';
import hockey_puck from '../assets/hockey-puck.png'
import React, { useState, useEffect } from 'react';
const axios = require('axios');

export const LastScores = (props) => {
   
  const [lastG, setLastGoals] = useState(props.lastGoal)
  const [aboutGame, setAboutGame] = useState(null)
     
  React.useEffect(() => {
     setLastGoals(props.lastGoal);
     //https://statsapi.web.nhl.com/api/v1/game/2021020560/boxscore
  
     axios.get('https://statsapi.web.nhl.com/api/v1/game/2021020560/boxscore')
.then((response) => {
  let data = response;
  console.log(data);

});
 
   
   }, [props.LastGoal])

  

     
return (
<div className={s.card}>
<div className={s.info}>
Последний гол
<hr/>
<div>
<div className={s.data}>03.07.2020</div>
<div className={s.score}>
<div><img className={s.logo} alt="logo washington capitals" src={WC_logo}/></div>
<div className={s.gameScore}>4 - 3</div>
<div><img className={s.logo} alt="logo washington capitals" src={WC_logo}/></div>
</div>
</div>
</div>
<div>
<img className={s.punk} src={hockey_puck} alt="puck"/>
<img className={s.punk} src={hockey_puck} alt="puck"/>
</div>
</div>
     )
    }