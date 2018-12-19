import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomeScreen from './components/landingPage/HomeScreen';
import ResultsPage from './components/results/resultsPage';
import Game from './components/game/gamePage';
import Trivia from './components/game/trivia';
import Marvel from './components/game/whoDat/marvel';
import Instructions from './components/game/instructions';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Scene It Project</h1>  
        <Switch>
          {/* <Route exact path="/" render={(renderProps) => <HomeScreen />} />
          <Route path='/results' render={(renderProps) => <ResultsPage />} /> */}
          <Route path='/instructions' render={(renderProps) => <Instructions />} />
          <Route path='/game' render={(renderProps) => <Game />} />
          <Route path='/trivia/:valueId/:categoryId/:pointsId' component={Trivia} render={(renderProps) => <Trivia />} />
          <Route path='/marvel/:pointsId' component={Marvel} render={(renderProps) => <Marvel />} />
        </Switch>
      </div>
    );
  }
}

export default App;
