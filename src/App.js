import React, { Component } from 'react';
import ResultsPage from './components/results/resultsPage';
import { Switch, Route } from 'react-router-dom';



import './App.css';
import HomeScreen from './components/landingPage/HomeScreen';
import Results from './components/results/resultsPage';
import Game from './components/game/gamePage';
import Trivia from './components/game/trivia';




class App extends Component {
  render() {
    return (
      <div>
        <h1>Scene It Project</h1>
  
        <Switch>
          {/* <Route exact path="/" render={(renderProps) => <HomeScreen />} /> */}
          {/* <Route path='/results' render={(renderProps) => <ResultsPage />} /> */}
          <Route path='/game' render={(renderProps) => <Game />} />
          <Route path='/trivia/:valueId/:categoryId' component={Trivia} render={(renderProps) => <Trivia />} />
        </Switch>
        {/* <Game /> */}
      </div>
    );
  }
}

export default App;
