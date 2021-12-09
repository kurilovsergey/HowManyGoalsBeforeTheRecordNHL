import './App.css';
import {Counter} from './components/Counter'
import {HockeyPunk} from './components/HockeyPunk'
import {Logo} from './components/Logo'
import {StatTable} from './components/StatTable'
import {ScoresToday} from './components/ScoresToday'
import React, { useState, useEffect } from 'react';
const axios = require('axios');

function App() {

  //количество игр и голов на начало сезона 2021/22
  let startGoal = 730;
  let startGames = 1197;
  let CurrentSeason = "20212022"
  
  
  let isRuss = false;

  useEffect(()=> {
  
  //опрелеяю язык браузера
  if ((navigator.language || navigator.userLanguage).includes('ru')) { isRuss = true }
  
  // console.log('lang = ',lang.includes('ru'))


  axios.get('https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=statsSingleSeason&season='+CurrentSeason)
  .then(function (response) {
    setOviGoals(startGoal+response.data.stats[0].splits[0].stat.goals)
    setOviGames(startGames+response.data.stats[0].splits[0].stat.games)

  })
  
  axios.get('https://ipapi.co/json/')
  .then((resp) => {
    let data = resp.data;
    //console.log(data.country)
    //data.country=="RU" ? setENG(false) : null
    //console.log(data)
    setIsEng(true)
    console.log(isEng)
})

axios.get('https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=gameLog&season='+CurrentSeason)
.then((response) => {
  let data = response;

  setDateLastGoal(
    {...LastGoal, 
    date: data.data.stats[0].splits[0].date,
    goals: data.data.stats[0].splits[0].stat.goals})
    })

  },[])
 
  const goalGretsky = 894;

  let [goalOvi, setOviGoals] = useState(null)
  let [gamesOvi, setOviGames] = useState(null)
  let [LastGoal, setDateLastGoal] = useState({date: null,  goals: null})
  let [isEng, setIsEng] = useState(true)
  
  
  let difference = goalGretsky - goalOvi

  return (
    <div className="App">
      <header>
      </header>
      <main className="App-header">
        <Logo/>
        <Counter isRuss={isRuss} difference={difference}/>
        <HockeyPunk difference={difference}/>
        <StatTable goalOvi={goalOvi} gamesOvi={gamesOvi}/>
        <ScoresToday LastGoal={LastGoal}/>
      </main>
      <footer>
      <hr/>
        <div><a href="https://www.instagram.com/kurilovsergey/">Made by Kurilov Sergey ❄️</a></div>
        <div>For partnership agreement, development and marketing write to kurilovsergey7@gmail.com</div>
      
      </footer>
    </div>
  );
}

export default App;
