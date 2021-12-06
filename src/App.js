import logo from './logo.svg';
import './App.css';
import {Counter} from './components/counter'
import {HockeyPunk} from './components/HockeyPunk'
import React, { useState, useEffect } from 'react';
const axios = require('axios');

function App() {

  useEffect(()=> {
    axios.get('https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=statsSingleSeason&season=20212022')
  .then(function (response) {
    setOvi(730+response.data.stats[0].splits[0].stat.goals)
    console.log(response.data.stats[0].splits[0].stat.goals);
  })
  axios.get('https://ipapi.co/json/').then((response) => {
    let data = response.data;
    console.log(response);
})
  },[])
 
  const goalGretsky = 894;
  const [goalOvi, setOvi] = useState(null)
  

  return (
    <div className="App">
      <header className="App-header">
        <Counter goalOvi={goalGretsky-goalOvi} goalGretsky={goalGretsky}/>
        <HockeyPunk goalOvi={goalGretsky-goalOvi}/>
      </header>
    </div>
  );
}

export default App;
