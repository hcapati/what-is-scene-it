import React, { Component } from 'react';
import ResultsItem from './resultsItem';
import HighScores from './highScores';
import NavBar from './../navBar';

// renders top scores and personal result points 

// stretch: welcome banner after signing up, welcome back if returning

class ResultsPage extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <NavBar />
                <ResultsItem />
                <HighScores />
            </div>
        );
    }
}

export default ResultsPage