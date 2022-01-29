import React, { useState, useEffect } from 'react';
import s from './ScoresStyle.module.css';
import WC_logo from '../assets/WC_logo.png';
import hockey_puck from '../assets/hockey-puck.png'
const axios = require('axios');


export const NextGame = (props) => {

     let [nextGame, setNextGame] = useState(null)

     useEffect(()=> {
        // запрос на количество голов в текущем созоне и количество игр
          axios.get('https://statsapi.web.nhl.com/api/v1/teams/15?expand=team.schedule.next')
          .then(function (response) {
            console.log(response.data.teams[0].nextGameSchedule.dates[0].date);
            setNextGame(response)
          })
          
      
          },[])

return (
 nextGame ?    
<div className={s.card}>
<div className={s.info}>
Следующая игра
<hr/>
<div>
<div className={s.data}>{nextGame.data.teams[0].nextGameSchedule.dates[0].date}</div>
<div className={s.score}>
<div><img className={s.logo} alt="logo washington capitals" src={WC_logo}/></div>
<div className={s.gameScore}>- : -</div>
<div><img className={s.logo} alt="logo washington capitals" src={WC_logo}/></div>
</div>
</div>
</div>
<div>
<img className={s.punk} src={hockey_puck} alt="puck"/>
<img className={s.punk} src={hockey_puck} alt="puck"/>
</div>
</div> : <div>loading...</div>
     )
    }