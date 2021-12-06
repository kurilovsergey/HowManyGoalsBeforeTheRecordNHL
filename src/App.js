import './App.css';
import {Counter} from './components/counter'
import {HockeyPunk} from './components/HockeyPunk'
import {Logo} from './components/Logo'
import {StatTable} from './components/StatTable'
import React, { useState, useEffect } from 'react';
const axios = require('axios');

function App() {

  let startGoal = 730;
  let startGames = 1197;

  useEffect(()=> {
    axios.get('https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=statsSingleSeason&season=20212022')
  .then(function (response) {
    setOviGoals(startGoal+response.data.stats[0].splits[0].stat.goals)
    setOviGames(startGames+response.data.stats[0].splits[0].stat.games)
    console.log(response.data.stats[0].splits[0].stat.games);
  })
  axios.get('https://ipapi.co/json/').then((response) => {
    let data = response.data;
    //console.log(response);
})
  },[])
 
  const goalGretsky = 894;

  const [goalOvi, setOviGoals] = useState(null)
  const [gamesOvi, setOviGames] = useState(null)
  
  let difference = goalGretsky-goalOvi

  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <Counter difference={difference}/>
        <HockeyPunk difference={difference}/>
        <StatTable goalOvi={goalOvi} gamesOvi={gamesOvi}/>
      </header>
    </div>
  );
}

export default App;
