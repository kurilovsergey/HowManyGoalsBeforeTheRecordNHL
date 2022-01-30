import React, { useState, useEffect } from 'react';
import s from './ScoresStyle.module.css';
import WC_logo from '../assets/WC_logo.png';
import hockey_puck from '../assets/hockey-puck.png'
import DateCountdown from 'react-date-countdown-timer';
const axios = require('axios');



export const NextGame = (props) => {
      
     let [nextGame, setNextGame] = useState(null)

     useEffect(()=> {
        // запрос на количество голов в текущем созоне и количество игр
          axios.get('https://statsapi.web.nhl.com/api/v1/teams/15?expand=team.schedule.next')
          .then(function (response) {
            setNextGame(response);
            console.log(response.data.teams[0].nextGameSchedule.dates[0].games[0].gameDate);
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
  
 <div><div>{props.findLogo(nextGame.data.teams[0].nextGameSchedule.dates[0].games[0].teams.home.team.id)}</div></div> 
<div className={s.gameScore}>- : -</div>
<div><div>{props.findLogo(nextGame.data.teams[0].nextGameSchedule.dates[0].games[0].teams.away.team.id)}</div></div> 
</div>
</div>
</div>
<div>
<Countdown date={nextGame.data.teams[0].nextGameSchedule.dates[0].games[0].gameDate}/>
</div>
</div> : <div>loading...</div>
     )
    }


    let  Countdown = (props) => {
      //console.log(date);
      const calculateTimeLeft = () => {
        //let year = new Date().getFullYear();
        const difference = +new Date(props.date) - +new Date();
        //console.log(difference);
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            //Wed Feb 02 2022 03:00:00 GMT+0300 (Москва, стандартное время)
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });
      return (
        <div className={s.vidgetInfo}>
          {'До игры: '}
          {timerComponents.length ? timerComponents : <span>Игра сеичас!</span>}
        </div>
      );
    }
    
    export default Countdown;