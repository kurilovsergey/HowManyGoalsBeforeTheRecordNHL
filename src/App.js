import './App.css';
import React, { useState, useEffect } from 'react';
import {HockeyPunk} from './components/HockeyPunk'
import {Logo} from './components/Logo'
import {StatTable} from './components/StatTable'
import {ScoresToday} from './components/scores/ScoresToday'
import {Footer} from './components/Footer'

import {Helmet} from "react-helmet";
import {Counter} from "./components/counter";
const axios = require('axios');

function App() {

  //количество игр и голов на начало сезона 2021/22
  let startGoal = 730;
  let startGames = 1197;
  let CurrentSeason = "20232024"

  const goalGretsky = 894;

  let [goalOvi, setOviGoals] = useState(null) //голы овечкина в текущем сезона
  let [gamesOvi, setOviGames] = useState(null) //голы овечкина в текущем сезона
  let [allGame, setAllGame] = useState(null)  //данные о играх овечкина в текущем сезона
  let [isRuss, setRuss] = useState(false) //язык 

  let [IDLastGame, setIDLastGame] = useState(null) // id игры последней
  let [aboutLastGameGolas, setAboutLastGameGolas] = useState(null) // данные игры последней

  let [IDLastGameGolas, setIdLastWithGolas] = useState(null) // id игры с последним голом
  let [aboutLastGame, setAboutLastGame] = useState(null) // данные игры с последним голом

  let [counterMatchWithoutGoal, setCounterMatchWithoutGoal] = useState(0);
  
  //let isRuss = false

  useEffect(()=> {

  //опрелеяю язык браузера
  var language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
               navigator.language ||   // All browsers
               navigator.userLanguage;
  if (language.includes('ru')) {

    setRuss(true)
  }

// запрос на количество голов в текущем созоне и количество игр   //https://api-web.nhle.com/v1/player/8471214/landing
  axios.get('https://api-web.nhle.com/v1/player/8471214/landing',
      {headers: { 'Content-Type': 'application/json' },  withCredentials: false})
  .then(function (response) {

    setOviGoals(response.data.careerTotals.regularSeason.goals)
    setOviGames(response.data.careerTotals.regularSeason.gamesPlayed)
  })

//запрос на массив игр в текущем сезоне
axios.get('https://api-web.nhle.com/v1/player/8471214/game-log/now')
.then((response) => {
  let data = response;

  //
  setAllGame(data.data.gameLog);
  //
  let game = data.data.gameLog.find((i, index) => {
    if (i.goals>0) {
      setCounterMatchWithoutGoal(index)
      return i
    }
  });

   setIDLastGame(data.data.gameLog[0].gameId)
   setAboutLastGame(data.data.gameLog[0]);

   setIdLastWithGolas(game.gameId)
   setAboutLastGameGolas(game)



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

  //функция склоняет цислительные
  let num_wordMathc = (value) => {
    let words = ['матч', 'матча', 'матчей'];
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
        <ScoresToday isRuss={isRuss} num_word={num_word} allGame={allGame} IDLastGame={IDLastGame} aboutLastGameGolas={aboutLastGameGolas}
        IDLastGameGolas={IDLastGameGolas} aboutLastGame={aboutLastGame}/>
        {counterMatchWithoutGoal > 3 && <div>Овечкин не забивает {counterMatchWithoutGoal} {num_wordMathc(counterMatchWithoutGoal)}</div>}
        <StatTable isRuss={isRuss} goalOvi={goalOvi} gamesOvi={gamesOvi}/>
      </main>
      <footer className="footer">
      <Footer isRuss={isRuss}/>
       </footer>
    </div>
  );
}

export default App;