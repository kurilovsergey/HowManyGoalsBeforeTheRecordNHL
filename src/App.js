import './App.css';
import {Counter} from './components/Counter.js'
import {HockeyPunk} from './components/HockeyPunk'
import {Logo} from './components/Logo'
import {StatTable} from './components/StatTable'
import {ScoresToday} from './components/scores/ScoresToday'
import {Footer} from './components/Footer'
import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
const axios = require('axios');

function App() {

  //количество игр и голов на начало сезона 2021/22
  let startGoal = 730;
  let startGames = 1197;
  let CurrentSeason = "20212022"

  const goalGretsky = 894;

  let [goalOvi, setOviGoals] = useState(null) //голы овечкина в текущем сезона
  let [gamesOvi, setOviGames] = useState(null) //голы овечкина в текущем сезона
  let [allGame, setAllGame] = useState(null)  //данные о играх овечкина в текущем сезона
  let [isRuss, setRuss] = useState(false) //язык 

  let [IDLastGameWithGolas, setIdLastGameWithGolas] = useState(null) // id игры с последним голом
  let [aboutLastGameWithGolas, setAboutLastGameWithGolas] = useState(null) // данные игры с последним голом

  let [IDLastGameGolas, setIdLastWithGolas] = useState(null) // id игры с последним голом
  let [aboutLastGame, setAboutLastGame] = useState(null) // данные игры с последним голом
  
  //let isRuss = false

  useEffect(()=> {
  
  //опрелеяю язык браузера
  var language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
               navigator.language ||   // All browsers
               navigator.userLanguage;
  if (language.includes('ru')) { 

    setRuss(true)
  }
  
// запрос на количество голов в текущем созоне и количество игр
  axios.get('https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=statsSingleSeason&season='+CurrentSeason)
  .then(function (response) {
    setOviGoals(startGoal+response.data.stats[0].splits[0].stat.goals)
    setOviGames(startGames+response.data.stats[0].splits[0].stat.games)
  })
  
//запрос на массив игр в текущем сезоне
axios.get('https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=gameLog&season='+CurrentSeason)
.then((response) => {
  let data = response;
  //console.log(data);
  
  

  setAllGame(data);
  
  let Game = data.data.stats[0].splits.find(i => i.stat.goals>0);

  setAboutLastGameWithGolas(Game)
  setIdLastGameWithGolas(Game.game.gamePk);

  setIdLastWithGolas(data.data.stats[0].splits[0].game.gamePk)
  setAboutLastGame(data.data.stats[0].splits[0])


});
  },[])
 

  


  //функция склоняет цислительные
  let num_word = (value) => { 
  let words = ['шайба', 'шайбы', 'шайб'];
  value = Math.abs(value) % 100; 
  let num = value % 10;
  if(value > 10 && value < 20) return words[2]; 
  if(num > 1 && num < 5) return words[1];
  if(num == 1) return words[0]; 
  return words[2];
  }
  
  let difference = goalGretsky - goalOvi

  return (
    <div className="App">
           {isRuss ? 
           <Helmet>
                <meta charSet="utf-8" />
                <title>Овечкин Александр в НХЛ, голы сегодня, статистика, счетчик голов, таблица, рекорд лучшего бомбардира Грецки</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet> :
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ovechkin Alex scores NHL, goals, statistic, record, Gretzky, counter</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
}
      <header>
      </header>
      <main className="App-header">
        <Logo/>
        <Counter isRuss={isRuss} difference={difference} num_word={num_word}/>
        <HockeyPunk difference={difference}/>
        <ScoresToday isRuss={isRuss} num_word={num_word} allGame={allGame} IDLastGameWithGolas={IDLastGameWithGolas} aboutLastGameWithGolas={aboutLastGameWithGolas}
        IDLastGameGolas={IDLastGameGolas} aboutLastGame={aboutLastGame}/>
        <StatTable isRuss={isRuss} goalOvi={goalOvi} gamesOvi={gamesOvi}/>
      </main>
      <footer className="footer">
      <Footer isRuss={isRuss}/>
       </footer>
    </div>
  );
}

export default App;